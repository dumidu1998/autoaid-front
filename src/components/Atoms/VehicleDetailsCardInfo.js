import React from 'react'

export default function VehicleDetailsCardInfo(props) {
    return (
        <div className="flex flex-col font-primary mt-4">
            <div>{props.heading}</div>
            <div className={props.color}>********{props.info}</div>
        </div>
    )
}
