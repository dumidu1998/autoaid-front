import React from 'react'

export default function SideLink(props) {
    return (
        <div>
            <a href={props.link} className="font-primary text-primary-0 text-xs">{props.name}</a>
        </div>
    )
}
