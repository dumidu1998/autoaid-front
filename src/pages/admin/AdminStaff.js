import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import AdminSideBar from '../../components/Moleculars/admin/AdminSideBar';
import AdminStaffManageOrgan from '../../components/Organs/admin/AdminStaffManageOrgan';
import { getCookie } from '../../jsfunctions/cookies'
export default function AdminStaff() {
   const [staffdetails, setstaffdetails] = useState('');
   let { staffid } = useParams();

   var config = {
      headers: {
         'Authorization': 'Bearer ' + getCookie('token'),
      }
   }

   var getData = async () => {

      await axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/getstaffmeminfo/${staffid}`, config)
         .then(async function (response) {
            // handle success
            console.log(response.data);
            setstaffdetails(response.data);

         })
         .catch(function (error) {
            // handle error nmnmn
            console.log(error);
         })
         .then(function () {
            // always executed
         });
   }

   useEffect(() => {
      if (staffid) {
         getData();
      } else {
         setstaffdetails({
            staffId: '',
            firstName: '',
            lastName: '',
            email: '',
            contactNum: '',
            city: '',
            userType: '',
            password: '',
            address: '',
            userName: '',
            userStatus: 'STATUS'
         })
      }
   }, [staffid])

   return( 
      <div className="">
         <div className="md:ml-40 bg-Background-0"><AdminSideBar name="Section Manage " roleName="Admin"/></div>
         <div className=" w-full absolute bg-Background-0">
            <div className="md:ml-40">
               <div className="">
                  <AdminStaffManageOrgan staffdetails={staffdetails} selectedid={staffid} />
               </div>
            </div>
         </div>
      </div>
   )
}