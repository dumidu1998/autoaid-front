import React from 'react'
import SectionSelectionTop from '../../components/Atoms/serviceStation/SectionSelectionTop'
import SelectionSectionNavbar from '../../components/Atoms/serviceStation/SelectionSectionNavbar'
import TopContainerVNo from '../../components/Atoms/technician/TopContainerVNo'
import SelectionSectionNavbarMolecular from '../../components/Moleculars/serviceAdvisor/SelectionSectionNavbarMolecular'
import SideNav from '../../components/Moleculars/serviceAdvisor/sideNav'


export default function SectionSelection() {
    return (
        <div>
           

            <div className="flex absolute">
                <SideNav />
                <SectionSelectionTop heading1="CAM 9044"/>
                <div className="relative mt-32  mr-64">
                  
                    <SelectionSectionNavbarMolecular/>
                </div>
            </div>
            
          
            

        </div>
    )
}
