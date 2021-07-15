import React, { Component } from 'react';
class Profileicon extends Component {
    state = { 
        url:this.props.url,
     }
    render() { 
        return ( 
            <div>
                <div className="m-5 flex items-center">
                <img src={this.state.url} className="w-16 h-16 rounded-full" alt="profile"/>
                <p className="text-white m-5 font-primary font-extralight">{this.props.loginuser}</p>
            </div>
            </div>
         );
    }
}
 
export default Profileicon;