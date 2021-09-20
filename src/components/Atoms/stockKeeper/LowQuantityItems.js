import React from 'react'

export default function LowQuantityItems(props) {

    let style= "font-primary text-right";
    style+=props.color;

    return (
        <div className="flex items-center justify-between w-full mt-8">
            <p className="font-primary text-left">{props.itemNo}</p>
            <p className="font-primary ">{props.itemName}</p>
            <p className={style}>{props.stock}</p>
        </div>
    )
}
