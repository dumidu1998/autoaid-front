import React, { useState, useEffect } from 'react'
import StaffManageFormOrgan from './StaffManageFormOrgan';
import StaffMemListOrgan from './StaffMemListOrgan';
import StaffNavbarMolecular from '../../Moleculars/admin/StaffNavbarMolecular';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function AdminStaffManageOrgan(props) {
    const [added, setadded] = useState(true);
    const [userType, setUserType] = useState(1);
    const [userStatus, setUserStatus] = useState();

    useEffect(() => {
        setUserStatus(props.staffdetails.userStatus);
    }, [props.staffdetails])

    return (
        <div className="grid grid-cols-1">
            <div className="mb-6 flex flex-col items-center justify-center lg:grid grid-cols-3 place-items-center ">
                {/* Nav bar with user types */}
                <StaffNavbarMolecular setUserType={setUserType} userType={userType} />
                {/* Staff list according to user type */}
                <div className="flex justify-center items-center mt-10 lg:mt-0 bg-red-700  w-full lg:col-span-2 ">
                    <StaffMemListOrgan added={added} userType={userType} /> 
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                {/*Staff Manage Form */}
                <StaffManageFormOrgan userStatus={userStatus} setUserStatus={setUserStatus} setadded={setadded} added={added}
                    staffdetails={props.staffdetails} selectedid={props.selectedid} />
            </div>
        </div>
    )
}
