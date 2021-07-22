import React, { Component } from 'react';
class RemmovenavbarAdminbtn extends Component {
    state = {  }
    highlightColor=()=>{
        let color="flex place-items-center justify-center bg-black w-full ml-3 mr-3 shadow-2xl rounded-xl h-16 text-white";
        return color;
    }
    render() { 
        return ( 
            <div className={this.highlightColor()}>
            {/* <div className="flex items-center justify-center h-8 bg-gray-900 p-3 pb-4 rounded-xl"><div className="text-white  font-semibold">{this.props.btnName}</div></div> */}
            <button className="font-primary">{this.props.btnName}</button>
        </div>
         );
    }
}
 
export default RemmovenavbarAdminbtn;