import React from 'react'

export default function RightContainerService(props) {
    return (
        <div className="w-10/12 ml-14 flex justify-between font-primary text-lg">

                <h1>{props.serviceName}</h1>
                <h1>{props.charges}</h1>
        </div>
    )
}
