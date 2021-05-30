import React from 'react'

export default function ButtonHover(props) {
    return (
        <div>
            <button type="button" className="w-32 h-10 rounded-md font-primary bg-gradient-to-br bg-primary-0 hover:from-pink-500 hover:to-yellow-500">
                {props.txt}
            </button>
        </div>
    )
}
