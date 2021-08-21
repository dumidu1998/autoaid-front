import React from 'react'

export default function CostEstimation(props) {
    return (
        <div>
            <div className="flex justify-between items-center font-bold font-primary ">
                <div>
                    Cost Estimation 
                </div>
                <div>
                    Rs. {props.cost}
                </div>
            </div>
        </div>
    )
}
