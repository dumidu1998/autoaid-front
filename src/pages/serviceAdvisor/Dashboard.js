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
    const [upcomingAppointments, setupcomingAppointments] = useState([{ "vehicleNumber": "" }]);
    const [ongoingError, setongoingError] = useState('');
    const [upcomingError, setupcomingError] = useState('');

    const userId = getCookie('userId');

    var config = {
        headers: {
            'Authorization': 'Bearer ' + getCookie('token'),
        }
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/advisor/repairs/ongoing/${userId}`, config)
            .then(function (response) {
                console.log(response.data);
                setongoingRepairs(response.data);
            })
            .catch(function (error) {
                console.log(error.response.data);
                setongoingError(error.response.data);
            })
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/advisor/appointments/today/${userId}`, config)
            .then(function (response) {
                console.log(response.data);
                setupcomingAppointments(response.data);
            })
            .catch(function (error) {
                console.log(error.response.data);
                setupcomingError(error.response.data);
            })
    }, [])

    return (
        <div className=" bg-Background-0 h-screen">
            <div className="flex flex-row">
                <div className="">
                    <SideNav />
                </div>
                <div className="w-full flex flex-col xl:ml-40">
                    <TopContainer heading1="Dashboard" heading2="Service Advisor" addnewbtntext="Add New" path="/serviceadvisor/detailsform" />
                    <div className="flex justify-between">
                        <div className="w-full flex flex-col items-center justify-center">
                            <div className={upcomingError == '' ? "w-10/12 pt-24" : " hidden"}>
                                <SubSectionHeading heading="Next Appointment" />
                                <AppointmentContainer vehicleNo={upcomingAppointments[0].vehicleNumber}
                                    link={(upcomingAppointments[0].vin == null ? 
                                        {pathname: '/serviceadvisor/addvehicle',
                                        state: {
                                            contact: upcomingAppointments[0].contactNo,
                                            update: "update",
                                            vin: upcomingAppointments[0].vin,
                                            vehicleNumber: upcomingAppointments[0].vehicleNumber
                                        }}
                                        // console.log("vin"+upcomingAppointments[0].vin)
                                        
                                     : {
                                            pathname: '/serviceadvisor/section/selection',
                                            state: {
                                                vehicleNo: upcomingAppointments[0].vehicleNumber,
                                                vin: upcomingAppointments[0].vin,
                                                userId: userId
                                            }
                                        })} />
                            </div>
                            <div className="pt-16 w-10/12 h-96">
                                <SubSectionHeading heading="Upcoming Appointment" />
                                <div className={upcomingError == '' ? "hidden" : " ml-48 mt-20 font-bold text-red-600"}>{upcomingError}</div>

                                <div className={upcomingError == '' ? "bg-Background-0  h-full overflow-auto " : " hidden"}>
                                    {upcomingAppointments.map(appointment => <AppointmentContainer vehicleNo={appointment.vehicleNumber} link={(upcomingAppointments[0].vin == null ? 
                                        {pathname: '/serviceadvisor/addvehicle',
                                        state: {
                                            contact: upcomingAppointments[0].contactNo,
                                            update: "update",
                                            vin: upcomingAppointments[0].vin,
                                            vehicleNumber: upcomingAppointments[0].vehicleNumber
                                        }
                                    }: { pathname: '/serviceadvisor/section/selection',
                                            state: {
                                                vehicleNo: upcomingAppointments[0].vehicleNumber,
                                                vin: upcomingAppointments[0].vin,
                                                userId: userId
                                            }
                                        })} />)}
                                </div>
                            </div>
                        </div>
                        <div className=" w-10/12 pt-24 mr-14">
                            <SubSectionHeading heading="Ongoing Service Details" />
                            <div className="bg-white w-full h-5/6 rounded-xl shadow-xl  py-12">
                                <div className="px-12">
                                    <div className="flex items-center justify-between w-full mt-8">
                                        <p className="font-primary text-sm text-left">Vehicle Number</p>
                                        <p className="font-primary text-sm">Status</p>
                                    </div>
                                </div>
                                <div className="w-full h-64 overflow-auto">
                                    <div className={ongoingError == '' ? "hidden" : " ml-48 mt-20 font-bold text-red-600"}>{ongoingError}</div>
                                    {ongoingRepairs.map(repair => <div className="mt-4 border-b-2 pr-16 pl-12"><OngoingServiceDetails repair={repair} /></div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
