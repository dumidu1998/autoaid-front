import React from 'react'
import TopContainer from '../../components/Atoms/serviceStation/TopContainer'
import SideNav from '../../components/Moleculars/serviceAdvisor/sideNav'
import AdminTopBar from '../../components/Atoms/admin/AdminTopBar'



export default function DetailsForm() {
    return (
        <div className=" bg-Background-0">
            <div className="flex flex-row">
                <div className="">
                    <SideNav />
                </div>
                <div className="w-full flex flex-col">
                    {/* <TopContainer heading1="Dashboard" heading2="Service Advisor" addnewbtntext="Add New"/> */}
                    <AdminTopBar name="XXXXXXXXX" roleName="Service Advisor" />
                    <div className="container mx-auto max-w-full">
                        <div className="grid-cols-4 ">
                            <div className="bg-red-400 w-full h-20">
                                dd
                                dddds
                            </div>
                            <div className="bg-red-600 w-full h-64">
                                    ddf
                            </div>
                            <div className="bg-red-800 w-full h-18">
                                    dgg
                            </div>
                            <div className="bg-red-900 w-full h-96">
                                    lllll
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
