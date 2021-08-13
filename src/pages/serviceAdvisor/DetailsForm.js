import React from 'react'
import TopContainer from '../../components/Atoms/serviceStation/TopContainer'
import SideNav from '../../components/Moleculars/serviceAdvisor/sideNav'
import AdminTopBar from '../../components/Atoms/admin/AdminTopBar'
import { Field, Form, Formik } from 'formik'
import SearchBtnDetailsForm from '../../components/Atoms/SearchBtnDetailsForm'
import Button from '../../components/Atoms/Button'
import DetailFormBtn from '../../components/Atoms/DetailFormBtn'
import DetailFormUpdatebtn from '../../components/Atoms/DetailFormUpdatebtn'



export default function DetailsForm() {
    return (
        <div className=" bg-Background-0">
            <div className="flex flex-row">
                <div className="">
                    <SideNav />
                </div>
                <div className="w-full flex flex-col">
                    {/* <TopContainer heading1="Dashboard" heading2="Service Advisor" addnewbtntext="Add New"/> */}
                    <AdminTopBar name="XXXXXXXXX" roleName="Service Advisor" />
                    <Formik>
                        <Form>
                            <div className="container mx-auto max-w-full">
                                <div className="grid-cols-4 ">
                                    <div className="w-full h-24">
                                        <div className="flex items-center justify-center w-1/2">
                                            <div className="flex flex-col mr-2 ml-16">
                                                <label htmlFor="tepNum" className="font-primary  text-md font-semibold  mt-3">Tel No. </label>
                                                <Field id="tepNum" name="tepNum" placeholder="0779690020" className=" ml-5 mt-2 rounded-lg shadow-lg w-64 h-10 pl-5" />
                                            </div>
                                            <div className="ml-8 mt-12">
                                                <SearchBtnDetailsForm txt="Search"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" w-full h-48 mt-">
                                        <div className="flex flex-col items-center overflow-auto ">
                                            <div className="flex flex-row">
                                                <div className="flex flex-col mr-12 ml-4 w-1/2 ">
                                                    <label htmlFor="firstName" className="font-primary  text-md font-semibold  mt-3">First Name</label>
                                                    <Field id="firstName" name="firstName" placeholder="Jane Irish" className=" ml-5 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" />
                                                        
                                                    <label htmlFor="firstName" className="font-primary  text-md font-semibold  mt-3">Address</label>
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
                                            <DetailFormUpdatebtn txt="Update"/>
                                        </div>
                                        <div className="flex justify-start ml-20  items-center  w-1/2">
                                            <DetailFormBtn txt="Add New"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}
