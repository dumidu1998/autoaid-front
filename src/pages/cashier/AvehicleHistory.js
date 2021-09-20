import React from 'react'
import TopBarNavigetable from '../../components/Atoms/cashier/TopBarNavigetable'

export default function AvehicleHistory() {
    return (
        <div className="w-full absolute bg-Background-0 h-full">
            <div>
                <TopBarNavigetable link="/cashier/history" heading1="Vehicle number eka "/>
            </div>
            <div className="flex justify-center mt-10">
                <div><p className="font-primary text-xl lg:text-2xl ">Vehicle Service History</p></div>
            </div>
            <div className=" w-full h-full flex justify-center ">
                <div className="bg-white w-10/12 h-96 mt-20">

                </div>
            </div>
        </div>
    )
}
