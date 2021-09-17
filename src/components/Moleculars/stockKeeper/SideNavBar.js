import  { useState } from 'react';
import SideNavIcon from '../../Atoms/stockKeeper/SideNavIcon'

export default function SideNavBar() {
    const [showSidebar, setShowSidebar] = useState('-left-40');
    return (
        
        <div>
            <div className=" flex">
                <SideNavIcon showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
            </div>
        </div>
    )
}
