import React from 'react'
import Addnew from '../../components/Atoms/serviceStation/Addnew'
import AddnewWithIcon from '../../components/Atoms/serviceStation/AddnewWithIcon'
import BlueBgBtn from '../../components/Atoms/serviceStation/BlueBgBtn'
import PauseBtn from '../../components/Atoms/serviceStation/PauseBtn'
import TopContainerVNo from '../../components/Atoms/technician/TopContainerVNo'
import ProgressMainContainer from '../../components/Organs/technician/ProgressMainContainer'
import SummaryMainContainer from '../../components/Organs/technician/SummaryMainContainer'
import SummaryRightContainer from '../../components/Organs/technician/SummaryRightContainer'

export default function ServiceProgress() {
    return (
        <div className="relative bg-Background-0 h-full lg:h-screen">
            <div className="flex flex-col items-center ">
                <TopContainerVNo heading1="KT-0246" />
                <div className="flex  flex-col lg:flex-row w-11/12 justify-center items-center">
                    <div>
                        <ProgressMainContainer />
                    </div>
                    <div className="flex flex-col items-center">
                        <SummaryRightContainer />
                        <PauseBtn txt={"Pause"} />
                        <div className="flex ">
                            <AddnewWithIcon txt={"Add New"} />
                            <BlueBgBtn txt={"Request Item"} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
