import React from 'react'
import RoundContainer from '../Atoms/RoundContainer'
import SectionHeading from '../Atoms/SectionHeading'
import WeWorkGrid from '../Moleculars/WeWorkGrid'

export default function LandingSection3() {
    return (
        <div className="w-10/12 mx-auto items-center ">
            <div className="text-black mt-10">
                <SectionHeading heading1="How " span=" We Work" heading2=""/>

            </div>
           <WeWorkGrid/>
        </div>
    )
}
