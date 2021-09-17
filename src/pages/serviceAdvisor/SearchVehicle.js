import React from 'react'
import AdminTopBar from '../../components/Atoms/admin/AdminTopBar'
import SideNav from '../../components/Moleculars/serviceAdvisor/sideNav'
export default function SearchVehicle() {
    return (
            <div className=" bg-Background-0 mb-12 h-screen">
            <div className="flex flex-row">
                <div className="">
                    <SideNav />
                </div>
                <div className="w-full flex flex-col xl:ml-40">
                    <AdminTopBar name="XXXXXXXX" roleName="Service Advisor" />

                    <div className="container mx-auto max-w-full overflow-hidden">

                    </div>
                </div>
            </div>
            </div>
    )
}
