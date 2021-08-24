import { useState } from 'react';
import Testing from '../../../pages/admin/Testing';
import AdminSideBarIcons from '../../Atoms/admin/AdminSideBarIcons';
import AdminTopBar from '../../Atoms/admin/AdminTopBar';

export default function AdminSideBar(props) {
    const [showSidebar, setShowSidebar] = useState('-left-40');

    return (
        <div className="flex ">
            {/* <AdminSideBarIcons/> */}
            <Testing  showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
            <AdminTopBar name={props.name} roleName={props.roleName}  />
        </div>
    )
}
