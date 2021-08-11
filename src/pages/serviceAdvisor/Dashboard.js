import React from 'react'
import AppointmentContainer from '../../components/Atoms/serviceStation/AppointmentContainer'
import Register from '../../components/Atoms/serviceStation/Register'
import SubSectionHeading from '../../components/Atoms/serviceStation/SubSectionHeading'
import TopContainer from '../../components/Atoms/serviceStation/TopContainer'
import SideNav from '../../components/Moleculars/serviceAdvisor/sideNav'
import RightContainerHeader from '../../components/Atoms/serviceStation/RightContainerHeader'
import DetailsShowing from '../../components/Moleculars/customer/DetailsShowing'

export default function Dashboard() {
    return (
        <div className=" bg-Background-0">
            <div className="flex flex-row">
                <div className="">

                    <SideNav />
                </div>
                <div className="w-full flex flex-col">

                    <TopContainer heading1="Dashboard" heading2="Service Advisor" addnewbtntext="+ Add New" />
                    <div className="flex items-center justify-center">
                        <div className="h-full w-8/12 py-10 ml-10">
                            <div>
                                <SubSectionHeading heading="Next Appointment" />
                                <AppointmentContainer vehicleNo="TN-2863" />
                            </div>
                            <div>
                                <SubSectionHeading heading="Upcoming Appointments" />
                                <AppointmentContainer vehicleNo="TN-2863" />
                                <AppointmentContainer vehicleNo="TN-2863" />
                                <AppointmentContainer vehicleNo="TN-2863" />
                            </div>
                        </div>
                        <div className="h-full w-1/3 mt-2 mr-10 py-14">
                            <RightContainerHeader text="Ongoing Repair Details"/>
                            <div className="bg-white rounded-xl shadow-xl w-full h-64 overflow-auto mt-5">
                                <DetailsShowing data="TN-2863"/>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
