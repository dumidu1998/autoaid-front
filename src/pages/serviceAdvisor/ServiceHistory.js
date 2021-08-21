
import React from 'react'
import TopContainerVNo from '../../components/Atoms/technician/TopContainerVNo' 
import SelectionSectionNavbarMolecular from '../../components/Moleculars/serviceAdvisor/SelectionSectionNavbarMolecular'
import SideNav from '../../components/Moleculars/serviceAdvisor/sideNav'

export default function ServiceHistory() {
    return (
        <div className=" bg-Background-0">
        <div className="flex flex-row">
            <div className="">
                <SideNav />
            </div>
            <div className="w-full flex flex-col">
                <TopContainerVNo heading1="KT-0246" link="/serviceadvisor"/>
                <div className="flex justify-between w-full">
                    <div className="w-3/6 bg-white shadow-xl rounded-lg mt-12 ml-6 p-8">
                        <div className="font-primary text-xl">Service History</div>
                        <div className="  p-1 rounded-lg mt-4 w-full">
                            <SelectionSectionNavbarMolecular/>
                        </div>
                        <div>
                           nnn
                        </div>
                    </div>
                    <div className="w-2/6 bg-white shadow-xl rounded-lg mt-12  mr-32 p-8">
                        heding
                        <div className="mt-6 mb-4">
                           jj
                        </div>
                        <div className="mt-6">
                           kk
                        </div>
                        <div className="mt-6">
                            k   
                        </div>
                    </div>
                </div>
            </div>
        </div>  
</div>  
    )
}
