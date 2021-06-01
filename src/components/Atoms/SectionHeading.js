import React from 'react'
import LightSpeed from 'react-reveal/LightSpeed';
export default function SectionHeading(props) {
    return (
        <div>
            <LightSpeed left><h1 className="font-primary text-center md:text-3xl text-2xl text-current font-semibold"> {props.heading1} <span className="font-secondary text-3xl text-transparent bg-clip-text bg-gradient-to-br from-Secondary-0 to-primary-0">{props.span}</span>{props.heading2}</h1> </LightSpeed> 
                <p className="font-primary text-center md:text-xl text-md text-current font-light mt-5">{props.caption1}<br/>{props.caption2}</p>

        </div>
    )
}
