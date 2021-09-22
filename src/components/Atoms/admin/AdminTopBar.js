import {useState, useEffect } from 'react';
import DashboardName from './DashboardName';
import Profileicon from './Profileicon';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import axios from 'axios';
import { getCookie } from '../../../jsfunctions/cookies';
export default function AdminTopBar(props) {
    const [showSidebar, setShowSidebar] = useState('-left-64');
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

        <>
            <div className="w-full">
                <div className="  flex ml-40nh-24 bg-forth-0 rounded-b-3xl  items-center justify-center">
                    <div className=" flex w-11/12 justify-between items-center">
                        <DashboardName name={props.name} roleName={props.roleName}/>
                        <Profileicon loginuser={userName} url="/imgs/admin/Admin One.jpg"/>
                    </div>
                    
                </div>
            </div>

        </>
    )
}
