import React, { useState } from 'react'
import StaffManageForm from '../../Moleculars/admin/StaffManageForm';
import StaffManageIdStatusPropilePicRow from '../../Moleculars/admin/StaffManageIdStatusPropilePicRow';
export default function StaffManageFormOrgan(props) {
    return (
        <div className=" flex flex-col w-full float-right rounded-2xl -mt-12">
            <StaffManageIdStatusPropilePicRow selectedid={props.selectedid} />
            <div className="rounded-2xl">
                <StaffManageForm setadded={props.setadded} added={props.added} staffdetails={props.staffdetails} />
            </div>
        </div>
    )
}
