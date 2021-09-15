import React, { useState, useEffect } from 'react'
import StaffManageIdDisplay from '../../Atoms/admin/StaffManageIdDisplay';
import StaffManageStatusBtn from '../../Atoms/admin/StaffManageStatusBtn';
import StaffManageStatusDisplay from '../../Atoms/admin/StaffManageStatusDisplay';
import StaffMemProfileImg from '../../Atoms/admin/StaffMemProfileImg';
import axios from 'axios';
export default function StaffManageIdStatusPropilePicRow(props) {
    const [nextId, setnextId] = useState();
    const [activateBtnHide, setactivateBtnHide] = useState('hidden')
    const [activatedBtn, setActivatedBtn] = useState('ACTIVATE');

    var getid = () => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/getnextstaffid`)
            .then(function (response) {
                // handle success 
                console.log(response.data);
                // alert(response.data);
                setnextId(response.data);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed

            });
    }

    useEffect(() => {
        if (props.selectedid) {
            setnextId(props.selectedid);
        } else {
            getid();
        }
        if (props.userStatus == "ACTIVATED") {
            setActivatedBtn("DEACTIVATE");
        } else {
            setActivatedBtn("ACTIVATE")
        }
        if (props.userStatus != "STATUS") {
            setactivateBtnHide("flex ml-2");
        } else {
            setactivateBtnHide("hidden");
        }
    }, [props.selectedid, props.userStatus])

    return (
        <div className=" flex flex-col items-center relative xl:flex-row xl:justify-center ">
            <div className="grid grid-cols-1  place-items-center lg:mr-20 ">
                <div className=" mb-6 xl:mb-0 lg:ml-16 xl:ml-0">
                    <StaffManageIdDisplay id={nextId} />
                </div>
                <div className="md:hidden mt-4 mb-4">
                    <div className={activateBtnHide}>
                        <StaffManageStatusDisplay status={props.userStatus} />
                        <StaffManageStatusBtn staffId={props.selectedid} setUserStatus={props.setUserStatus} userStatus={props.userStatus} status={activatedBtn} />
                    </div>
                </div>
            </div>
            <div className=" ">
                <StaffMemProfileImg />
            </div>
            <div className="hidden md:block mt-4 mb-4 xl:mb-0 xl:mt-0">
                <div className={activateBtnHide}>
                    <StaffManageStatusDisplay status={props.userStatus} />
                    <StaffManageStatusBtn staffId={props.selectedid} setUserStatus={props.setUserStatus} userStatus={props.userStatus} status={activatedBtn} />
                </div>
            </div>
        </div>
    )
}
