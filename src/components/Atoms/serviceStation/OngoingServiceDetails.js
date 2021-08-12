import React from 'react'

export default function OngoingServiceDetails(props) {
    return (
        <div className="flex items-center justify-between w-full mt-8">
            <p className="font-primary text-sm text-left">{props.RegNum}</p>
            <p className="font-primary text-sm">{props.CurrentStatus}</p>
        </div>
    )
}
