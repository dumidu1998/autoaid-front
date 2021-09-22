import React, { useEffect, useState } from 'react'
import { getCookie } from '../../../jsfunctions/cookies'
import axios from 'axios';


export default function ProfileIcon() {
    const [userName, setuserName] = useState('User');
    const userId = getCookie('userId');
    const userType = getCookie('userType');
    var config = {
        headers: {
            'Authorization': 'Bearer ' + getCookie('token'),
        }
    }
    useEffect(() => {
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/getUserName`, { "userId": userId, "userType": userType }, config)
            .then(function (response) {
                console.log(response.data);
                
                setuserName(response.data);
            })
    }, [])
    return (
        <div>
            <div className="m-5 flex items-center">
                {/* <img src="/imgs/hasa.png" className="w-16 h-16 rounded-full" /> */}
                <p className="text-white m-5 font-primary font-extralight">{userName}</p>
            </div>
        </div>
    )
}
