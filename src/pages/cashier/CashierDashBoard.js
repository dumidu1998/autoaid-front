import CashierCompletedBar from '../../components/Atoms/cashier/CashierCompletedBar'
import CashierSideBar from '../../components/Moleculars/cashier/CashierSideBar'
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
import CashierVehicleList from '../../components/Organs/cashier/CashierVehicleList'

export default function CashierDashBoard() {
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
        <div>
            <div className="md:ml-40 bg-Background-0"><CashierSideBar name="DashBoard" roleName="Cashier"/></div>
            <div className="w-full absolute bg-Background-0 h-screen">
            <div className=" bg-Background-0  h-screen ">
                <div className="flex flex-row md:ml-40">
                        <div className="container mx-auto max-w-full overflow-hidden">
                            <div className="mt-10 mb-12">
                                <SearchBarVehicle resetTable={resetTable} setresetTable={setresetTable}  vehicleList={vehicleList} setvehicleList={setvehicleList}/>
                            </div>
                            <div className=" mb-8 w-11/12 grid grid-cols-1 place-items-center mt-20 ml-3 lg:ml-12 xl:ml-14">
                                <CashierVehicleList vehicleList={vehicleList}/>
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
    
                {/* <div className="md:ml-40 ">
                    <div className="px-3 md:px-8 -mt-24">
                        <div className="container mx-auto max-w-full mt-36">
                            <div className="font-primary text-xl md:text-2xl font-bold flex justify-center items-center mb-10 text-white">Completed Vehicle List</div>
                            <div className="w-11/12 ml-8 md:ml-12 grid grid-cols-1 gap-4 border-2 border-gray-400 p-8 rounded-lg ">
                                <CashierCompletedBar one="one" two="two" name="completed"/>
                                <CashierCompletedBar one="one" two="two" name="completed"/>
                                <CashierCompletedBar one="one" two="two" name="completed"/>
                    
                            </div> 
                        </div>
                    </div>   
                </div> */}
            </div>
        </div>
    )
}
