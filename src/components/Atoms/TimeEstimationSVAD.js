import React from 'react'

export default function TimeEstimationSVAD(props) {
    return (
        <div className="flex justify-between items-center font-bold font-primary ">
            <div>
                Time Estimation 
            </div>
            <div>
                {props.time} min
            </div>
        </div>
    )
}
