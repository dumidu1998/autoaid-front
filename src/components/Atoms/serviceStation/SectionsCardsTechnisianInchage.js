import React from 'react'

export default function SectionsCardsTechnisianInchage(props) {
    return (
        <div className="flex flex-col font-primary">
            <div>Technician Incharge</div>
            <div className="font-primary font-medium">{props.technician}</div>

        </div>
    )
}
