import React from 'react'
import AppointmentContainer from '../../components/Atoms/serviceStation/AppointmentContainer'
import OngoingServiceDetails from '../../components/Atoms/serviceStation/OngoingServiceDetails'
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
                    <TopContainer heading1="Dashboard" heading2="Service Advisor" addnewbtntext="Add New"/>
                    <div className="flex justify-between">
                        <div className="w-full flex flex-col items-center justify-center">
                            <div className=" w-10/12 pt-24">
                                <SubSectionHeading heading="Next Appointment" />
                                <AppointmentContainer vehicleNo="CAM - 9044" link="" />
                            </div>
                            <div className="pt-16 w-10/12 h-96">
                                <SubSectionHeading heading="Upcoming Appointment" />
                                <div className="bg-Background-0  h-full overflow-auto ">
                                    <AppointmentContainer vehicleNo="CAM - 9044" link=""/>
                                    <AppointmentContainer vehicleNo="CAM - 9044" link=""/>
                                    <AppointmentContainer vehicleNo="CAM - 9044" link=""/>
                                    <AppointmentContainer vehicleNo="CAM - 9044" link=""/>
                                    <AppointmentContainer vehicleNo="CAM - 9044" link=""/>
                                    <AppointmentContainer vehicleNo="CAM - 9044" link=""/>
                                    <AppointmentContainer vehicleNo="CAM - 9044" link=""/>
                                    <AppointmentContainer vehicleNo="CAM - 9044" link=""/>
                                    <AppointmentContainer vehicleNo="CAM - 9044" link=""/>
                                    <AppointmentContainer vehicleNo="CAM - 9044" link=""/>
                                    <AppointmentContainer vehicleNo="CAM - 9044" link=""/>
                                    <AppointmentContainer vehicleNo="CAM - 9044" link=""/>
                                </div>
                            </div>
                        </div>
                        <div className=" w-10/12 pt-24 mr-14">
                            <SubSectionHeading heading="Ongoing Service Details" />  
                            <div className="bg-white w-full h-5/6 rounded-xl shadow-xl  py-12">
                                <div className="px-12">
                                    <OngoingServiceDetails RegNum="Reg. No" CurrentStatus="Current Status"/>
                                </div>
                                <div className="w-full h-64 overflow-auto">
                                   <div className="mt-4 border-b-2 pr-16 pl-12"><OngoingServiceDetails RegNum="CAM - 4090" CurrentStatus="Completed"/></div>
                                   <div className="mt-4 border-b-2 pr-16 pl-12"><OngoingServiceDetails RegNum="CAM - 4090" CurrentStatus="On service"/></div>
                                   {/* <div className="mt-4 border-b-2 pr-9 pl-12"><OngoingServiceDetails RegNum="CAM - 4090" CurrentStatus="Completed"/></div>
                                   <div className="mt-4 border-b-2 pr-9 pl-12"><OngoingServiceDetails RegNum="CAM - 4090" CurrentStatus="On service"/></div>
                                   <div className="mt-4 border-b-2 pr-9 pl-12"><OngoingServiceDetails RegNum="CAM - 4090" CurrentStatus="Completed"/></div>
                                   <div className="mt-4 border-b-2 pr-9 pl-12"><OngoingServiceDetails RegNum="CAM - 4090" CurrentStatus="On service"/></div> */}
                              
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
