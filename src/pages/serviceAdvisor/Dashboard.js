import React from 'react'
import AppointmentContainer from '../../components/Atoms/serviceStation/AppointmentContainer'
import Register from '../../components/Atoms/serviceStation/Register'
import SubSectionHeading from '../../components/Atoms/serviceStation/SubSectionHeading'
import TopContainer from '../../components/Atoms/serviceStation/TopContainer'
import SideNav from '../../components/Moleculars/serviceAdvisor/sideNav'

export default function Dashboard() {
    return (
        <div className=" bg-Background-0">
            <div className="flex flex-row">
                <div className="">
                    
                    <SideNav />
                </div>
                <div className="w-full flex flex-col">
                    
                <TopContainer/>
                    <div className="h-full flex items-center justify-center">
                        <div className="h-full w-10/12 py-24">
                            <SubSectionHeading heading="Next Appointment"/>
                            <AppointmentContainer/>
                        </div>

                    </div>
                </div>  
                <Register/>  

            </div>
        </div>
    )
}
