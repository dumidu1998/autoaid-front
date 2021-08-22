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
        <div>
            <div className="mb-3">
                {/* Nav bar with user types */}
                <StaffNavbarMolecular setUserType={setUserType} userType={userType} />
            </div>
            <div className="flex items-center justify-center">
                {/* Staff list according to user type */}
                <StaffMemListOrgan added={added} userType={userType} />
                <div className=""></div>
                {/*Staff Manage Form */}
                <StaffManageFormOrgan userStatus={userStatus} setUserStatus={setUserStatus} setadded={setadded} added={added}
                    staffdetails={props.staffdetails} selectedid={props.selectedid} />
            </div>
        </div>
    )
}
