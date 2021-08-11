import React, { useState } from 'react';
import StaffManageNavbarHeadingBtns from './StaffManageNavbarHeadingBtns';
import RemmovenavbarAdminbtn from './RemmovenavbarAdminbtn';
function StaffNavBar(){
    const [list, setList] = useState([
        {id:1,value:"Admin"},
        {id:2,value:"Service Advisor"},
        {id:3,value:"Technician"},
        {id:4,value:"Cashier"},
        {id:5,value:"Stock Keeper"},
    ])

    const [highBtn, setHighBtn] = useState(list[0].id);

        return ( 
            <di className="flex">
                {/* Amodgen ahanna one */}
                {/* <RemmovenavbarAdminbtn  btnName="Service"  /> */}
                {list.map(btn=><StaffManageNavbarHeadingBtns setHighBtn={setHighBtn} highBtn={highBtn} key={btn.id} btnName={btn.value}  id={btn.id}/>)}
            
            </di>
         );
}
 
export default StaffNavBar;