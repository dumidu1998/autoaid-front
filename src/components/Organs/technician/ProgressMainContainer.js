import React from 'react'
import SubSectionHeading from '../../Atoms/serviceStation/SubSectionHeading'
import RepairList from '../../Moleculars/technician/RepairList'
import RepairListCheckBox from '../../Moleculars/technician/RepairListCheckBox'

export default function ProgressMainContainer() {
    return (
        <div className="bg-white h-3/4 p-3 shadow-xl rounded-lg w-full mr-10 my-10">
            <SubSectionHeading heading="Check List" />
            <div className=" flex flex-col items-center h-96 mb-10 overflow-y-auto">
                <RepairListCheckBox title="Engine Piston Repair" time="20 mins" />
                <RepairListCheckBox title="Engine Piston Repair" time="20 mins" />
                <RepairListCheckBox title="Engine Piston Repair" time="20 mins" />
                <RepairListCheckBox title="Engine Piston Repair" time="20 mins" />
                <RepairListCheckBox title="Engine Piston Repair" time="20 mins" />
                <RepairListCheckBox title="Engine Piston Repair" time="20 mins" />
                <RepairListCheckBox title="Engine Piston Repair" time="20 mins" />
                <RepairListCheckBox title="Engine Piston Repair" time="20 mins" />
                <RepairListCheckBox title="Engine Piston Repair" time="20 mins" />
                <RepairListCheckBox title="Engine Piston Repair" time="20 mins" />
                <RepairListCheckBox title="Engine Piston Repair" time="20 mins" />
                <RepairListCheckBox title="Engine Piston Repair" time="20 mins" />
                <RepairListCheckBox title="Engine Piston Repair" time="20 mins" />
                <RepairListCheckBox title="Engine Piston Repair" time="20 mins" />
            </div>

        </div>
    )
}
