import React from 'react'
import ButtonSecond from './ButtonSecond'
import Button from '../Button'

export default function VehicleListComponent(props) {
    return (
        <div>
            <div className=" w-full h-14 shadow-lg bg-white mt-5 rounded-lg flex items-center justify-center">
                <div className="flex flex-row w-10/12 items-center justify-evenly">
                    <h1 className="font-bold font-primary text-gray-400">{props.vehicle.vehicleNumber}</h1>
                    <Button link={props.link}  txt="Update" />
                    <ButtonSecond link={{
                        pathname:'/serviceadvisor/section/selection',
                        state:{
                            vehicleNo:props.vehicle.vehicleNumber,
                            vin:props.vehicle.vin,
                            userId:props.userId
                            }
                        }} />
                    
                </div>
            </div>
        </div>
    )
}
