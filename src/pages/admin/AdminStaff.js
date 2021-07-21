import React from 'react'
import { useParams } from 'react-router-dom';
import AdminSideBar from '../../components/Moleculars/admin/AdminSideBar';
import AdminStaffManageOrgan from '../../components/Organs/admin/AdminStaffManageOrgan';

export default function AdminStaff() {
   const [staffdetails, setstaffdetails] = useState();
   let { staffid } = useParams();
   if (staffid) {
      var getdata = () => {
         axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/getstaffmeminfo/${staffid}`)
            .then(function (response) {
               // handle success
               console.log(response.data);
               // alert(response.data);
               // setstaffdetails(response.data);

            })
            .catch(function (error) {
               // handle error
               console.log(error);
            })
            .then(function () {
               // always executed
            });
      }

      return (
         <div className="relative bg-Background-0">
            <AdminSideBar />
            <div className="w-10/12 absolute top-28 right-10 ">
               <AdminStaffManageOrgan />
            </div>

         </div>
      )
   }
}
