import React from 'react'
import Calander from '../../components/Atoms/customer/Calander'
import SearchBarVehicle from '../../components/Atoms/serviceStation/SearchBarVehicle'
import CashierSideBar from '../../components/Moleculars/cashier/CashierSideBar'
import SearchedVehicleList from '../../components/Organs/cashier/SearchedVehicleList'

export default function CashierVehicleHistoryList() {
    return (
        <div>
        <div className="md:ml-40 "><CashierSideBar name="DashBoard" roleName="Cashier"/></div>
        <div className=" w-full absolute bg-Background-0 h-full">
            <div className="md:ml-40 ">
                <div className="px-3 md:px-8 -mt-24">
                    <div className="container mx-auto max-w-full mt-36">
                        <div className="font-primary text-xl md:text-2xl font-bold flex justify-center items-center mb-10">Completed Vehicle History</div>
                        <div className="flex justify-center -mt-12 ">
                           <SearchBarVehicle/>
                        </div>
                        <div className="flex justify-center items-center ">
                            <div className="bg-white w-44 sm:w-48 md:w-52 lg:w-56 h-12 mt-4 mb-4 mr-4 flex items-center justify-center font-primary">
                                    {/* need to insert a datePicker  */} Calnder 1
                            </div>
                            <div className="bg-white w-44 sm:w-48 md:w-52 lg:w-56 h-12 mt-4 mb-4 ml-4 flex items-center justify-center font-primary" >
                                      {/* need to insert a datePicker  */}Calnder 2
                            </div>
                        </div>
                        <div className="flex justify-center items-center mt-24 mb-12">
                            <SearchedVehicleList/>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    </div>
    )
}
