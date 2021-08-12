import React, { useState } from 'react'
import StaffManageFormOrgan from './StaffManageFormOrgan';
import StaffMemListOrgan from './StaffMemListOrgan';
import StaffNavbarMolecular from '../../Moleculars/admin/StaffNavbarMolecular';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function AdminStaffManageOrgan(props) {
    const [added, setadded] = useState(true);
    return (
        <div>
            <div className="mb-3">
                <StaffNavbarMolecular />
            </div>
            <div className="flex items-center justify-center">
                <StaffMemListOrgan added={added} />
                <div className="ml-12"></div>
                <StaffManageFormOrgan setadded={setadded} added={added} staffdetails={props.staffdetails} selectedid={props.selectedid} />
            </div>
        </div>
    )
}
