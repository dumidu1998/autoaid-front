import React from 'react'

export default function SelectedSevicesSVAD(props) {
    return (
        <div>
            <div className="text-black font-primary font-medium text-2xl flex flex-row justify-center">
                {props.heading1}
            </div>
            <div className="text-gray-500 font-primary  fo text-center mt-6 mb-6">
                {props.description}
            </div>
            <div className="border-b-2 "></div>
        </div>
    )
}
