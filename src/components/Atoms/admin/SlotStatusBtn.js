import React from 'react'

export default function SlotStatusBtn(props) {
    return (
        <div>
            <button className="flex justify-center w-40 rounded-lg bg-white  shadow-xl  text-black px-10 py-2 font-primary font-bold">{props.btnName}</button>
        </div>
    )
}

