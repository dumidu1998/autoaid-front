import React from 'react'
import SideNavBar from '../../components/Moleculars/technician/SideNavBar'
import TopContainer from '../../components/Atoms/serviceStation/TopContainer'
import ItemContainer3 from '../../components/Atoms/stockKeeper/ItemContainer3'
import SubSectionHeading from '../../components/Atoms/serviceStation/SubSectionHeading'
import SectionSelectNavBarMol from '../../components/Moleculars/stockKeeper/SectionSelectNavBarMol'

export default function StockQuantity() {
    return (
        <div className="relative bg-Background-0">
            <div className="flex flex-row">
                <div>
                    <SideNavBar />
                </div>
                <div className="w-full flex flex-col">
                    <TopContainer heading1="Stock" heading2="Stock Keeper" addnewbtntext="Add New" />
                    <div className="h-full flex items-center justify-center mx-8 ">
                        <div className="h-full w-10/12 py-8">
                            <div className="font-primary text-xl">Select Section</div>
                            <div className="  p-1 rounded-lg mt-4 w-full">
                            <SectionSelectNavBarMol/>
                            </div>
                            <div className="font-primary text-xl">Stock Items</div>
                            <div className="w-full h-4/6 overflow-auto">
                                <div className="mt-4 border-b-2 pr-9 pl-12"><ItemContainer3 itemNo="Piston" quantity="123" link={""} /></div>
                                <div className="mt-4 border-b-2 pr-9 pl-12"><ItemContainer3 itemNo="Brake Pad" quantity="123" link={""} /></div>
                                <div className="mt-4 border-b-2 pr-9 pl-12"><ItemContainer3 itemNo="Piston" quantity="123" link={""} /></div>
                                <div className="mt-4 border-b-2 pr-9 pl-12"><ItemContainer3 itemNo="Cluch Pad" quantity="123" link={""} /></div>
                                <div className="mt-4 border-b-2 pr-9 pl-12"><ItemContainer3 itemNo="Piston" quantity="123" link={""} /></div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
