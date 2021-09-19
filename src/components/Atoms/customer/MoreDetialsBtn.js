import React from 'react'

export default function MoreDetialsBtn(props) {
    return (
        <div>
            <button className="bg-blue-600 font-primary text-white font-bold rounded-lg shadow-xl px-6 py-3 ">{props.name}</button>
        </div>
    )
}
