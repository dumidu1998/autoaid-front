import React from 'react'
import ButtonSecond from './ButtonSecond'

export default function AppointmentContainer(props) {
    return (
        <div>
            <div className=" w-2/3 h-14 shadow-lg bg-white mt-5 rounded-lg flex items-center justify-center
            ">
                <div className="flex flex-row w-10/12 items-center justify-between">
                    <h1 className="font-bold font-primary text-gray-400">{props.vehicleNo}</h1>
                    <ButtonSecond link={props.link} />

                </div>
            </div>
        </div>
    )
}
