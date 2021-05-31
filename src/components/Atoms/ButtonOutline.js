import React from 'react'

export default function ButtonOutline(props) {
    return (
        <div>
            <div className="w-32 h-10 border-2 border-primary-0 rounded-md flex items-center justify-center cursor-pointer">
                <h1 className=" font-primary">{props.txt}</h1>
            </div>
        </div>
    )
}
