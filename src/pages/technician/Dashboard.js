import React, { useEffect, useState } from 'react'
import SideNavBar from '../../components/Moleculars/technician/SideNavBar'
import TopContainer from '../../components/Atoms/serviceStation/TopContainer'
import AppointmentContainer from '../../components/Atoms/serviceStation/AppointmentContainer'
import SubSectionHeading from '../../components/Atoms/serviceStation/SubSectionHeading'
import { getCookie } from '../../jsfunctions/cookies'
import axios from 'axios'

export default function Dashboard() {
    const [sectionName, setsectionName] = useState();
    const [upComingRepairList, setupComingRepairList] = useState([])
    const userId = getCookie('userId');

    var config = {
        headers: {
            'Authorization': 'Bearer ' + getCookie('token'),
        }
    }

    useEffect(() => {
        //get section realted to tech
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/technician/getSection/${userId}`, config)
            .then(function (response) {
                // console.log(response.data);
                setsectionName(response.data);
            })
            .catch(function (error) {
                console.log(error.response.data);
            })
    }, [])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/technician/getUpcoming/${sectionName}`, config)
        .then(function (response) {
            console.log(response.data);
            setupComingRepairList(response.data);
        })
        .catch(function (error) {
            console.log(error.response.data);
        })
    }, [sectionName])

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
                            <SubSectionHeading heading="Upcomming Repairs" />
                            {upComingRepairList.map(repair=><AppointmentContainer vehicleNo={repair.vehicleNumber} link={{ pathname: "summary", state: {repair: repair,section:sectionName}}}  />)}
                            {/* <AppointmentContainer vehicleNo="CAM - 4216" link={"summary"} />
                            <AppointmentContainer vehicleNo="KT - 0246" link={"viewService/" + "2"} />
                            <AppointmentContainer vehicleNo="CAA - 2216" link={"viewService/" + "3"} />
                            <AppointmentContainer vehicleNo="CAP - 1246" link={"viewService/" + "4"} /> */}
                        </div>
                        <div className="w-11/12 mt-24 lg:ml-16">
                            <SubSectionHeading heading="Ongoing Appointment" />

                            <AppointmentContainer vehicleNo="CAM - 4216" link={"progress"} />
                            <AppointmentContainer vehicleNo="CAP - 1246" link={"progress"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
