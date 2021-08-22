import React from 'react'
import SideNavBar from '../../components/Moleculars/technician/SideNavBar'
import TopContainer from '../../components/Atoms/serviceStation/TopContainer'
import ItemContainer from '../../components/Atoms/stockKeeper/ItemContainer'
import SubSectionHeading from '../../components/Atoms/serviceStation/SubSectionHeading'

export default function test() {
    return (
        <div className="relative bg-Background-0">
            <div className="flex flex-row">
                <div>
                    <SideNavBar />
                </div>
                <div className="w-full flex flex-col">
                    <TopContainer heading1="Dashboard" heading2="Stock Keeper" addnewbtntext="Add New" />
                    <div className="h-full flex items-center justify-center mx-16 ">
                        <div className="h-full w-9/12 py-24">
                            <SubSectionHeading heading="Item Requests" />
                            
                            <ItemContainer itemNo="Piston" link={"summary"} />
                            <ItemContainer itemNo="Brake Pad" link={"viewService/" + "2"} />
                            <ItemContainer itemNo="Cluch Pad" link={"viewService/" + "3"} />
                            <ItemContainer itemNo="Oil Filter" link={"viewService/" + "4"} />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
