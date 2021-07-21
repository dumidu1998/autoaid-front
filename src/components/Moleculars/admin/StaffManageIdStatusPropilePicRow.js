// import React, { Component } from 'react';
// import StaffManageIdDisplay from '../../Atoms/admin/StaffManageIdDisplay';
// import StaffManageStatusBtn from '../../Atoms/admin/StaffManageStatusBtn';
// import StaffManageStatusDisplay from '../../Atoms/admin/StaffManageStatusDisplay';
// import StaffMemProfileImg from '../../Atoms/admin/StaffMemProfileImg';
// class StaffManageIdStatusPropilePicRow extends Component {
//     state = {  }
//     render() { 
//         return ( 
//             <div className="flex justify-between items-center z-10 px-9">
//                 <StaffManageIdDisplay id={"2020"}/>
//                 <div className="ml-12">
//                     <StaffMemProfileImg/>
//                 </div>
//                 <div className="flex ml-2">
//                     <StaffManageStatusDisplay status={"Deactivated"}/>
//                     <StaffManageStatusBtn status={"Active"}/>
//                 </div>
//             </div>
//          );
//     }
// }
 
// export default StaffManageIdStatusPropilePicRow;

import React,{useState,useEffect} from 'react'
import StaffManageIdDisplay from '../../Atoms/admin/StaffManageIdDisplay';
import StaffManageStatusBtn from '../../Atoms/admin/StaffManageStatusBtn';
import StaffManageStatusDisplay from '../../Atoms/admin/StaffManageStatusDisplay';
import StaffMemProfileImg from '../../Atoms/admin/StaffMemProfileImg';
import axios from 'axios'; 
export default function StaffManageIdStatusPropilePicRow() {
    const [nextId, setnextId] = useState();

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

    useEffect(() => {getid();}, [])
    return (
        <div className="flex justify-between items-center z-10 px-9">
                <StaffManageIdDisplay id={nextId}/>
                <div className="ml-12">
                    <StaffMemProfileImg/>
                </div>
                <div className="flex ml-2">
                    <StaffManageStatusDisplay status={"Deactivated"}/>
                    <StaffManageStatusBtn status={"Active"}/>
                </div>
            </div>
    )
}
