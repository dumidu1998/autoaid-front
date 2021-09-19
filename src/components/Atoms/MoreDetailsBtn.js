import React from 'react'

export default function MoreDetailsBtn(props) {
    return (
        <div>
            <button className="w-full bg-blue-500 text-white font-primary shadow-xl rounded-lg h-12">{props.name}</button>
        </div>
    )
}
