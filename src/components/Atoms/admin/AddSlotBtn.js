import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik';
import { getCookie } from '../../../jsfunctions/cookies';
import axios from 'axios';
export default function AddSlotBtn(props) {

    var config = {
        headers: {
            'Authorization': 'Bearer ' + getCookie('token'),
        }
    }


    const [name, setname] = useState('');

    function senddata() {
        if (name === '') {
            alert('Please Enter Name')
        }

        var dataaa = {
            sectionId: props.secid,
            slotName: name
        }
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/admin/add slot`, dataaa, config)
            .then(e => {
                alert("New Slot added Successfully");
                setname('');
                props.added(e => !e);
            })

    }
    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-center items-center sm:mt-10">
                <button onClick={senddata} className="text-white font-medium  bg-gradient-to-r from-red-400 to-yellow-500 px-4 py-2 rounded-lg w-64 md:w-32 lg:text-lg">Add Slots</button>
                <div className="">
                    <div className="mt-2 lg:mt-0 lg:ml-6">
                        <input id="soltName" name="slotName" value={name} onChange={e => setname(e.target.value)} placeholder="Slot Name" className="  rounded-lg shadow-lg w-64 h-10 pl-5" />
                    </div>
                </div>
            </div>
        </div>
    )
}
