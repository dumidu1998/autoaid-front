import React, { useState } from 'react';
function StaffManageBtn (props) {
    const [color, setcolor] = useState("w-40 h-12 rounded-xl text-white text-xl font-semibold bg-blue-600");
    
        return ( 
            <div>
                <button className={color}>{props.btnName}</button>
            </div>
         );
    }
 
export default StaffManageBtn;