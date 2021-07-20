import React from 'react'
import SubSectionHeading from '../../Atoms/serviceStation/SubSectionHeading'
import RepairList from '../../Moleculars/technician/RepairList'

export default function SummaryMainContainer() {
    return (
        <div className="bg-white  p-3 shadow-xl rounded-lg w-2/5 my-10">
            <SubSectionHeading heading="Engine Section" />
            <div className=" flex flex-col items-center">
                <RepairList title="Engine Piston Repair" time="20 mins" />
                <RepairList title="Engine Piston Repair" time="20 mins" />
                <RepairList title="Engine Piston Repair" time="20 mins" />

            </div>
            <SubSectionHeading heading="Available Technicians" />
            <div className=" flex flex-col items-center">
                <RepairList title="Engine Piston Repair" time="20 mins" />
            </div>
        </div>
    )
}
