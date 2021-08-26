import React from 'react'
import SideNavBar from '../../components/Moleculars/technician/SideNavBar'
import TopContainer from '../../components/Atoms/serviceStation/TopContainer'
import ItemContainer from '../../components/Atoms/stockKeeper/ItemContainer'
import SubSectionHeading from '../../components/Atoms/serviceStation/SubSectionHeading'
import LowQuantityItems from '../../components/Atoms/stockKeeper/LowQuantityItems'

export default function Dashboard() {
    return (
        <div className="relative bg-Background-0">
            <div className="flex flex-row">
                <div>
                    <SideNavBar />
                </div>
                <div className="w-full flex flex-col">
                    <TopContainer heading1="Dashboard" heading2="Stock Keeper" addnewbtntext="Add New" path="addnew" />
                    <div className="h-full w-FULL flex items-center justify-center mx-16 ">
                        <div className="h-full w-5/12 py-8">
                            <SubSectionHeading heading="Item Requests" />
                            <div className="w-full h-3/5 overflow-auto">
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
                        <div className="h-full w-5/12 py-8 ml-20">
                            <SubSectionHeading heading="Low Quantity Items" />
                            <div className="bg-white w-full h-4/6 rounded-xl shadow-xl  py-12">
                                <div className="px-4">
                                    <LowQuantityItems itemNo="Item Number" itemName="Item Name" CurrentStatus="Current Status" />
                                </div>
                                <div className="w-full h-64 overflow-auto">
                                    <div className="mt-4 border-b-2 pr-9 pl-12"><LowQuantityItems itemNo="12345" itemName="Brake Pad" CurrentStatus="Completed" /></div>
                                    <div className="mt-4 border-b-2 pr-9 pl-12"><LowQuantityItems itemNo="15948" itemName="Brake Pad" CurrentStatus="On service" /></div>
                                    <div className="mt-4 border-b-2 pr-9 pl-12"><LowQuantityItems itemNo="21356" itemName="Brake Pad" CurrentStatus="Completed" /></div>
                                    <div className="mt-4 border-b-2 pr-9 pl-12"><LowQuantityItems itemNo="15943" itemName="Brake Pad" CurrentStatus="On service" /></div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
