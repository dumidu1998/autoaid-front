import React, { Component } from 'react';
class StaffManageIdDisplay extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="bg-white shadow-2xl rounded-xl h-14 p-3 flex items-center w-48">
                <div className=" text-lg font-primary">Staff Id:<span className="ml-5">{this.props.id}</span> </div>
            </div>
         );
    }
}
 
export default StaffManageIdDisplay;
