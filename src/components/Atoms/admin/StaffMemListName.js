import React, { Component } from 'react';
class StaffMemListName extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="font-primary font-medium text-base text-gray-500 ">{this.props.userName}</div>
            </div>
         );
    }
}
 
export default StaffMemListName;