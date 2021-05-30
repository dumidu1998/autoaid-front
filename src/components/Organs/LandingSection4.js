import React from 'react'
import SectionHeading from '../Atoms/SectionHeading'
import TestominialContainer from '../Atoms/TestominialContainer'


export default function LandingSection4() {
    return (
        <div> 
            <div className="w-full pt-20 pb-20 bg-third-0 flex flex-col items-center justify-center mt-10" >
            <div className="text-white">
                <SectionHeading heading1="Customer " span="Testamonials" />

            </div>
                <TestominialContainer heading="Hasantha Lakshan" paragraph="This is the best Service station i ever been to"/>
            </div>
        </div>
    )
}
