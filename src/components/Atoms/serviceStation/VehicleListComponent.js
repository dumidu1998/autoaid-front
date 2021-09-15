import React from 'react'
import ButtonSecond from './ButtonSecond'
import Button from '../Button'

export default function VehicleListComponent(props) {
    return (
        <div className=" grid grid-cols-1 place-items-center mt-8 mb-4">
            <div className=" w-9/12 h-14 shadow-lg bg-white mt-5 rounded-lg grid grid-cols-1 place-items-center">
                <div className="grid grid-cols-3 place-items-center w-full">
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
