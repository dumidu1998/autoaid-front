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
import VehicleListComponent from '../../components/Atoms/serviceStation/VehicleListComponent'


export default function DetailsForm() {

    const [contactNo, setcontactNo] = useState('');
    const [disable, setdisable] = useState(true);
    const [customerDetails, setcustomerDetails] = useState('');
    const [vehicleNumbers, setvehicleNumbers] = useState('');
    const userId=getCookie('userId');
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
                        <VehicleListComponent vehicle={vehicle} userId={userId} link={{
                            pathname: '/serviceadvisor/addvehicle',
                            state: {    contact: contactNo,
                                        update:"update",
                                        vin:vehicle.vin }
                                        // pass vin to update
                        }} />
                    ));
                    document.getElementById("customer-add-btn").classList.add("hidden");
                    document.getElementById("add-new-vehicle-btn").classList.remove("hidden");
                })
                .catch(function (error) {
                    // handle error
                    console.log(error.response.data);
                    toast.error(error.response.data);
                    setdisable(false);
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
                <div className="w-full flex flex-col xl:ml-40">
                    {/* <TopContainer heading1="Dashboard" heading2="Service Advisor" addnewbtntext="Add New"/> */}
                    <AdminTopBar name="Vehicle Registration" roleName="Service Advisor" />

                    <div className="container mx-auto max-w-full overflow-hidden">
                        <div className="grid-cols-4 ">
                            <div className="w-full h-24">
                                <div className="flex items-center justify-center w-full mt-20">
                                    <div className="flex flex-col mr-2">
                                        <label htmlFor="contactNo" className="font-primary  text-xl text-white font-semibold  mt-3">Contact No </label>
                                        <input value={contactNo} onChange={event => setcontactNo(event.target.value)} placeholder="+94/07....." className="mt-2 rounded-lg shadow-lg w-80 h-20 pl-5" />
                                    </div>
                                    <div className="ml-8 mt-14">
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
                                            history.push({
                                                pathname: '/serviceadvisor/addvehicle',
                                                state: { contact:contactNo }
                                            }
                                            );
                                        })
                                }
                                }

                            >
                                <Form className="mt-20 mr-12">
                                    <div className=" w-full h-48 mt-10 grid grid-cols-1 place-items-center ">
                                        <div className="w-full xl:w-8/12 bg-white p-12 rounded-xl flex flex-col items-center overflow-auto ">
                                            <div className="flex flex-row spay-3">
                                                <div className="flex flex-col mr-12 ml-4 w-1/2">
                                                    <Field id="contactNo" name="contactNo" className=" hidden" />
                                                    <label htmlFor="firstName" className="font-primary  text-md font-semibold  mt-3">First Name</label>
                                                    <Field id="firstName" required name="firstName" placeholder="Jane Irish" disabled={disable} className=" ml-5 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" />

                                                    <label htmlFor="address" className="font-primary  text-md font-semibold  mt-3">Address</label>
                                                    <Field id="address" required name="address" placeholder="1/d, Negombo,Colombo" disabled={disable} className=" ml-5 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" />
                                                </div>
                                                <div className="flex flex-col md:ml-20 lg:ml-28 xl:ml-32 w-1/2">
                                                    <label htmlFor="lastName" className="font-primary  text-md font-semibold  mt-3">Last Name</label>
                                                    <Field id="lastName" required name="lastName" placeholder="Jane" disabled={disable} className=" ml-5 rounded-lg shadow-lg w-60 h-10  mt-2 pl-5" />

                                                    <label htmlFor="city" className="font-primary  text-md font-semibold  mt-3">City</label>
                                                    <Field id="city" required name="city" placeholder="Colombo" disabled={disable} className=" ml-5 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full mt-12">
                                        {vehicleNumbers}
                                    </div>

                                    <div className="flex justify-center  items-center h-18 mt-12">
                                        <div id="customer-add-btn" className="flex justify-center  items-center  w-1/2 mt-8 ">
                                            <button className="bg-green-600 w-48 h-12 rounded-xl text-white text-xl mt-2 mr-8" type="submit">Add Customer</button>
                                            {/* <DetailFormBtn txt="Add Customer" /> */}
                                        </div>
                                    </div>
                                </Form>
                            </Formik>
                            <div className="flex justify-center mt-8 mb-40">
                                <Link to={{
                                    pathname: '/serviceadvisor/addvehicle',
                                    state: { contact:contactNo }
                                }}>
                                    <button id="add-new-vehicle-btn" className=" bg-gradient-to-r from-red-400 to-yellow-500 w-48 h-12 rounded-xl text-white text-xl mt-2 mr-8 hidden">Add New Vehicle</button>
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
