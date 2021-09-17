import React from 'react'
import AdminTopBar from '../../components/Atoms/admin/AdminTopBar'
import SearchVihicleRowOne from '../../components/Atoms/SearchVihicleRowOne'
import SearchVihicleRowThree from '../../components/Atoms/SearchVihicleRowThree'
import SearchVihicleRowTwo from '../../components/Atoms/SearchVihicleRowTwo'
import SearchBarVehicle from '../../components/Atoms/serviceStation/SearchBarVehicle'
import StartPath from '../../components/Atoms/StartPath'
import SideNav from '../../components/Moleculars/serviceAdvisor/sideNav'
export default function SearchVehicle() {
    return (
            <div className=" bg-Background-0  h-full ">
            <div className="flex flex-row">
                <div className="">
                    <SideNav />
                </div>
                <div className="w-full flex flex-col xl:ml-40">
                    <AdminTopBar name="XXXXXXXX" roleName="Service Advisor" />
                    <div className="container mx-auto max-w-full overflow-hidden">
                        <div className="mt-20 mb-12">
                            <SearchBarVehicle/>
                        </div>
                        <div className="mb-8 w-10/12 lg:w-11/12 grid grid-cols-1  ml-14">
                            <StartPath/>
                        </div>
                        <div className="w-10/12 lg:w-11/12 mb-12 grid grid-cols-1  ml-14 ">
                            <div>
                                <SearchVihicleRowOne/>
                            </div>
                            <div className="mt-12">
                                <SearchVihicleRowTwo/>
                            </div>
                            <div className="mt-12">
                                <SearchVihicleRowThree/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}
