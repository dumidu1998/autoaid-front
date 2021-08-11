import React, { Component } from 'react';
import AdminSideBar from '../../components/Moleculars/admin/AdminSideBar';
import DashBoardVehicleInfoCard from '../../components/Moleculars/admin/DashBoardVehicleInfoCard';
import DashBoardVehicleInfoSectionHeadingMolecular from '../../components/Moleculars/admin/DashBoardVehicleInfoSectionHeadingMolecular';
import DashBoardSectionDetails from '../../components/Organs/admin/DashBoardSectionDetails';
import DashBoardTransactionOrgan from '../../components/Organs/admin/DashBoardTransactionOrgan';
class AdminDashboard extends Component {
    state = {  }
    render() { 
        return ( 
                <div> 
                    <div className="relative bg-Background-0">
                        <AdminSideBar name="DashBoard " roleName="Admin"/>
                        <div className="w-10/12 absolute top-28 right-10 ">
                            <div>
                                <div className="flex justify-between">
                                        <div className="bg-white px-9 rounded-xl shadow-xl mr-4 w-1/2 h-64 py-3 mt-2">
                                            <DashBoardVehicleInfoSectionHeadingMolecular/>
                                            <div className="bg-white shadow-xl overflow-auto w-full h-48">
                                                <DashBoardSectionDetails/>
                                                <DashBoardSectionDetails/>
                                                <DashBoardSectionDetails/>
                                                <DashBoardSectionDetails/>
                                                <DashBoardSectionDetails/>
                                                <DashBoardSectionDetails/>
                                                <DashBoardSectionDetails/>
                                                <DashBoardSectionDetails/>
                                            </div>
                                            
                                            
                                        </div>
                                        <div  className="bg-white px-9 rounded-xl shadow-xl ml-4  w-1/2 h-64 overflow-auto py-3 mt-2">
                                            <span className="font-xl text-lg flex justify-center">Today's Transaction History</span>
                                            <div className="bg-white shadow-xl overflow-auto w-full h-48">
                                                <DashBoardTransactionOrgan price="3260" number="CAZ-4079"/>
                                                <DashBoardTransactionOrgan price="1400" number="ABC-6839"/>
                                                <DashBoardTransactionOrgan price="1050" number="45-4502"/>
                                                <DashBoardTransactionOrgan price="3260" number="CAZ-4079"/>
                                                <DashBoardTransactionOrgan price="1400" number="ABC-6839"/>
                                                <DashBoardTransactionOrgan price="1050" number="45-4502"/>
                                            </div>
                                        </div>
                                </div>
                                <div className="bg-white w-full mt-3 rounded-lg h-96 p-5">
                                        <div className=" border-2 h-80 mt-2 flex justify-center items-center">
                                            <div className="text-gray-300 text-4xl">Screen View</div>
                                        </div>
                                </div>
                                </div>
                           
                            </div>
                    </div>
                      
                </div>
         );
    }
   
}
 
export default AdminDashboard;