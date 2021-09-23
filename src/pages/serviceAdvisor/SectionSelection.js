import React, { useState, useEffect } from 'react'
import CostEstimation from '../../components/Atoms/CostEstimation'
import SelectedServiceActivitiesSVAD from '../../components/Atoms/SelectedServiceActivitiesSVAD'
import SelectedSevicesSVAD from '../../components/Atoms/SelectedSevicesSVAD'
import SectionItems from '../../components/Atoms/serviceStation/SectionItems'
import SectionSelectionTop from '../../components/Atoms/serviceStation/SectionSelectionTop'
import SelectionSectionNavbar from '../../components/Atoms/serviceStation/SelectionSectionNavbar'
import TopContainerVNo from '../../components/Atoms/technician/TopContainerVNo'
import TimeEstimationSVAD from '../../components/Atoms/TimeEstimationSVAD'
import SelectionSectionNavbarMolecular from '../../components/Moleculars/serviceAdvisor/SelectionSectionNavbarMolecular'
import SideNav from '../../components/Moleculars/serviceAdvisor/sideNav'
import axios from 'axios'
import { getCookie } from '../../jsfunctions/cookies'
import { useLocation, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { toast } from 'react-toastify'


export default function SectionSelection() {
    const [sectionName, setsectionName] = useState();
    const [subCatDetails, setsubCatDetails] = useState([{}]);
    const [repairList, setrepairList] = useState([]);
    const [totalTime, settotalTime] = useState(0);
    const [estimatedPrice, setestimatedPrice] = useState(0);
    // const repairId=0;
    const history = useHistory();

    const location = useLocation();
    console.log(location.state);

    var config = {
        headers: {
            'Authorization': 'Bearer ' + getCookie('token'),
        }
    }
    function proceedRepair() {
        //Add Repair
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/advisor/addRepair`, {
            "paymentType": "ONLINE",
            "userId": location.state.userId,
            "vin": location.state.vin
        }, config)
            .then(function (response) {
                console.log(response.data);
                toast.success('✔ Repair Added Successfully');
                // Then add service entries
                axios.post(`${process.env.REACT_APP_API_BASE_URL}/advisor/add service entries`, {
                    "userId": location.state.userId,
                    "repairId": response.data,
                    "serviceEntryInstances": repairList
                }, config)
                    .then(function (res) {
                        toast.success('✔ Entries Added Successfully');
                        console.log(res.data);
                        axios.get(`${process.env.REACT_APP_API_BASE_URL}/advisor/nextslot/${response.data}`, config)
                            .then(function (nextSlotResponse) {
                                console.log(nextSlotResponse.data);
                                history.push({
                                    pathname: '/serviceadvisor/checklist',
                                    state: response.data
                                });
                            })
                            .catch(function (error) {
                                // console.log(error.nextSlotResponse.data);
                                toast.error('❌' + error.nextSlotResponse.data);
                            })

                    })
                

            })

    }
    
    function inspectionOnly() {
        console.log("Redirect to cashier");

    }
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/advisor/getSubCategories/${sectionName}`, config)
            .then(function (response) {
                console.log(response.data);
                setsubCatDetails(response.data);
            })
    }, [sectionName])


    return (
        <div className=" bg-Background-0 h-full pb-12 xl:h-full">
            <div className="flex flex-row">
                <div className="">
                    <SideNav />
                </div>
                <div className="w-full flex flex-col xl:ml-40 overflow-hidden">
                    <SectionSelectionTop heading1={location.state.vehicleNo} />
                    <div className="grid grid-cols-1 xl:grid-cols-4 xl:ml-8  w-11/12 xl:w-10/12 ">
                        <div className="w-full bg-white shadow-xl rounded-lg mt-12  px-8 py-16 xl:col-span-3">
                            <div className="font-primary text-xl">Select Section</div>
                            <div className="  p-1 rounded-lg mt-4 w-full">
                                <SelectionSectionNavbarMolecular sectionName={sectionName} setsectionName={setsectionName} />
                            </div>
                            <div>
                                {subCatDetails.map(subCat => <SectionItems estimatedPrice={estimatedPrice} setestimatedPrice={setestimatedPrice}
                                    totalTime={totalTime} settotalTime={settotalTime} setrepairList={setrepairList} repairList={repairList}
                                    subCat={subCat} />)}
                            </div>
                        </div>
                        <div className=" w-full xl:w-80 2xl:w-96 mb-12 bg-white shadow-xl rounded-lg mt-12 p-8 xl:ml-12 xl:mb-0">
                            <SelectedSevicesSVAD heading1="Selected Service" description="Time and Cost can be differ with the change of requirements " />
                            <div className="mt-6 mb-4">

                                {repairList.map(addedRepair => <SelectedServiceActivitiesSVAD addedRepair={addedRepair}
                                    repairList={repairList} setrepairList={setrepairList} totalTime={[totalTime, settotalTime]}
                                    estimatedPrice={[estimatedPrice, setestimatedPrice]} />)}

                                <div className="border-b-2 mt-4"></div>
                            </div>
                            <div className="mt-6 ml-12 mr-12 xl:ml-1 xl:mr-1">
                                <TimeEstimationSVAD time={totalTime} />
                            </div>
                            <div className="mt-6 ml-12 mr-12 xl:ml-1 xl:mr-1">
                                <CostEstimation cost={estimatedPrice.toFixed(2)} />
                                {/* Need to add styles */}
                                <div className="flex flex-col justify-center items-center">
                                    <button onClick={proceedRepair} className="  w-64 xl:w-56 bg-blue-800 text-white rounded-lg p-4  mt-8">Proceed to repair</button>
                                    <button onClick={inspectionOnly} className=" w-64 xl:w-56 bg-red-800 text-white rounded-lg p-4 mt-4 mb-6">Inspection Only</button>
                                </div>
                            </div>
                            <div className="border-b-2 mt-4"></div>
                            <div className="border-b-2 mt-6"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

