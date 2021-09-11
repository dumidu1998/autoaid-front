import React from 'react'
import AdminSideBar from '../../components/Moleculars/admin/AdminSideBar'
import ReportSwitch from '../../components/Organs/admin/ReportSwitch'
import ReportTopNavbar from '../../components/Organs/admin/ReportTopNavbar'
import SalesChart from '../../components/Organs/admin/SalesChart'

export default function AdminReports() {
    return (
        <div className="">
            <div className="md:ml-40 "><AdminSideBar name="Reports" roleName="Admin"/></div>
            <div className=" w-full absolute bg-Background-0 ">
                <div className="md:ml-40 ">
                    {/* <div className="font-primary text-xl font-medium ml-6 mt-8 md:text-2xl lg:text-3xl xl:text-4xl">Sections</div> */}
                    <div className="px-3 md:px-8 -mt-24">
                        <div className="container mx-auto max-w-full">
                            <div className="mt-28 mb-3">
                                <ReportTopNavbar/>
                            </div>
                            <div className="mb-3 flex justify-center ">
                                <div className="bg-white w-full rounded-lg ">
                                    <div>
                                        <ReportSwitch/>
                                    </div>
                                    <div>
                                    <div className="bg-light-green-500 px-3 md:px-8 h-40" />

<div className="px-3 md:px-8 -mt-24">
    <div className="container mx-auto max-w-full">
        <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
                <SalesChart/>
            </div>
            <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
                {/* <ChartBar /> */}
            </div>
        </div>
    </div>
</div>
                                    </div>
                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>                        
    )
}
