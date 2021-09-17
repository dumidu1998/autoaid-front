import React, { useState, useEffect } from 'react'
import AppointmentContainer from '../../components/Atoms/serviceStation/AppointmentContainer'
import OngoingServiceDetails from '../../components/Atoms/serviceStation/OngoingServiceDetails'
import SubSectionHeading from '../../components/Atoms/serviceStation/SubSectionHeading'
import TopContainer from '../../components/Atoms/serviceStation/TopContainer'
import SideNav from '../../components/Moleculars/serviceAdvisor/sideNav'
import axios from 'axios'
import { getCookie } from '../../jsfunctions/cookies'


export default function Dashboard() {
    const [ongoingRepairs, setongoingRepairs] = useState([]);
    const userId=getCookie('userId');
    
    var config = {
        headers: {
            'Authorization': 'Bearer ' + getCookie('token'),
        }
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/advisor/repairs/ongoing/${userId}`, config)
            .then(function (response){
                // console.log(response.data);
                setongoingRepairs(response.data);
            })
    }, [])
    return (
        <div className=" bg-Background-0 h-screen">
            <div className="flex flex-row">
                <div className="">
                    <SideNav />
                </div>
                <div className="w-full flex flex-col xl:ml-40">
                    <TopContainer heading1="Dashboard" heading2="Service Advisor" addnewbtntext="Add New" path="/serviceadvisor/detailsform"/>
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
                                    {ongoingRepairs.map(repair=><div className="mt-4 border-b-2 pr-16 pl-12"><OngoingServiceDetails RegNum={repair.vehicleNumber} CurrentStatus={repair.status}/></div>)}                                                                          
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
