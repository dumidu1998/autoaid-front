import React, { useState, useEffect } from 'react'
import StaffMemListSlide from '../../Moleculars/admin/StaffMemListSlide';
import axios from 'axios';
import { getCookie } from '../../../jsfunctions/cookies';
export default function StaffMemListOrgan(props) {

    const [admin, setadmin] = useState([])

    //console.log("List1"+props.userType);
    // alert(getCookie('token'));
    const getUsers = () => {
        //console.log("List"+props.userType);
        var config = {
            headers: {
                'Authorization': 'Bearer ' + getCookie('token'),
            }
        }
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/getstaff/` + props.userType, config)
            .then(function (response) {
                // handle success
                console.log(response.data);
                // alert(response.data);
                setadmin(response.data);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed

            });
    }

    useEffect(() => { getUsers(); }, [props.userType, props.added])


    return (
        <div className="bg-white p-3 shadow-xl rounded-lg w-auto ">
            {admin.map(t => <StaffMemListSlide idNum={t.id} userName={t.firstName + " " + t.lastname} key={t.id} />)}
        </div>
    )
}

