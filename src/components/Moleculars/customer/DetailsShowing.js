import React from 'react'
import HeadingPRimary from '../../Atoms/customer/HeadingPRimary'

export default function DetailsShowing(props) {
    return (
        <div className="my-2 w-2/5">
            <h1 className="font-primary text-sm text-left">{props.dataHeading}</h1>
            <p className="font-primary font-bold text-sm">{props.data}</p>
        </div>
    )
}
