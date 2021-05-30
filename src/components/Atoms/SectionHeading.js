import React from 'react'

export default function SectionHeading(props) {
    return (
        <div>
            <h1 className="font-primary text-center md:text-3xl text-2xl text-current font-semibold"> {props.heading1}<span className="font-secondary text-3xl text-primary-0">{props.span}</span> {props.heading2}</h1>
                <p className="font-primary text-center md:text-xl text-md text-current font-light mt-5">{props.caption1}<br/>{props.caption2}</p>

        </div>
    )
}
