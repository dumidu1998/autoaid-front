import React from 'react'

export default function VehicleDetailsCardInfoText(props) {
    return (
        <div className="flex flex-col font-primary mt-4">
        <div>{props.heading}</div>
        <div className="font-bold">{props.info}</div>
    </div>
    )
}
