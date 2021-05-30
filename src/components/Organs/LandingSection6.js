import React from 'react'
import ContactIcons from '../Atoms/ContactIcons'
import SectionHeading from '../Atoms/SectionHeading'

export default function LandingSection6() {
    return (
        <div className="bg-gray-200 mt-5 p-5">
            <div className="w-10/12 mx-auto  flex flex-col md:flex-row">
                <div className="md:w-1/2 h-96  flex flex-col items-center">
                    <SectionHeading heading1="Find " span="us" caption1="We are Gampaha Disrict based Repair and service Center"/>
                    <div className="mt-5">
                        <ContactIcons />

                    </div>
                </div>
                <div className="md:w-1/2 h-96 flex items-center bg-red-600">

                </div>
            </div>
        </div>
    )
}
