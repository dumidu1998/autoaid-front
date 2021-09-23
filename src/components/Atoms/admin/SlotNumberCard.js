import React, { useEffect, useState } from 'react'
import SlotStatusBtn from './SlotStatusBtn';
import axios from 'axios';
import { getCookie } from '../../../jsfunctions/cookies';

export default function SlotNumberCard(props) {
    let style = "w-4/6 h-auto rounded-lg shadow-xl m-4 text-white text-xl sm:text-2xl ";
    style += props.color;
    var config = {
        headers: {
            'Authorization': 'Bearer ' + getCookie('token'),
        }
    }
    const [activateStat, setactivateStat] = useState('ACTIVATE');
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/slot/actStatus/${props.slotName}`, config)
        .then(function (response) {
            console.log(response.data);
            setactivateStat(response.data);
        }) 
    }, [props.added])

    return (
        <div className={style}>
            <div className="grid grid-rows-4 place-items-center mt-8 mb-8">
                <div>Slot </div>
                <div className="mt-2">{props.slotName}</div>
                <div className="text-sm sm:text-base">{props.vNum}</div>
                <div className="text-sm sm:text-base">{props.techName}</div>
           </div>
           <div className="flex  justify-center mb-4">
               <SlotStatusBtn added={props.added} setadded={props.setadded} btnName={activateStat} slotName={props.slotName}/>
           </div>
        </div>
    )
}
