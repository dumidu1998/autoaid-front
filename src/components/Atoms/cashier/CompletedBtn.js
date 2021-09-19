import React from 'react'

export default function CompletedBtn(props) {
    return (
        <div>
            <button className="rounded-lg w-28 h-12 shadow-xl bg-blue-600 text-white font-bold ">{props.name}</button>
        </div>
    )
}
