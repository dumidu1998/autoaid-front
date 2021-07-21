import React from 'react'

export default function PauseBtn(props) {
    return (
        <div>
            <div className="w-40 h-14 rounded-lg shadow-lg bg-white m-5 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h1 className="text-primary-0 font-bold text-xl">{props.txt}</h1>
            </div>
        </div>
    )
}
