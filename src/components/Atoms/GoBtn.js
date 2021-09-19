import React from 'react'

export default function GoBtn(props) {
    return (
        <div>
            <button className="w-40 rounded-lg bg-blue-500 font-primary text-white px-10 py-2">{props.btnName}</button>
        </div>
    )
}
