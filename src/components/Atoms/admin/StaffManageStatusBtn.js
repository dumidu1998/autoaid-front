import React, { Component } from 'react';
class StaffManageStatusBtn extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <button className="rounded-xl w-24 h-12 bg-gradient-to-r from-primary-0 to-Secondary-0 font-bold text-white text-xl">{this.props.status}</button>
            </div>
         );
    }
}
 
export default StaffManageStatusBtn;