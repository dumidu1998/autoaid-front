import React from 'react'
import SectionSelectionTop from '../../components/Atoms/serviceStation/SectionSelectionTop'
import TopContainerVNo from '../../components/Atoms/technician/TopContainerVNo'
import SideNav from '../../components/Moleculars/serviceAdvisor/sideNav'


export default function SectionSelection() {
    return (
        <div>
           

            <div className="flex">
                <SideNav />
                <SectionSelectionTop heading1="CAM 9044"/>
            </div>
            

        </div>
    )
}
