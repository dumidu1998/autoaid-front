import React from 'react'
import SearchBarVehicle from '../../components/Atoms/serviceStation/SearchBarVehicle'
import CashierSideBar from '../../components/Moleculars/cashier/CashierSideBar'

export default function CashierVehicleHistoryList() {
    return (
        <div>
        <div className="md:ml-40 "><CashierSideBar name="DashBoard" roleName="Cashier"/></div>
        <div className=" w-full absolute bg-Background-0 h-screen">
            <div className="md:ml-40 ">
                <div className="px-3 md:px-8 -mt-24">
                    <div className="container mx-auto max-w-full mt-36">
                        <div className="font-primary text-xl md:text-2xl font-bold flex justify-center items-center mb-10">Completed Vehicle History</div>
                        <div className="flex justify-center -mt-6 ">
                           <SearchBarVehicle/>
                        </div> 
                    </div>
                </div>   
            </div>
        </div>
    </div>
    )
}
