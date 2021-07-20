import React from 'react'
import TopContainerVNo from '../../components/Atoms/technician/TopContainerVNo'
import SummaryMainContainer from '../../components/Organs/technician/SummaryMainContainer'
import SummaryRightContainer from '../../components/Organs/technician/SummaryRightContainer'

export default function ServiceSummary() {
    return (
        <div className="relative bg-Background-0">
            <div className="flex flex-col items-center">
                <TopContainerVNo heading1="KT-0246" />
                <div className="flex w-10/12 justify-between">

                    <SummaryMainContainer />
                    <SummaryRightContainer />
                </div>
            </div>
        </div>
    )
}
