import React, { Component } from 'react';
import DashboardName from './DashboardName';
import Profileicon from './Profileicon';
class AdminTopBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="w-full ">
                <div className=" flex  h-24 bg-forth-0 rounded-b-3xl  items-center justify-center">
                    <div className=" flex w-11/12 justify-between items-center">
                        <DashboardName name="Staff Handaling " roleName="Admin"/>
                        <Profileicon loginuser={"Admin One"} url="/imgs/admin/Admin One.jpg"/>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default AdminTopBar;