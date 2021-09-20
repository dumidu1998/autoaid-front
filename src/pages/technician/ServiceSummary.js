import React, { useState, useEffect } from 'react'
import Addnew from '../../components/Atoms/serviceStation/Addnew'
import TopContainerVNo from '../../components/Atoms/technician/TopContainerVNo'
import SummaryMainContainer from '../../components/Organs/technician/SummaryMainContainer'
import SummaryRightContainer from '../../components/Organs/technician/SummaryRightContainer'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

export default function ServiceSummary() {
    const [repair, setrepair] = useState('');
    const [section, setsection] = useState('');
    const location=useLocation();
    
    useEffect(() => {
        setrepair(location.state.repair);
        setsection(location.state.section);
    }, [])

    console.log(repair);
    console.log(section);
    
    return (
        <div className="relative bg-Background-0 h-screen overflow-auto">
            <div className="flex flex-col items-center">
                <TopContainerVNo heading1={repair.vehicleNumber} link="/technician/dashboard"/>
                <div className="flex flex-col w-11/12 justify-center lg:flex-row">
                    <div>
                        <SummaryMainContainer repair={repair} sectionName={section}/>
                    </div>
                    <div className="flex flex-col items-center ">
                        <SummaryRightContainer />
                        <Addnew txt={"Start"} />

                    </div>
                </div>
            </div>
        </div>
    )
}