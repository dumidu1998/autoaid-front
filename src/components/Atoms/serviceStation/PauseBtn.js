import React from 'react'

export default function PauseBtn(props) {
    return (
        <div>
            <div className="w-72 h-20 rounded-lg shadow-lg bg-white m-5 flex items-center justify-center ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-14 mr-10 text-primary-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h1 className="text-primary-0 font-bold text-2xl">{props.txt}</h1>
            </div>
        </div>
    )
}
