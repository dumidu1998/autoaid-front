import React, { Component } from 'react';

import AdminSideBarIcons from '../../Atoms/admin/AdminSideBarIcons';
import AdminTopBar from '../../Atoms/admin/AdminTopBar';
class AdminSideBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="flex ">
                <AdminSideBarIcons/>
                <AdminTopBar name={this.props.name} roleName={this.props.roleName} />
            </div>
         );
    }
}
 
export default AdminSideBar;