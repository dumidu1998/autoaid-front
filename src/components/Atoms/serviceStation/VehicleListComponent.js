import React from 'react'
import ButtonSecond from './ButtonSecond'
import Button from '../Button'

export default function VehicleListComponent(props) {
    return (
        <div className=" grid grid-cols-1 place-items-center mb-2">
            <div className=" w-9/12 h-14 shadow-lg bg-white mt-5 rounded-lg grid grid-cols-1 place-items-center">
                <div className="grid grid-cols-2 place-items-center w-full">
                    <h1 className="font-bold font-primary text-gray-400">{props.vehicle.vehicleNumber}</h1>
                    <div className="flex justify-around items-center w-60">
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
        </div>
    )
}
