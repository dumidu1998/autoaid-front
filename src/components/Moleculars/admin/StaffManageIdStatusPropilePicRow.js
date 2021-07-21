import React, { Component } from 'react';
import StaffManageIdDisplay from '../../Atoms/admin/StaffManageIdDisplay';
import StaffManageStatusBtn from '../../Atoms/admin/StaffManageStatusBtn';
import StaffManageStatusDisplay from '../../Atoms/admin/StaffManageStatusDisplay';
import StaffMemProfileImg from '../../Atoms/admin/StaffMemProfileImg';
class StaffManageIdStatusPropilePicRow extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="flex justify-between items-center z-10 px-9">
                <StaffManageIdDisplay id={"2020"}/>
                <div className="ml-12">
                    <StaffMemProfileImg/>
                </div>
                <div className="flex ml-2">
                    <StaffManageStatusDisplay status={"Deactivated"}/>
                    <StaffManageStatusBtn status={"Active"}/>
                </div>
            </div>
         );
    }
}
 
export default StaffManageIdStatusPropilePicRow;