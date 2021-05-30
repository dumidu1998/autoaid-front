import React from 'react'

export default function ButtonHover(props) {
    return (
        <div>
            <button type="button" className="w-32 h-10 rounded-md font-primary bg-gradient-to-br bg-primary-0 hover:from-primary-0 hover:to-Secondary-0">
                {props.txt}
            </button>
        </div>
    )
}
