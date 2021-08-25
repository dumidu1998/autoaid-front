import React from 'react'
import ButtonSecond from './ButtonSecond'

export default function ItemContainer3(props) {
    return (
        <div>
            <div className=" w-full h-14 shadow-lg bg-white mt-5 rounded-lg flex items-center justify-center">
                <div className="flex flex-row w-10/12 items-center justify-between">
                    <div className=" w-1/5"><p className="font-bold font-primary text-gray-400 ">{props.itemNo}</p></div>
                    <div><p className="font-normal font-primary ">{props.quantity}</p></div>
                    <ButtonSecond link={props.link} />

                </div>
            </div>
            
        </div>
    )
}
