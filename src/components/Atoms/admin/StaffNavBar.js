import React, { Component } from 'react';
import StaffManageNavbarHeadingBtns from './StaffManageNavbarHeadingBtns';
class StaffNavBar extends Component {
    state = { 
        list:[  {id:1,value:"Admin"},
                {id:2,value:"Service Advisor"},
                {id:3,value:"Technician"},
                {id:4,value:"Cashier"},
                {id:5,value:"Stock Keeper"},
            ]
     }

    render() { 
        return ( 
            <di className="flex">
               {this.state.list.map(btn=><StaffManageNavbarHeadingBtns key={btn.id} btnName={btn.value}  id={btn.id}/>)}
            </di>
         );
    }
}
 
export default StaffNavBar;