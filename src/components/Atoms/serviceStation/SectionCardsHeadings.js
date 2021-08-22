import React from 'react'

export default function SectionCardsHeadings(props) {
    return (
        <div className="flex justify-between items-center font-primary px-8 mt-6">
            <div>{props.heading}</div>
            <div className={props.class}>{props.count}</div>
        </div>
    )
}
