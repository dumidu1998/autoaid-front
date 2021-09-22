import React, { Component } from 'react';
class Profileicon extends Component {
    state = { 
        url:this.props.url,
     }
    render() { 
        return ( 
            <div>
                <div className="m-5 sm:flex md:flex-row  justify-center items-center">
                {/* <img src={this.state.url} className=" w-12 h-12 sm:w-16 sm:h-16 rounded-full" alt="profile"/> */}
                <p className="text-white font-primary font-extralight  mr-12 sm:ml-5 text-xl ">{this.props.loginuser}</p>
            </div>
            </div>
         );
    }
}
 
export default Profileicon;