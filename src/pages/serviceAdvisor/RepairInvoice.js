import React from 'react'
import Invoice from '../../components/Moleculars/Invoice'
import SideNav from '../../components/Moleculars/serviceAdvisor/sideNav'
import BackTopBar from '../../components/Atoms/serviceStation/BackTopBar'

export default function RepairInvoice() {
    return (
        <div>
            <div className=" bg-Background-0 h-full pb-12 ">
            <div className="flex flex-row">
                <div className="">
                    <SideNav />
                </div>
                <div className="w-full flex flex-col xl:ml-40 ">
                    {/* <TopContainer heading1="Dashboard" heading2="Service Advisor" addnewbtntext="Add New"/> */}
                    {/* <AdminTopBar name="Vehicle Registration" roleName="Service Advisor" /> */}
                    <BackTopBar link="/serviceadvisor" heading1="Invoice"/>
            
                    {/* <div className="font-primary text-xl font-medium ml-6 mt-8 md:text-2xl lg:text-3xl xl:text-4xl">Sections</div> */}
                    <div className="my-10 flex flex-col items-center space-y-7">
                        <Invoice/>
                    </div>
                </div>
            
        </div>
        </div>
        </div>
    )
}
