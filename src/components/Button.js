import React from 'react'

export default function Button(props) {
    return (
        <div>
            <div className="w-24 h-10 bg-primary-0 rounded-md flex items-center justify-center">
                <h1 className=" font-primary">{props.txt}</h1>
            </div>
        </div>
    )
}
