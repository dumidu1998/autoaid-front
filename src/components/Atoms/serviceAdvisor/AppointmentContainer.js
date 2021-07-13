import React from 'react'
import ButtonSecond from './ButtonSecond'

export default function AppointmentContainer() {
    return (
        <div>
            <div className=" w-1/3 h-14 shadow-lg bg-white mt-5 rounded-lg flex items-center justify-center
            ">
                <div className="flex flex-row w-9/12 items-center justify-between">
                    <h1 className="font-bold font-primary text-gray-400">CAM-9044</h1>
                    <ButtonSecond/>

                </div>
            </div>
        </div>
    )
}
