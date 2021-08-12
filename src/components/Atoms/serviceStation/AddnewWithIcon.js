import React from 'react'

export default function AddnewWithIcon(props) {
    return (
        <div>
            <div className="w-40 h-14 rounded-lg shadow-lg cursor-pointer bg-gradient-to-br from-primary-0 to-Secondary-0 m-5 flex items-center justify-center">

                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>

                <h1 className="text-white font-bold text-xl">{props.txt}</h1>
            </div>
        </div>
    )
}
