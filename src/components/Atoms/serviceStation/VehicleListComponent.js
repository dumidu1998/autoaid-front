import React from 'react'
import ButtonSecond from './ButtonSecond'
import Button from '../Button'

export default function VehicleListComponent(props) {
    return (
        <div>
            <div className=" w-full h-14 shadow-lg bg-white mt-5 rounded-lg flex items-center justify-center">
                <div className="flex flex-row w-10/12 items-center justify-evenly">
                    <h1 className="font-bold font-primary text-gray-400">{props.vehicleNo}</h1>
                    <Button link={props.link}  txt="Update" />
                    <ButtonSecond link="/serviceadvisor/section/selection" />
                    
                </div>
            </div>
        </div>
    )
}
