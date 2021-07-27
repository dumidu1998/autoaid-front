import React from 'react'

export default function AlertText(props) {
    return (
        <div>
            <div className={"font-primary font-bold text-red-500 text-center "+ (props.visibility)}>
                <p>{props.text}</p>
                </div>
        </div>
    )
}
