import React from 'react'

export default function HeadingPRimary(props) {
    return (
        <div>
            <h1 className=" font-secondary text-xl">{props.heading}<span className="font-secondary text-xl text-transparent bg-clip-text bg-gradient-to-br from-Secondary-0 to-primary-0">{props.heading2}</span></h1>
        </div>
    )
}
