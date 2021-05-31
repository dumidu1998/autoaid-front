import React from 'react'
import RoundContainer from '../Atoms/RoundContainer'

export default function WeWorkGrid() {
    return (
        <div>
            <div className=" lg:relative md:flex mx-auto items-center  md:h-96 justify-between p-4">

                <div className=" lg:absolute md:bottom-0 md:left-0 mt-5">
                    <RoundContainer heading="Diagnose by Service Adviser" paragraph="Our service advisor will check you vehicle and assign to technisians" />
                </div>
                <div className=" lg:absolute md:top-0 md:left-1/4 mt-5">
                    <RoundContainer heading="step 2" paragraph="Our service advisor will check you vehicle and assign to technisians" />

                </div>
                <div className=" lg:absolute right-1/4 bottom-0 mt-5 ">
                    <RoundContainer heading="step 3" paragraph="Our service advisor will check you vehicle and assign to technisians" />

                </div>
                <div className=" lg:absolute right-0 top-0 mt-5">
                    <RoundContainer heading="step 4" paragraph="Our service advisor will check you vehicle and assign to technisians" />

                </div>
            </div>


        </div>
    )
}
