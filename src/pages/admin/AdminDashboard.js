
import AdminSideBar from '../../components/Moleculars/admin/AdminSideBar';
import DashBoardVehicleInfoCard from '../../components/Moleculars/admin/DashBoardVehicleInfoCard';
import DashBoardVehicleInfoSectionHeadingMolecular from '../../components/Moleculars/admin/DashBoardVehicleInfoSectionHeadingMolecular';
import DashBoardSectionDetails from '../../components/Organs/admin/DashBoardSectionDetails';
import DashBoardTransactionOrgan from '../../components/Organs/admin/DashBoardTransactionOrgan';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import React from 'react'
import DashboardStatusCardsGrid from '../../components/Organs/admin/DashboardStatusCardsGrid';

export default function AdminDashboard() {
    return  (
                <div className="relative bg-Background-0">
                    <AdminSideBar name="DashBoard " roleName="Admin"/>
                    
                        <div className="w-10/12 absolute top-5 right-10 ">
                            <div className="bg-whit w-full mt-3 rounded-lg h-96 p-5">
                                <div className=" border-0 h-80 mt-2 flex justify-center items-center">
                                    <DashboardStatusCardsGrid/> 
                                </div>
                        </div>

                        <div>
                            <div className="flex justify-between">
                                    <div className="bg-white px-9 rounded-xl shadow-xl mr-4 w-1/2 h-full py-3 mt-2">
                                        <DashBoardVehicleInfoSectionHeadingMolecular/>
                                        <div className="bg-whit overflow-auto w-full h-64 mt-6">
                                            <DashBoardSectionDetails/>
                                            <DashBoardSectionDetails/>
                                            <DashBoardSectionDetails/>
                                        </div>
                                    </div>
                                    <div  className="bg-white px-9 rounded-xl shadow-xl ml-4  w-1/2 h-full overflow-auto py-3 mt-2">
                                        <div className="font-xl text-lg flex justify-center">Today's Transaction History</div>
                                            <div className="bg-white  overflow-auto w-full h-64 mt-6">
                                                <DashBoardTransactionOrgan price="3260" number="CAZ-4079"/>
                                                <DashBoardTransactionOrgan price="1400" number="ABC-6839"/>
                                                <DashBoardTransactionOrgan price="1050" number="45-4502"/>
                                                {/* <DashBoardTransactionOrgan price="3260" number="CAZ-4079"/>
                                                <DashBoardTransactionOrgan price="1400" number="ABC-6839"/>
                                                <DashBoardTransactionOrgan price="1050" number="45-4502"/> */}
                                            </div>
                                        </div>
                                    </div>
                            </div>
                    
                        </div>
                    </div>
        )
}
