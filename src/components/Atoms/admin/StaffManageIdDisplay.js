import React, { Component } from 'react';
class StaffManageIdDisplay extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="bg-white shadow-2xl rounded-xl h-14 p-3 flex items-center">
                <div className=" text-lg font-primary">Staff Id: {this.props.id}</div>
            </div>
         );
    }
}
 
export default StaffManageIdDisplay;
