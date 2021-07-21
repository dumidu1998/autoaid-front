import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import AdminSideBar from '../../components/Moleculars/admin/AdminSideBar';
import AdminStaffManageOrgan from '../../components/Organs/admin/AdminStaffManageOrgan';

export default function AdminStaff() {
   const [staffdetails, setstaffdetails] = useState('');
   let { staffid } = useParams();

   var getData = async () => {
      await axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/getstaffmeminfo/${staffid}`)
         .then(async function (response) {
            // handle success
            console.log(response.data);
            setstaffdetails(response.data);

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
      if (staffid) {
         getData();
      }
   }, [staffid])

   return (
      <div className="relative bg-Background-0">
         <AdminSideBar />
         <div className="w-10/12 absolute top-28 right-10 ">
            <AdminStaffManageOrgan staffdetails={staffdetails} />
         </div>

      </div>
   )
}