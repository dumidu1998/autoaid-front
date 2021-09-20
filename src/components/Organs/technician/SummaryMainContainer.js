import React, { useState, useEffect } from 'react'
import SubSectionHeading from '../../Atoms/serviceStation/SubSectionHeading'
import RepairList from '../../Moleculars/technician/RepairList'
import RepairListCheckBox from '../../Moleculars/technician/RepairListCheckBox'
import TechniciansDropDown from '../../Moleculars/technician/TechniciansDropDown'
import axios from 'axios'
import { getCookie } from '../../../jsfunctions/cookies'

export default function SummaryMainContainer(props) {
    const [serviceEntryList, setserviceEntryList] = useState([])

    var config = {
        headers: {
            'Authorization': 'Bearer ' + getCookie('token'),
        }
    }
    console.log(props.repair.repairId+" "+props.sectionName);
    
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/technician/getEntryList/${props.repair.repairId}/${props.sectionName}`, config)
        .then(function (response) {
            console.log(response.data);
            setserviceEntryList(response.data);
        })
        .catch(function (error) {
            console.log(error.response.data);
        })
    }, [props.repair,props.sectionName])

    return (
        <div className="bg-white  p-3 shadow-xl rounded-lg w-full mr-10 my-10">
            <SubSectionHeading heading="Repair List" />
            <div className=" flex flex-col items-center">
                {serviceEntryList.map(entry=><RepairList title={entry.subCatName} time={entry.estimatedTime} />)}                
                {/* <RepairList title="Engine Piston Repair" time="20 mins" /> */}
            </div>
            <SubSectionHeading heading="Available Technicians" />
            <div className=" flex flex-col items-center">
                <TechniciansDropDown url1="/admin/getstaff/6" url2={"/technician/getTech/"+props.repair.repairId+"/"} url3={"/technician/assignTech/"+props.repair.repairId+"/"} defaultMsg="Assign Tech" sectionName={props.sectionName} />
            </div>
        </div>
    )
}
