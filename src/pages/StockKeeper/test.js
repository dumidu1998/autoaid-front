// import React from 'react'
// import AppointmentContainer from '../../components/Atoms/serviceStation/AppointmentContainer'
// import ButtonSecond from '../../components/Atoms/serviceStation/ButtonSecond'
// import Register from '../../components/Atoms/serviceStation/Register'
// import SubSectionHeading from '../../components/Atoms/serviceStation/SubSectionHeading'
// // import TopContainer from '../../components/Atoms/serviceStation/TopContainer'
// import SideNavBar from '../../components/Moleculars/technician/SideNavBar'
// import React, { useEffect, useState } from 'react'
// import TopContainer from '../../components/Atoms/serviceStation/TopContainer'
// import SideNav from '../../components/Moleculars/serviceAdvisor/sideNav'
// import AdminTopBar from '../../components/Atoms/admin/AdminTopBar'
// import { Field, Form, Formik } from 'formik'
// import SearchBtnDetailsForm from '../../components/Atoms/SearchBtnDetailsForm'
// import Button from '../../components/Atoms/Button'
// import DetailFormBtn from '../../components/Atoms/DetailFormBtn'
// import DetailFormUpdatebtn from '../../components/Atoms/DetailFormUpdatebtn'
// import axios from 'axios'
// import LandingSection6 from '../../components/Organs/LandingSection6'
// import { toast, ToastContainer } from 'react-toastify'
// import { getCookie } from '../../jsfunctions/cookies'
// import AppointmentContainer from '../../components/Atoms/serviceStation/AppointmentContainer'
// import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min'

