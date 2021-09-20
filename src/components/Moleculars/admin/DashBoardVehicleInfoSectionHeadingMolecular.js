import React, { useState, useEffect } from 'react'
import DashBoardSectionVehicleHeading from '../../Atoms/admin/DashBoardSectionVehicleHeading';
import axios from 'axios';
import { getCookie } from '../../../jsfunctions/cookies';
export default function DashBoardVehicleInfoSectionHeadingMolecular(props) {
    const [sectionList, setsectionList] = useState([]);
    const [increment, setincrement] = useState(true);
    const [decrement, setdecrement] = useState(true);


    var config = {
        headers: {
            'Authorization': 'Bearer ' + getCookie('token'),
        }
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/getsections`, config)
            .then(function (response) {
                // console.log(response.data);
                setsectionList(response.data);
                props.setsectionName(response.data[0]);
            })
    }, [])
    useEffect(() => {
        const index = sectionList.indexOf(props.sectionName, 0);
        if (index == sectionList.length-1) {
            props.setsectionName(sectionList[0]);
        }
        else {
            props.setsectionName(sectionList[index + 1]);
        }
    }, [increment])
    useEffect(() => {
        const index = sectionList.indexOf(props.sectionName, 0);
        if (index == 0) {
            props.setsectionName(sectionList[sectionList.length-1]);
        }
        else {
            props.setsectionName(sectionList[index - 1]);
        }
    }, [decrement])

    return (
        <div>
            <div className="flex justify-between">
                <button onClick={() => setdecrement(!decrement)}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg></button>
                <DashBoardSectionVehicleHeading name={props.sectionName} />
                <button onClick={() => setincrement(!increment)}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg></button>
            </div>

        </div>
    )
}

