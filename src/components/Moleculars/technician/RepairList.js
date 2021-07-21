import React from 'react'

export default function RepairList(props) {
    return (
        <div>
            <div className="bg-white p-3 shadow-xl rounded-lg w-96 mb-5">
                <div className="flex justify-between w-10/12 items-center">
                    <div>
                        <h1 className="font-primary font-semibold text-lg mt-2 ml-7">{props.title}</h1>
                        <span className="font-primary font-medium text-base text-gray-500 ml-7">
                            {props.time}
                        </span>

                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primary-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
