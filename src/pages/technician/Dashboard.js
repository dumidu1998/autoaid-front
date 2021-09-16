import React from 'react'
import SideNavBar from '../../components/Moleculars/technician/SideNavBar'
import TopContainer from '../../components/Atoms/serviceStation/TopContainer'
import AppointmentContainer from '../../components/Atoms/serviceStation/AppointmentContainer'
import SubSectionHeading from '../../components/Atoms/serviceStation/SubSectionHeading'

export default function Dashboard() {
    return (
        <div className="relative bg-Background-0 w-full h-screen">
            <div className="flex flex-row">
                <div>
                    <SideNavBar />
                </div>
                <div className="w-full flex flex-col xl:ml-40">
                    <TopContainer heading1="Dashboard" heading2="Technician" addnewbtntext="Add New" />
                    <div className="flex flex-col items-center justify-center mx-16 lg:flex-row">
                        <div className="w-11/12 mt-20">
                            <SubSectionHeading heading="Upcomming Appointment" />

                            <AppointmentContainer vehicleNo="CAM - 4216" link={"summary"} />
                            <AppointmentContainer vehicleNo="KT - 0246" link={"viewService/" + "2"} />
                            <AppointmentContainer vehicleNo="CAA - 2216" link={"viewService/" + "3"} />
                            <AppointmentContainer vehicleNo="CAP - 1246" link={"viewService/" + "4"} />
                        </div>
                        <div className="w-11/12 mt-24 lg:-mt-16 lg:ml-16">
                            <SubSectionHeading heading="Ongoing Appointment" />

                            <AppointmentContainer vehicleNo="CAM - 4216" link={"progress"} />
                            <AppointmentContainer vehicleNo="CAP - 1246" link={"viewService/" + "4"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
