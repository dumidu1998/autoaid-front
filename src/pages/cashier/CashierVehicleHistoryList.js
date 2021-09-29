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
import CashierVehicleHistoryDisplay from '../../components/Organs/cashier/CashierVehicleHistoryDisplay'

export default function CashierVehicleHistoryList() {
const [repairList, setrepairList] = useState([]);
const [resetTable, setresetTable] = useState(true);
const userId=getCookie('userId');
var config = {
    headers: {
        'Authorization': 'Bearer ' + getCookie('token'),
    }
}
useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/cashier/getHandOverRepairs`, config)
        .then(function (response) {
            console.log(response.data);
            setrepairList(response.data);
        })
        .catch(function (error) {
            console.log(error.response.data);
        });
}, [resetTable])
return (
    <div>
        <div className="md:ml-40 bg-Background-0"><CashierSideBar name="History" roleName="Cashier"/></div>
        <div className="w-full absolute bg-Background-0 h-screen">
        <div className=" bg-Background-0  h-screen ">
            <div className="flex flex-row md:ml-40">
                    <div className="container mx-auto max-w-full overflow-hidden">
                        <div className="mt-10 mb-12">
                            <SearchBarVehicle resetTable={resetTable} setresetTable={setresetTable}  vehicleList={repairList} setvehicleList={setrepairList}/>
                        </div>
                        <div className=" mb-8 w-11/12 grid grid-cols-1 place-items-center mt-20 ml-3 lg:ml-12 xl:ml-14">
                            <CashierVehicleHistoryDisplay repairList={repairList}/>
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
        </div>
    </div>
)
}

    //     <div>
    //     <div className="md:ml-40  bg-Background-0 "><CashierSideBar name="DashBoard" roleName="Cashier"/></div>
    //     <div className=" w-full absolute bg-Background-0 h-screen">
    //         <div className="md:ml-40 ">
    //             <div className="px-3 md:px-8 -mt-24">
    //                 <div className="container mx-auto max-w-full mt-36">
    //                     <div className="font-primary text-xl md:text-2xl font-bold flex justify-center items-center mb-10 text-white">Completed Vehicle History</div>
    //                     <div className="flex justify-center -mt-12 ">
    //                        <SearchBarVehicle/>
    //                     </div>
    //                     <div className="flex justify-center items-center ">
    //                         <div className="bg-white w-44 sm:w-48 md:w-52 lg:w-56 h-12 mt-4 mb-4 mr-4 flex items-center justify-center font-primary">
    //                                 {/* need to insert a datePicker  */} Calnder 1
    //                         </div>
    //                         <div className="bg-white w-44 sm:w-48 md:w-52 lg:w-56 h-12 mt-4 mb-4 ml-4 flex items-center justify-center font-primary" >
    //                                   {/* need to insert a datePicker  */}Calnder 2
    //                         </div>
    //                     </div>
    //                     <div className="flex justify-center items-center mt-24 mb-12">
    //                         <SearchedVehicleList/>
    //                     </div>
    //                 </div>
    //             </div>   
    //         </div>
    //     </div>
    // </div>
    // )
// }
