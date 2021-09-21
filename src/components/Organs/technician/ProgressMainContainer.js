import React, { useState, useEffect } from 'react'
import SubSectionHeading from '../../Atoms/serviceStation/SubSectionHeading'
import RepairList from '../../Moleculars/technician/RepairList'
import RepairListCheckBox from '../../Moleculars/technician/RepairListCheckBox'
import { getCookie } from '../../../jsfunctions/cookies'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'

export default function ProgressMainContainer(props) {
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
        <div className="bg-white h-3/4 p-3 shadow-xl rounded-lg w-full mr-10 my-10">
            <SubSectionHeading heading="Check List" />
            <div className=" flex flex-col items-center h-96 mb-10 overflow-y-auto">
                {serviceEntryList.map(entry=><RepairListCheckBox entry={entry} repairId={props.repair.repairId} sectionName={props.sectionName}/>)}
                
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}
