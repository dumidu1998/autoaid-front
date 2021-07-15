import React, { Component } from 'react';
import StaffManageForm from '../../components/Moleculars/admin/StaffManageForm';
import StaffManageIdStatusPropilePicRow from '../../components/Moleculars/admin/StaffManageIdStatusPropilePicRow';
import StaffMemListSlide from '../../components/Moleculars/admin/StaffMemListSlide';
import StaffManageFormOrgan from '../../components/Organs/admin/StaffManageFormOrgan';
import StaffMemListOrgan from '../../components/Organs/admin/StaffMemListOrgan';
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
           ÷
            {/* <StaffNavbarMolecular/> */}
            {/* <StaffMemListSlide/> */}
            {/* <StaffMemListOrgan/> */}
            {/* <StaffManageIdStatusPropilePicRow/> */}
            {/* <StaffManageForm/> */}
            {/* <StaffManageFormOrgan/> */}
            <div className="w-10/12 absolute top-28 right-10 ">
               <AdminStaffManageOrgan/>
            </div>
           
          </div>
       )
   }
}
 
export default AdminStaff;