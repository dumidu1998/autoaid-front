import React from 'react'
import Addnew from '../../components/Atoms/serviceStation/Addnew'
import TopContainerVNo from '../../components/Atoms/technician/TopContainerVNo'
import SummaryMainContainer from '../../components/Organs/technician/SummaryMainContainer'
import SummaryRightContainer from '../../components/Organs/technician/SummaryRightContainer'

export default function ServiceSummary() {
    return (
        <div className="relative bg-Background-0 h-screen overflow-auto">
            <div className="flex flex-col items-center">
                <TopContainerVNo heading1="KT-0246" link="/technician/dashboard"/>
                <div className="flex flex-col w-11/12 justify-center lg:flex-row">
                    <div>
                        <SummaryMainContainer />
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