import React, { Component } from 'react';

import AdminSideBarIcons from '../../Atoms/admin/AdminSideBarIcons';
import AdminTopBar from '../../Atoms/admin/AdminTopBar';
class AdminSideBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="flex ">
                <AdminSideBarIcons/>
                <AdminTopBar />
            </div>
         );
    }
}
 
export default AdminSideBar;