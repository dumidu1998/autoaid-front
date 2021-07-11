import React, { Component } from 'react';
import StaffManageFormOrgan from './StaffManageFormOrgan';
import StaffMemListOrgan from './StaffMemListOrgan';
import StaffNavbarMolecular from '../../Moleculars/admin/StaffNavbarMolecular';
class AdminStaffManageOrgan extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="mb-3">
                    <StaffNavbarMolecular/>
                </div>
                <div className="flex items-center justify-center">
                    <StaffMemListOrgan/>
                    <div className="ml-12"></div> 
                    <StaffManageFormOrgan/>
                </div>
            </div>
         );
    }
}
 
export default AdminStaffManageOrgan;