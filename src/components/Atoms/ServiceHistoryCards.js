import React from 'react'

export default function ServiceHistoryCards(props) {
    return (
        <div className=" bg-white rounded-xl shadow-2xl w-full flex justify-between items-center p-8 mt-3">
            <div className="font-primary font-medium ">
                {props.name}
            </div>
            <div className="font-primary text-gray-500 ">
                Rs. {props.price}.00
            </div>
        </div>
    )
}
