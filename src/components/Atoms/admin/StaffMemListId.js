import React, { Component } from 'react';
class StaffMemListId extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="font-primary font-semibold text-lg ">Id: {this.props.idNum}</div>
            </div>
         );
    }
}
 
export default StaffMemListId;