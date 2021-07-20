import React from 'react'
import SideNavBar from '../../components/Moleculars/technician/SideNavBar'
import TopContainer from '../../components/Atoms/serviceStation/TopContainer'
import AppointmentContainer from '../../components/Atoms/serviceStation/AppointmentContainer'
import SubSectionHeading from '../../components/Atoms/serviceStation/SubSectionHeading'

export default function Dashboard() {
    return (
        <div className="relative bg-Background-0">
            <div className="flex flex-row">
                <div>
                    <SideNavBar />
                </div>
                <div className="w-full flex flex-col">
                    <TopContainer heading1="Dashboard" heading2="Technician" addnewbtntext="Add New" />
                    <div className="h-full flex items-center justify-center">
                        <div className="h-full w-10/12 py-24">
                            <SubSectionHeading heading="Upcomming Appointment" />

                            <AppointmentContainer vehicleNo="CAM - 4216" link={"viewService/" + "1"} />
                            <AppointmentContainer vehicleNo="KT - 0246" link={"viewService/" + "2"} />
                            <AppointmentContainer vehicleNo="CAA - 2216" link={"viewService/" + "3"} />
                            <AppointmentContainer vehicleNo="CAP - 1246" link={"viewService/" + "4"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
