import React from 'react'

export default function ButtonSecondary(props) {
    return (
        <div>
            <button type="button" className="w-52 h-10 bg-forth-0 rounded-md flex items-center justify-center hover:shadow-lg">
                <h1 className=" font-primary">{props.txt}</h1>
            </button>
        </div>
    )
}
