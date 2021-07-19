import React, { Component } from 'react';
import StaffManageForm from '../../Moleculars/admin/StaffManageForm';
import StaffManageIdStatusPropilePicRow from '../../Moleculars/admin/StaffManageIdStatusPropilePicRow';
class StaffManageFormOrgan extends Component {
    state = {  }
    render() { 
        return ( 
            <div className=" flex flex-col w-full float-right rounded-2xl -mt-12">
                <StaffManageIdStatusPropilePicRow />
                <div className="shadow-2xl rounded-2xl">
                    <StaffManageForm/>
                </div>
            </div>
         );
    }
}
 
export default StaffManageFormOrgan;