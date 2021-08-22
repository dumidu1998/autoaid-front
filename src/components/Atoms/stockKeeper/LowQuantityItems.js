import React from 'react'

export default function LowQuantityItems(props) {
    return (
        <div className="flex items-center justify-between w-full mt-8">
            <p className="font-primary text-sm text-left">{props.ItemNo}</p>
            <p className="font-primary text-sm">{props.ItemName}</p>
            <p className="font-primary text-sm text-right">{props.CurrentStatus}</p>
        </div>
    )
}
