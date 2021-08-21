import React from 'react'

export default function SelectedServiceActivitiesSVAD(props) {
    return (
        <div className="flex flex-col">
            <div className="flex  justify-between items-center ">
                <div className="font-primary text-black font-medium ">
                    {props.activity}
                </div>
                <div className="font-primary text-black font-medium ">
                    Rs. {props.price}
                </div>
            </div>
            <div className="bg-gray-500 flex justify-start mt-2 ">  
                {props.time} min
            </div>
            <div className="border-b-2 mb-4"></div>
        </div>
    )
}
