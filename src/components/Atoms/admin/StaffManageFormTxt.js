import React, { Component } from 'react';
class StaffManageFormTxt extends Component {
    state = { 
        style:"rounded-lg shadow-lg w-60 h-",
     }
    height(){
        let {style}=this.state;
        style+=this.props.height;
        return style;
    }
    render() { 
        return ( 
            <div>
                 <div className="m-2">
                    <h1 className="font-primary  text-md font-semibold"> {this.props.lable}</h1> 
                    <input type="text" name="name" className={this.height()} value={this.props.value} onChange={(e)=>this.props.value=e.target.value} />
                </div>
            </div>
         );
    }
}
 
export default StaffManageFormTxt;