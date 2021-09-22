import React, { useEffect, useState } from 'react'
import AdminTopBar from '../../components/Atoms/admin/AdminTopBar'
import EndPath from '../../components/Atoms/EndPath'
import SearchVihicleRowOne from '../../components/Atoms/SearchVihicleRowOne'
import SearchVihicleRowThree from '../../components/Atoms/SearchVihicleRowThree'
import SearchVihicleRowTwo from '../../components/Atoms/SearchVihicleRowTwo'
import SearchBarVehicle from '../../components/Atoms/serviceStation/SearchBarVehicle'
import StartPath from '../../components/Atoms/StartPath'
import SideNav from '../../components/Moleculars/serviceAdvisor/sideNav'
import VehicleListTable from '../../components/Organs/serviceAdvisor/VehicleListTable'
import axios from 'axios'
import { getCookie } from '../../jsfunctions/cookies'
import { ToastContainer } from 'react-toastify'
export default function SearchVehicle() {
    const [vehicleList, setvehicleList] = useState([]);
    const [resetTable, setresetTable] = useState(true);
    const userId=getCookie('userId');
    var config = {
        headers: {
            'Authorization': 'Bearer ' + getCookie('token'),
        }
    }
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/advisor/getAllRepairs/${userId}`, config)
            .then(function (response) {
                console.log(response.data);
                setvehicleList(response.data);
            })
            .catch(function (error) {
                console.log(error.response.data);
            });
    }, [resetTable])
    return (
            <div className=" bg-Background-0  h-screen ">
            <div className="flex flex-row">
                <div className="">
                    <SideNav />
                </div>
                <div className="w-full flex flex-col xl:ml-40">
                    <AdminTopBar name="Repair Info" roleName="Service Advisor" />
                    <div className="container mx-auto max-w-full overflow-hidden">
                        <div className="mt-20 mb-12">
                            <SearchBarVehicle resetTable={resetTable} setresetTable={setresetTable}  vehicleList={vehicleList} setvehicleList={setvehicleList}/>
                        </div>
                        <div className="mb-8 w-11/12 grid grid-cols-1 place-items-center mt-32 ml-3 lg:ml-12 xl:ml-14">
                            <VehicleListTable vehicleList={vehicleList}/>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
            </div>
    )
}
