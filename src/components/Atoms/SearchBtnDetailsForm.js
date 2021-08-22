import React from 'react'

export default function SearchBtnDetailsForm(props) {
    
    return (
        <div>
            <button onClick={props.functionName} className="font-primary text-white font-bold bg-blue-500 rounded-md w-24 h-8">
                {props.txt}
            </button>
        </div>
    )
}
