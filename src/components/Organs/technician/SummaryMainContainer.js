import React from 'react'
import SubSectionHeading from '../../Atoms/serviceStation/SubSectionHeading'
import RepairList from '../../Moleculars/technician/RepairList'
import RepairListCheckBox from '../../Moleculars/technician/RepairListCheckBox'
import TechniciansDropDown from '../../Moleculars/technician/TechniciansDropDown'

export default function SummaryMainContainer() {
    return (
        <div className="bg-white  p-3 shadow-xl rounded-lg w-1/2 mr-10 my-10">
            <SubSectionHeading heading="Engine Section" />
            <div className=" flex flex-col items-center">
                <RepairList title="Engine Piston Repair" time="20 mins" />
                <RepairList title="Engine Piston Repair" time="20 mins" />
                <RepairList title="Engine Piston Repair" time="20 mins" />
            </div>
            <SubSectionHeading heading="Available Technicians" />
            <div className=" flex flex-col items-center">
                <TechniciansDropDown />
                {/* <RepairList title="Engine Piston Repair" time="20 mins" /> */}
            </div>
        </div>
    )
}
