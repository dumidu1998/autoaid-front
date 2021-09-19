import { useState } from 'react';
import CashierSideBarIcons from './CashierSideBarIcons';
import CashierTopBar from './CashierTopBar';

export default function CashierSideBar(props) {
    const [showSidebar, setShowSidebar] = useState('-left-40');

    return (
        <div className="flex ">
            <CashierSideBarIcons showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
            {/* <Testing  showSidebar={showSidebar} setShowSidebar={setShowSidebar}/> */}
            <CashierTopBar name={props.name} roleName={props.roleName}  />
        </div>
    )
}
