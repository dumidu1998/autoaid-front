import React from 'react'
import SideNavBar from '../../components/Moleculars/technician/SideNavBar'
import TopContainer from '../../components/Atoms/serviceStation/TopContainer'
import ItemContainer from '../../components/Atoms/stockKeeper/ItemContainer'
import SubSectionHeading from '../../components/Atoms/serviceStation/SubSectionHeading'

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
                            <SubSectionHeading heading="Stock Items" />
                            <div className="w-full h-4/6 overflow-auto">
                                <ItemContainer itemNo="Piston" link={""} />
                                <ItemContainer itemNo="Brake Pad" link={""} />
                                <ItemContainer itemNo="Cluch Pad" link={""} />
                                <ItemContainer itemNo="Oil Filter" link={""} />
                                <ItemContainer itemNo="Piston" link={""} />
                                <ItemContainer itemNo="Brake Pad" link={""} />
                                <ItemContainer itemNo="Cluch Pad" link={""} />
                                <ItemContainer itemNo="Oil Filter" link={""} />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
