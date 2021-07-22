import React, { Component } from 'react';
class DashboardName extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1 className=" font-primary text-3xl text-white">{this.props.name}<span className=" font-primary text-2xl text-white font-light">({this.props.roleName})</span></h1>
            </div>
         );
    }
}
 
export default DashboardName;