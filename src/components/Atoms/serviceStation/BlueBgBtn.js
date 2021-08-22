import React from 'react'

export default function BlueBgBtn(props) {
    return (
        <div>
            <div className="w-40 h-14 rounded-lg cursor-pointer shadow-lg bg-blue-600 m-5 flex items-center justify-center">
                <h1 className="text-white font-bold text-xl">{props.txt}</h1>
            </div>
        </div>
    )
}
