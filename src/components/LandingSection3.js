import React from 'react'
import RoundContainer from './RoundContainer'
import SectionHeading from './SectionHeading'

export default function LandingSection3() {
    return (
        <div>
            <div className="text-black mt-10">
                <SectionHeading heading1="How " span=" We Work" heading2=""/>

            </div>
       
        <div className="flex w-10/12 mx-auto mt-10">
            <div className="flex w-1/2 relative">
                <RoundContainer/>
                <div className="absolute -bottom-36 -right-14">
                    <RoundContainer/>

                </div>
                
            </div>
            <div className="flex w-1/2 relative">
                <RoundContainer/>
                <div className="absolute -bottom-36 -right-14">
                    <RoundContainer/>

                </div>
                
            </div>
          

        </div>
        </div>
    )
}
