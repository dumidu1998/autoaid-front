import React, { useEffect, useState } from 'react'
import TopContainer from '../../components/Atoms/serviceStation/TopContainer'
import SideNav from '../../components/Moleculars/serviceAdvisor/sideNav'
import AdminTopBar from '../../components/Atoms/admin/AdminTopBar'
import { Field, Form, Formik } from 'formik'
import SearchBtnDetailsForm from '../../components/Atoms/SearchBtnDetailsForm'
import Button from '../../components/Atoms/Button'
import DetailFormBtn from '../../components/Atoms/DetailFormBtn'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { getCookie } from '../../jsfunctions/cookies'
import AppointmentContainer from '../../components/Atoms/serviceStation/AppointmentContainer'
import { Redirect, useHistory, Link } from 'react-router-dom/cjs/react-router-dom.min'


export default function DetailsForm() {

    const [contactNo, setcontactNo] = useState('');
    const [customerDetails, setcustomerDetails] = useState('');
    const [vehicleNumbers, setvehicleNumbers] = useState('');

    var config = {
        headers: {
            'Authorization': 'Bearer ' + getCookie('token'),
        }
    }

    const getUserDetails = () => {
        console.log(contactNo);

        if (contactNo != '') {
            axios.get(`${process.env.REACT_APP_API_BASE_URL}/advisor/getCustomer/${contactNo}`, config)
                .then(async function (response) {
                    // handle success
                    console.log(response.data);
                    toast.success("User is There");
                    setcustomerDetails(response.data);
                    setvehicleNumbers(response.data.vehicleList.map((vehicle) =>
                        <AppointmentContainer vehicleNo={vehicle.vehicleNumber} link={{
                            pathname: '/serviceadvisor/addvehicle',
                            state: { contact: contactNo,
                                        update:"update" }
                        }} />
                    ));
                    document.getElementById("customer-add-btn").classList.add("hidden");
                    document.getElementById("add-new-vehicle-btn").classList.remove("hidden");
                })
                .catch(function (error) {
                    // handle error
                    console.log(error.response.data);
                    toast.error(error.response.data);
                    setcustomerDetails({
                        firstName: '',
                        lastName: '',
                        city: '',
                        address: '',
                        contactNo: contactNo
                    });
                    setvehicleNumbers();
                    document.getElementById("customer-add-btn").classList.remove("hidden");
                    //set this on submit of add customer
                    document.getElementById("add-new-vehicle-btn").classList.add("hidden");
                })
                .then(function () {
                    // always executed
                });
        } else {
            toast.error("Contact Number Required");
        }
    }
    const history = useHistory();
    return (
        <div className=" bg-Background-0">
            <div className="flex flex-row">
                <div className="">
                    <SideNav />
                </div>
                <div className="w-full flex flex-col">
                    {/* <TopContainer heading1="Dashboard" heading2="Service Advisor" addnewbtntext="Add New"/> */}
                    <AdminTopBar name="Vehicle Registration" roleName="Service Advisor" />

                    <div className="container mx-auto max-w-full">
                        <div className="grid-cols-4 ">
                            <div className="w-full h-24">
                                <div className="flex items-center justify-center w-1/2">
                                    <div className="flex flex-col mr-2 ml-16">
                                        <label htmlFor="contactNo" className="font-primary  text-md font-semibold  mt-3">Contact No </label>
                                        <input value={contactNo} onChange={event => setcontactNo(event.target.value)} placeholder="+94/07....." className=" ml-5 mt-2 rounded-lg shadow-lg w-64 h-10 pl-5" />
                                    </div>
                                    <div className="ml-8 mt-12">
                                        <SearchBtnDetailsForm functionName={getUserDetails} txt="Search" />
                                    </div>
                                </div>
                            </div>
                            <Formik
                                enableReinitialize
                                initialValues={customerDetails}
                                onSubmit={async (values, { resetForm }) => {
                                    // console.log("on submit"+values); 
                                    await new Promise((r) => setTimeout(r, 500));
                                    axios.post(`${process.env.REACT_APP_API_BASE_URL}/advisor/customer/addNew`, values, config)
                                        .then(function (response) {
                                            console.log(response.data);
                                            history.push('/serviceadvisor/addvehicle',
                                                { state: '0777777' }
                                            );
                                        })
                                }
                                }

                            >
                                <Form>
                                    <div className=" w-full h-48 mt-">
                                        <div className="flex flex-col items-center overflow-auto ">
                                            <div className="flex flex-row">
                                                <div className="flex flex-col mr-12 ml-4 w-1/2 ">
                                                    <Field id="contactNo" name="contactNo" className=" hidden" />
                                                    <label htmlFor="firstName" className="font-primary  text-md font-semibold  mt-3">First Name</label>
                                                    <Field id="firstName" name="firstName" placeholder="Jane Irish" className=" ml-5 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" />

                                                    <label htmlFor="address" className="font-primary  text-md font-semibold  mt-3">Address</label>
                                                    <Field id="address" name="address" placeholder="1/d, Negombo,Colombo" className=" ml-5 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" />
                                                </div>
                                                <div className="flex flex-col ml-40 w-1/2">
                                                    <label htmlFor="lastName" className="font-primary  text-md font-semibold  mt-3">Last Name</label>
                                                    <Field id="lastName" name="lastName" placeholder="Jane" className=" ml-5 rounded-lg shadow-lg w-60 h-10  mt-2 pl-5" />

                                                    <label htmlFor="city" className="font-primary  text-md font-semibold  mt-3">City</label>
                                                    <Field id="city" name="city" placeholder="Colombo" className=" ml-5 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {vehicleNumbers}
                                    <div className="flex justify-center  items-center h-18 mt-6">
                                        <div id="customer-add-btn" className="flex justify-start ml-20  items-center  w-1/2">
                                            <button className="bg-green-600 w-48 h-12 rounded-xl text-white text-xl mt-2 mr-8" type="submit">Add Customer</button>
                                            {/* <DetailFormBtn txt="Add Customer" /> */}
                                        </div>
                                    </div>
                                </Form>
                            </Formik>
                            <div>
                                <Link to={{
                                    pathname: '/serviceadvisor/addvehicle',
                                    state: { contact:contactNo }
                                }}>
                                    <button id="add-new-vehicle-btn" className="bg-red-600 w-48 h-12 rounded-xl text-white text-xl mt-2 mr-8 hidden">Add New Vehicle</button>
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}
