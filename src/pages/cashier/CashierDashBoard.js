import React from 'react'
import CashierSideBar from '../../components/Moleculars/cashier/CashierSideBar'

export default function CashierDashBoard() {
    return (
        <div>
            <div className="md:ml-40 "><CashierSideBar name="Reports" roleName="Admin"/></div>
            <div className=" w-full absolute bg-Background-0 ">
                <div className="md:ml-40 ">
                    {/* <div className="font-primary text-xl font-medium ml-6 mt-8 md:text-2xl lg:text-3xl xl:text-4xl">Sections</div> */}
                    <div className="px-3 md:px-8 -mt-24">
                        <div className="container mx-auto max-w-full">

                        </div>
                    </div>   
                </div>
            </div>
        </div>
    )
}
