import React, { Component } from 'react';
class StaffManageBtn extends Component {
    state = { 
        style:"w-40 h-12 rounded-xl text-white text-xl font-semibold "
     }
     setColor(){
        let {style}=this.state;
        style+=this.props.setColor;
        return style;
     }
    render() { 
        return ( 
            <div>
                <button className={this.setColor()}>{this.props.btnName}</button>
            </div>
         );
    }
}
 
export default StaffManageBtn;