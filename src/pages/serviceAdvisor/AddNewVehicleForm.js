import React, { useEffect, useState } from 'react'
import TopContainer from '../../components/Atoms/serviceStation/TopContainer'
import SideNav from '../../components/Moleculars/serviceAdvisor/sideNav'
import AdminTopBar from '../../components/Atoms/admin/AdminTopBar'
import { Field, Form, Formik } from 'formik'
import SearchBtnDetailsForm from '../../components/Atoms/SearchBtnDetailsForm'
import Button from '../../components/Atoms/Button'
import DetailFormBtn from '../../components/Atoms/DetailFormBtn'
import DetailFormUpdatebtn from '../../components/Atoms/DetailFormUpdatebtn'
import axios from 'axios'
import LandingSection6 from '../../components/Organs/LandingSection6'
import { toast, ToastContainer } from 'react-toastify'
import { getCookie } from '../../jsfunctions/cookies'
import AppointmentContainer from '../../components/Atoms/serviceStation/AppointmentContainer'

export default function AddNewVehicleForm() {
    return (
        <div className=" bg-Background-0">
            <div className="flex flex-row">
                <div className="">
                    <SideNav />
                </div>
                <div className="w-full flex flex-col">
                    {/* <TopContainer heading1="Dashboard" heading2="Service Advisor" addnewbtntext="Add New"/> */}
                    <AdminTopBar name="Vehicle Registration" roleName="Service Advisor" />
                    <Formik>
                        <Form id="add-vehicle-form">
                            <div className="w-full h-18 mt-3">
                                <div className="font-primary text-xl flex items-center justify-center w-4/12 mb-2 ">Vehicle 01</div>
                                <div className="flex flex-col items-center overflow-auto ">
                                    <div className="flex flex-row">
                                        <div className="flex flex-col mr-12 ml-4 w-1/2 ">
                                            <label htmlFor="vin" className="font-primary  text-md font-semibold  mt-3">VIN</label>
                                            <Field id="vin" name="vin" placeholder="0938383830123" className=" ml-5 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" />

                                            <label htmlFor="engNo" className="font-primary  text-md font-semibold  mt-3">Engine No.</label>
                                            <Field id="engNo" name="engNo" placeholder="UK9393JWAP7" className=" ml-5 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" />

                                            <label htmlFor="vehicleModel" className="font-primary  text-md font-semibold  mt-3">Vehicle Model</label>
                                            <Field id="vehicleModel" name="vehicleModel" placeholder="SUV" className=" ml-5 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" />
                                        </div>
                                        <div className="flex flex-col ml-40 w-1/2">
                                            <label htmlFor="regNo" className="font-primary  text-md font-semibold  mt-3">Reg No.</label>
                                            <Field id="regNo" name="regNo" placeholder="CAM - 4038" className=" ml-5 rounded-lg shadow-lg w-60 h-10  mt-2 pl-5" />

                                            <label htmlFor="chasisNo" className="font-primary  text-md font-semibold  mt-3">Chasis No</label>
                                            <Field id="chasisNo" name="chasisNo" placeholder="Jane" className=" ml-5 rounded-lg shadow-lg w-60 h-10  mt-2 pl-5" />

                                            <label htmlFor="vType" className="font-primary  text-md font-semibold  mt-3">Vehicle Type</label>
                                            <Field id="vType" name="vType" placeholder="SuV" className=" ml-5 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center  items-center h-18 mt-6">
                                <div className="flex justify-end mr-20  items-center w-1/2">
                                    <DetailFormUpdatebtn txt="Update" />
                                </div>
                                <div className="flex justify-start ml-20  items-center  w-1/2">
                                    <DetailFormBtn txt="Add New" />
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}
