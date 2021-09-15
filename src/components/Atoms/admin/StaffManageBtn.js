import React, { useState } from 'react';
function StaffManageBtn (props) {
    const [color, setcolor] = useState("w-32 h-10 rounded-xl text-white text-LG font-semibold bg-red-500");
    
        return ( 
            <div>
                <button className={color}>{props.btnName}</button>
            </div>
         );
    }
 
export default StaffManageBtn;