import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function StaffManageStatusBtn(props) {
        const clickBtn = ()=>{
            props.setUserStatus(props.userStatus==="ACTIVATED" ? "DEACTIVATED":"ACTIVATED");
            axios.post(`${process.env.REACT_APP_API_BASE_URL}/admin/staff/activation`,{
                "staffId":props.staffId,
                "userStatus":props.userStatus
            })
            .then(function (response){
                console.log(response.data);
                toast.success(response.data+" Successfully");              
            })
            .catch(function(error){
                toast.error('❌ ' + error.response.data);
            })
        }

        return ( 
            <div>
                <button onClick={clickBtn} className="rounded-xl w-24 h-12 bg-gradient-to-r from-primary-0 to-Secondary-0 font-bold text-white text-xl">{props.status}</button>
            </div>
         );

}
 
export default StaffManageStatusBtn;