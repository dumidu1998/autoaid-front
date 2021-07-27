import React, { Component } from 'react';
import StaffManageNavbarHeadingBtns from './StaffManageNavbarHeadingBtns';
import RemmovenavbarAdminbtn from './RemmovenavbarAdminbtn';
class StaffNavBar extends Component {
    state = { 
        list:[  
                {id:2,value:"Service Advisor"},
                {id:3,value:"Technician"},
                {id:4,value:"Cashier"},
                {id:5,value:"Stock Keeper"},
            ]
     }

    render() { 
        return ( 
            <di className="flex">
                <RemmovenavbarAdminbtn  btnName="Admin"  />
                {this.state.list.map(btn=><StaffManageNavbarHeadingBtns key={btn.id} btnName={btn.value}  id={btn.id}/>)}
            
            </di>
         );
    }
}
 
export default StaffNavBar;