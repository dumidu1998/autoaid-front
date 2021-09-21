import React from 'react'
import AdminSideBar from '../../components/Moleculars/admin/AdminSideBar'
import Barchart from '../../components/Organs/admin/Barchart'
import ReportSwitch from '../../components/Organs/admin/ReportSwitch'
import ReportTopNavbar from '../../components/Organs/admin/ReportTopNavbar'
import SalesChart from '../../components/Organs/admin/SalesChart'
import TableViewOne from '../../components/Organs/admin/TableViewOne'
import TableViewTwoPrecentage from '../../components/Organs/admin/TableViewTwoPrecentage'

export default function AdminReports() {
    return (
        <div className="">
            <div className="md:ml-40 bg-Background-0"><AdminSideBar name="Reports" roleName="Admin"/></div>
            <div className=" w-full absolute bg-Background-0 ">
                <div className="md:ml-40 ">
                    {/* <div className="font-primary text-xl font-medium ml-6 mt-8 md:text-2xl lg:text-3xl xl:text-4xl">Sections</div> */}
                    <div className="px-3 md:px-8 -mt-24">
                        <div className="container mx-auto max-w-full">
                            <div className="mt-28 mb-3">
                                <ReportTopNavbar/>
                            </div>
                            <div className="mb-3 flex justify-center ">

                                <div className=" w-full rounded-lg mt-8">
                                    <div className="mt-2">
                                        <SalesChart/>
                                    </div>  
                                    <div className="mt-20">
                                        <Barchart/>
                                    </div> 
                                    <div className="mt-20">
                                        <TableViewOne/>
                                    </div> 
                                    <div className="mt-20">
                                        <TableViewTwoPrecentage/>
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
