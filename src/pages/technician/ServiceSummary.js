import React, { useState, useEffect } from 'react'
import Addnew from '../../components/Atoms/serviceStation/Addnew'
import TopContainerVNo from '../../components/Atoms/technician/TopContainerVNo'
import SummaryMainContainer from '../../components/Organs/technician/SummaryMainContainer'
import SummaryRightContainer from '../../components/Organs/technician/SummaryRightContainer'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios'
import { getCookie } from '../../jsfunctions/cookies'

export default function ServiceSummary() {
    const [repair, setrepair] = useState('');
    const [section, setsection] = useState('');
    const location = useLocation();
    var config = {
        headers: {
            'Authorization': 'Bearer ' + getCookie('token'),
        }
    }

    useEffect(() => {
        setrepair(location.state.repair);
        setsection(location.state.section);
    }, [])
    function startRepair() {
        console.log(repair.repairId + " and " + section);
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/technician/repair/acceptance`, {
            "repairId": repair.repairId,
            "sectionName": section
        }, config)
            .then(function (response) {
                console.log(response.data);
            })
    }

    console.log(repair);
    console.log(section);

    return (
        <div className="relative bg-Background-0 h-screen overflow-auto">
            <div className="flex flex-col items-center">
                <TopContainerVNo heading1={repair.vehicleNumber} link="/technician/dashboard" />
                <div className="flex flex-col w-11/12 justify-center lg:flex-row">
                    <div>
                        <SummaryMainContainer repair={repair} sectionName={section} />
                    </div>
                    <div className="flex flex-col items-center ">
                        <SummaryRightContainer />
                        <button onClick={startRepair}><Addnew txt={"Start"} path={{
                            pathname: "progress",
                            state: {
                                repair: repair,
                                sectionName: section
                            }
                        }} /></button>

                    </div>
                </div>
            </div>
        </div>
    )
}