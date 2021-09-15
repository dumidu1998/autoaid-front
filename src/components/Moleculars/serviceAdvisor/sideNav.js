import  { useState } from 'react';
import SideNavIcon from '../../Atoms/serviceStation/SideNavIcon'

export default function AdminSideBar(props) {
    const [showSidebar, setShowSidebar] = useState('-left-40');

    return (
        <div className="flex ">
            <SideNavIcon showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
        </div>
    )
}
