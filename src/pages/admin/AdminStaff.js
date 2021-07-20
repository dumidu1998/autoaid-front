import React, { Component } from 'react';
// import StaffNavbarMolecular from '../../components/Moleculars/admin/StaffNavbarMolecular';
 import AdminSideBar from '../../components/Moleculars/admin/AdminSideBar';
import AdminStaffManageOrgan from '../../components/Organs/admin/AdminStaffManageOrgan';
 
class AdminStaff extends Component {
   state={
   }
   render(){
       return(
          <div className="relative bg-Background-0">
            <AdminSideBar/>
            <div className="w-10/12 absolute top-28 right-10 ">
               <AdminStaffManageOrgan/>
            </div>
           
          </div>
       )
   }
}
 
export default AdminStaff;