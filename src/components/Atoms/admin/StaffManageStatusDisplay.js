import React, { Component } from 'react';
class StaffManageStatusDisplay extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="bg-white shadow-2xl rounded-xl h-12 p-3 flex items-center mr-2">
                <div className="font-bold text-lg font-primary">{this.props.status}</div>
            </div>
         );
    }
}
 
export default StaffManageStatusDisplay;