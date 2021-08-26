import {useState } from 'react';
import DashboardName from './DashboardName';
import Profileicon from './Profileicon';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
export default function AdminTopBar(props) {
    const [showSidebar, setShowSidebar] = useState('-left-64');
    return (

        <>
            <div className="w-full">
                <div className="flex  ml-40nh-24 bg-forth-0 rounded-b-3xl  items-center justify-center">
                    <div className=" flex w-11/12 justify-between items-center">
                        <DashboardName name={props.name} roleName={props.roleName}/>
                        <Profileicon loginuser={"User Names "} url="/imgs/admin/Admin One.jpg"/>
                    </div>
                    
                </div>
            </div>

        </>
    )
}
