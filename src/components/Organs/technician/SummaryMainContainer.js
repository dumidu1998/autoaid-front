import React, { useState, useEffect } from 'react'
import SubSectionHeading from '../../Atoms/serviceStation/SubSectionHeading'
import RepairList from '../../Moleculars/technician/RepairList'
import RepairListCheckBox from '../../Moleculars/technician/RepairListCheckBox'
import TechniciansDropDown from '../../Moleculars/technician/TechniciansDropDown'

export default function SummaryMainContainer(props) {
    const [serviceEntryList, setserviceEntryList] = useState([])

    useEffect(() => {
        
    }, [])

    return (
        <div className="bg-white  p-3 shadow-xl rounded-lg w-full mr-10 my-10">
            <SubSectionHeading heading="Repair List" />
            <div className=" flex flex-col items-center">
                <RepairList title="Engine Piston Repair" time="20 mins" />
                <RepairList title="Engine Piston Repair" time="20 mins" />
                <RepairList title="Engine Piston Repair" time="20 mins" />
            </div>
            <SubSectionHeading heading="Available Technicians" />
            <div className=" flex flex-col items-center">
                <TechniciansDropDown url1="/admin/getstaff/3" url2="/admin/gettech/" url3="/admin/settech/" />
            </div>
        </div>
    )
}
