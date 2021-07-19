import React from 'react'
import RightContainerHeader from '../../Atoms/serviceStation/RightContainerHeader'
import RightContainerService from '../../Atoms/serviceStation/RightContainerService'

export default function RightContainer() {
    return (
        <div className="w-1/3 shadow-lg bg-white mt-3 rounded-lg">
            <div className="w-10/12">
                <div className="flex flex-col items-center">
                    <RightContainerHeader text="Selected Services" />
                    <p className="font-primary font-semibold text-gray-400 text-center">Time and Cost Can be Differ with the change of requirements</p>
                </div>
                <hr/>
                <RightContainerService serviceName="Car Wash" charges="Rs. 800" />
                <hr/>
            </div>
        </div>

    )
}
