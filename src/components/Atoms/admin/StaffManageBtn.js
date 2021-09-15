import React, { useState } from 'react';
function StaffManageBtn (props) {
    const [color, setcolor] = useState("w-32 w-32 md:w-40  xl:w-44 h-10 md:h-12  rounded-xl text-white text-LG font-semibold bg-red-500");
    
        return ( 
            <div>
                <button className={color}>{props.btnName}</button>
            </div>
         );
    }
 
export default StaffManageBtn;