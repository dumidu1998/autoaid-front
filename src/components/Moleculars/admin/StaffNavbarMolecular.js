import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StaffManageBtn from '../../Atoms/admin/StaffManageBtn';
import StaffNavBar from '../../Atoms/admin/StaffNavBar';
class StaffNavbarMolecular extends Component {
    state = {}
    render() {
        return (
            <div className="flex justify-between items-center">
                <div className=" bg-white h-24 flex justify-center items-center w-6/12 rounded-xl shadow-2xl">
                    <StaffNavBar />
                </div>
                <Link to="/admin/staff" >
                    <StaffManageBtn setColor="bg-blue-600" btnName="" />
                </Link>
            </div>
        );
    }
}

export default StaffNavbarMolecular;