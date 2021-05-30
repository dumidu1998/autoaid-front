import React from 'react'
import RoundContainer from '../Atoms/RoundContainer'

export default function WeWorkGrid() {
    return (
        <div>
            <div className=" md:relative md:flex mx-auto items-center  w-10/12 md:h-96 justify-between p-4">

                <div className=" md:absolute md:bottom-0 md:left-0 mt-5">
                    <RoundContainer heading="Diagnose by Service Adviser" paragraph="Our service advisor will check you vehicle and assign to technisians" />
                </div>
                <div className=" md:absolute md:top-0 md:left-1/4 mt-5">
                    <RoundContainer heading="step 2" paragraph="Our service advisor will check you vehicle and assign to technisians" />

                </div>
                <div className=" md:absolute right-1/4 bottom-0 mt-5 ">
                    <RoundContainer heading="step 3" paragraph="Our service advisor will check you vehicle and assign to technisians" />

                </div>
                <div className=" md:absolute right-0 top-0 mt-5">
                    <RoundContainer heading="step 4" paragraph="Our service advisor will check you vehicle and assign to technisians" />

                </div>
            </div>


        </div>
    )
}
