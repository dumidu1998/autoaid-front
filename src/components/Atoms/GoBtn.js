import React from 'react'

export default function GoBtn(props) {
    return (
        <div>
            <button className="rounded-lg bg-blue-500 font-primary text-white ">{props.btnName}</button>
        </div>
    )
}
