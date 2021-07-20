import React from 'react'

export default function RepairList(props) {
    return (
        <div>
            <div className="bg-white p-3 shadow-xl rounded-lg w-96 mb-5">
                <div className="font-primary font-semibold text-lg mt-2 ml-7">
                    {props.title}
                </div>
                <span className="font-primary font-medium text-base text-gray-500 ml-7">
                    {props.time}
                </span>
            </div>
        </div>
    )
}
