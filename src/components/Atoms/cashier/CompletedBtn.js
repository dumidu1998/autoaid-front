import React from 'react'

export default function CompletedBtn(props) {
    return (
        <div>
            <button className="rounded-lg w-20 text-sm px-1 sm:w-24 md:w-40 sm:text-md  h-12 shadow-xl bg-blue-600 text-white font-bold ">{props.name}</button>
        </div>
    )
}
