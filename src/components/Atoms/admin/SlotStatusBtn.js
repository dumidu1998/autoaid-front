import React from 'react'
import axios from 'axios';
import { getCookie } from '../../../jsfunctions/cookies';
import { toast } from 'react-toastify';

export default function SlotStatusBtn(props) {
    var config = {
        headers: {
            'Authorization': 'Bearer ' + getCookie('token'),
        }
    }

    function actOrDeact(){
        if(props.btnName=="ACTIVATE"){
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/slot/activate/${props.slotName}`, config)
        .then(function (response) {
            console.log(response.data);
            props.setadded(!props.added);
            toast.success(response.data);
        })
    }else{
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/slot/deactivate/${props.slotName}`, config)
        .then(function (response) {
            console.log(response.data);
            props.setadded(!props.added);
            toast.success(response.data);
        })
    } 
    }
    return (
        <div>
            <button onClick={actOrDeact} className="flex justify-center w-40 rounded-lg bg-white  shadow-xl  text-black px-10 py-2 font-primary font-bold text-sm">{props.btnName}</button>
        </div>
    )
}