export default function test() {
    
        // const [vehicleDetails, setvehicleDetails] = useState();
        // const [disable, setdisable] = useState(false);
        // const [addOrUpdate, setaddOrUpdate] = useState('Add');
        // const [addBtnStyle, setaddBtnStyle] = useState("w-24 h-10 bg-primary-0 rounded-md flex items-center justify-center hover:shadow-lg");
    
        // // const location = useLocation();
        // // console.log(location.state.update);
        // // console.log(location.state.contact);
        // // console.log("vin " + location.state.vin);
    
        // var config = {
        //     headers: {
        //         'Authorization': 'Bearer ' + getCookie('token'),
        //     }
        // }
        // //set single button to add or update
        // useEffect(() => {
        //     if (location.state.update != null) {
        //         setaddOrUpdate("Update");
        //         setaddBtnStyle("w-24 h-10  bg-gradient-to-br from-Secondary-0 to-primary-0 rounded-md flex items-center justify-center hover:shadow-lg");
        //     } else {
        //         setaddOrUpdate("Add");
        //         setaddBtnStyle("w-24 h-10 bg-primary-0 rounded-md flex items-center justify-center hover:shadow-lg");
        //     }
        //     if (location.state.vin != null) {
        //         //get and set vehicle details
        //         axios.get(`${process.env.REACT_APP_API_BASE_URL}/advisor/getvehicle/${location.state.vin}`, config)
        //             .then(function (response) {
        //                 console.log(response.data);
        //                 setvehicleDetails(response.data);
        //                 setdisable(true);
    
        //             })
        //     } else {
        //         setvehicleDetails({
        //             vin: '',
        //             vehicleNumber: '',
        //             engineNo: '',
        //             chassisNo: '',
        //             make: '',
        //             model: '',
        //             contactNo: location.state.contact
        //         })
        //         setdisable(false);
        //     }
        // }, [location.state.update])
    
        // const history = useHistory();
        // return (
        // <div>
        //     <div className=" bg-Background-0">
        //         <div className="flex flex-row">
        //             <div className="">

        //                 <SideNavBar />
        //             </div>
        //             <div className="w-full flex flex-col">

        //                 <TopContainer />
        //             <div className="h-full flex flex-col items-center mt-20">
        //                 <div className="lg:flex mt-5 items-center">
        //                     <div className=" float-left">
        //                         {/* <FormInput lable=" First Name" value={props.firstname} onchange={props.onchangefirstname}/> */}
        //                         <h1 className="font-primary  text-md font-semibold">Telephone no</h1>
        //                         <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0"
        //                             />
        //                     </div>
        //                     <div className="lg:ml-24">
        //                         <ButtonSecond/>
        //                     </div>
        //                 </div>   
        //                 <div className="lg:flex mt-5">
        //                     <div className="">
        //                         {/* <FormInput lable=" First Name" value={props.firstname} onchange={props.onchangefirstname}/> */}
        //                         <h1 className="font-primary  text-md font-semibold">  First Name</h1>
        //                         <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0"
        //                             />
        //                     </div>
        //                     <div className="lg:ml-24">
        //                         {/* <FormInput lable=" Last Name" value={props.lastname} /> */}
        //                         <h1 className="font-primary  text-md font-semibold">  Last Name</h1>
        //                         <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0" />
        //                     </div>
        //                 </div>
        //                 <div className="lg:flex mt-5">
        //                     <div className="">
        //                         {/* <FormInput lable=" First Name" value={props.firstname} onchange={props.onchangefirstname}/> */}
        //                         <h1 className="font-primary  text-md font-semibold">  Address</h1>
        //                         <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0"
        //                             />
        //                     </div>
        //                     <div className="lg:ml-24">
        //                         {/* <FormInput lable=" Last Name" value={props.lastname} /> */}
        //                         <h1 className="font-primary  text-md font-semibold"> City</h1>
        //                         <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0" />
        //                     </div>
        //                 </div>
        //             </div>

        //             <h1>Vehicle Details</h1>
        //             <div className="h-full flex flex-col items-center mt-20">
        //                 <div className="lg:flex mt-5 items-center">
        //                     <div className=" float-left">
        //                         {/* <FormInput lable=" First Name" value={props.firstname} onchange={props.onchangefirstname}/> */}
        //                         <h1 className="font-primary  text-md font-semibold">Telephone no</h1>
        //                         <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0"
        //                             />
        //                     </div>
        //                     <div className="lg:ml-24">
        //                         <ButtonSecond/>
        //                     </div>
        //                 </div>   
        //                 <div className="lg:flex mt-5">
        //                     <div className="">
        //                         {/* <FormInput lable=" First Name" value={props.firstname} onchange={props.onchangefirstname}/> */}
        //                         <h1 className="font-primary  text-md font-semibold">  First Name</h1>
        //                         <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0"
        //                             />
        //                     </div>
        //                     <div className="lg:ml-24">
        //                         {/* <FormInput lable=" Last Name" value={props.lastname} /> */}
        //                         <h1 className="font-primary  text-md font-semibold">  Last Name</h1>
        //                         <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0" />
        //                     </div>
        //                 </div>
        //                 <div className="lg:flex mt-5">
        //                     <div className="">
        //                         {/* <FormInput lable=" First Name" value={props.firstname} onchange={props.onchangefirstname}/> */}
        //                         <h1 className="font-primary  text-md font-semibold">  Address</h1>
        //                         <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0"
        //                             />
        //                     </div>
        //                     <div className="lg:ml-24">
        //                         {/* <FormInput lable=" Last Name" value={props.lastname} /> */}
        //                         <h1 className="font-primary  text-md font-semibold"> City</h1>
        //                         <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0" />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //     </div>
        // </div>
        // </div>

        // <div className=" bg-Background-0">
        //     <div className="flex flex-row">
        //         <div className="">
        //             <SideNav />
        //         </div>
        //         <div className="w-full flex flex-col">
        //             {/* <TopContainer heading1="Dashboard" heading2="Service Advisor" addnewbtntext="Add New"/> */}
        //             <AdminTopBar name="Vehicle Registration" roleName="Service Advisor" />
        //             <Formik
        //                 enableReinitialize
        //                 initialValues={vehicleDetails}
        //                 onSubmit={async (values, { resetform }) => {
        //                     // console.log("on submit"+values); 
        //                     if (addOrUpdate == "Add") {
        //                         await new Promise((r) => setTimeout(r, 500));
        //                         axios.post(`${process.env.REACT_APP_API_BASE_URL}/advisor/vehicle/add new`, values, config)
        //                             .then(function (response) {
        //                                 console.log(response.data);
        //                                 history.push('/serviceadvisor');
        //                             })
        //                     } else if (addOrUpdate == "Update") {
        //                         //To Do
        //                         console.log("Update back end");
        //                     }

        //                 }
        //                 }
        //             >
        //                 <Form id="add-vehicle-form">
        //                     <div className="w-full h-18 mt-3">
        //                         <div className="font-primary text-xl flex items-center justify-center w-4/12 mb-2 ">Add Vehicle</div>
        //                         <div className="flex flex-col items-center overflow-auto ">
        //                             <div className="flex flex-row">
        //                                 <div className="flex flex-col mr-12 ml-4 w-1/2 ">

        //                                     <Field id="contactNo" name="contactNo" className="hidden" />

        //                                     <label htmlFor="vin" className="font-primary  text-md font-semibold  mt-3">VIN</label>
        //                                     <Field id="vin" name="vin" placeholder="0938383830123" className=" ml-5 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" disabled={disable} />

        //                                     <label htmlFor="engineNo" className="font-primary  text-md font-semibold  mt-3">Engine No.</label>
        //                                     <Field id="engineNo" name="engineNo" placeholder="engineNo" className=" ml-5 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" />

        //                                     <label htmlFor="model" className="font-primary  text-md font-semibold  mt-3">Vehicle Model</label>
        //                                     <Field id="model" name="model" placeholder="model" className=" ml-5 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" disabled={disable} />
        //                                 </div>
        //                                 <div className="flex flex-col ml-40 w-1/2">
        //                                     <label htmlFor="vehicleNumber" className="font-primary  text-md font-semibold  mt-3">Reg No.</label>
        //                                     <Field id="vehicleNumber" name="vehicleNumber" placeholder="vehicleNumber" className=" ml-5 rounded-lg shadow-lg w-60 h-10  mt-2 pl-5" disabled={disable} />

        //                                     <label htmlFor="chassisNo" className="font-primary  text-md font-semibold  mt-3">chassis No</label>
        //                                     <Field id="chassisNo" name="chassisNo" placeholder="Jane" className=" ml-5 rounded-lg shadow-lg w-60 h-10  mt-2 pl-5" disabled={disable} />

        //                                     <label htmlFor="make" className="font-primary  text-md font-semibold  mt-3">Make</label>
        //                                     <Field id="make" name="make" placeholder="make" className=" ml-5 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" disabled={disable} />
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="flex justify-center  items-center h-18 mt-6">
        //                         {/* <div className="flex justify-end mr-20  items-center w-1/2">
        //                         <DetailFormUpdatebtn txt="Update" />
        //                     </div> */}
        //                         <div className="flex justify-start ml-20  items-center  w-1/2">
        //                             {/* <DetailFormBtn txt="Add New" /> */}
        //                             <button className={addBtnStyle} type="submit">{addOrUpdate}</button>
        //                         </div>
        //                     </div>
        //                 </Form>
        //             </Formik>
        //         </div>
        //     </div>
        // </div >
    // )
}
