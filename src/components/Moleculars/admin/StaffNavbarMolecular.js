import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import StaffManageBtn from '../../Atoms/admin/StaffManageBtn';
import StaffNavBar from '../../Atoms/admin/StaffNavBar';
export default function StaffNavbarMolecular(props) {
        return (
            <div className="flex flex-col mt-4 justify-between items-center">
                <div className=" bg-white h-auto flex justify-center items-center w-11/12 rounded-xl shadow-2xl">
                    <StaffNavBar setfilter={props.setfilter} filter={props.filter} setUserType={props.setUserType} userType={props.userType} />
                </div>

                {/* <Link to="/admin/staff" >
                    <StaffManageBtn btnName="Add New" />
                </Link> */}

            </div>
        );
    }