import React, { Component } from 'react';
class StaffMemProfileImg extends Component {
    state = {  
        url:"/imgs/admin/Default-Profile-Picture-PNG-Image.png",
    }
    render() { 
        return ( 
            <div>
                <img src={this.state.url} className="w-32 h-32  lg:w-40 lg:h-40 rounded-full shadow-2xl p-2" alt="profile"/>
            </div>
         );
    }
}
 
export default StaffMemProfileImg;