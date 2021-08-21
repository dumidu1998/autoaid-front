import React from 'react'

export default function SelectedSevicesSVAD(props) {
    return (
        <div>
            <div className="bg-black font-primary font-medium text-2xl">
                {props.heading1}
            </div>
            <div className="bg-gray-600 font-secondary text-center ">
                {props.description}
            </div>
        </div>
    )
}
