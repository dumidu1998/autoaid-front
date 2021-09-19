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
                        <Calander/>
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
