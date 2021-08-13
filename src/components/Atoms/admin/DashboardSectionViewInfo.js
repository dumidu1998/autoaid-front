import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

import React from 'react'

export default function DashboardSectionViewInfo() {
    return (
        <div>
                <Popup trigger={ < button className="bg-blue-600 w-28 h-10 text-sm font-bold font-primary rounded-md text-white ">Vehicle Info</button>} position="right center">
                    <div className="w-96 h-56 bg-Background- ">
                       <div className="flex flex-col ">
                            <div className="bg-white shadow-xl rounded-xl w-48 h-16 flex justify-center items-center mt-1 ">
                                    required Vehicle info
                            </div>
                            <div className="bg-white shadow-xl rounded-xl w-48 h-16 flex justify-center items-center mt-3 ">
                                    required Vehicle info
                            </div>
                            <div className="bg-white shadow-xl rounded-xl w-48 h-16 flex justify-center items-center mt-3 ">
                                    required Vehicle info
                            </div>
                       </div>
                        {/* <Formik>
                            <Form>
                                <div className="flex flex-col items-center overflow-auto ">

                                   
                                    <div className="flex flex-row">
                                        <div className="flex flex-col mr-2 ml-4 ">
                                            <label htmlFor="firstName" className="font-primary  text-md font-semibold  mt-3">First Name</label>
                                            <Field id="firstName" name="firstName" placeholder="Jane Irish" className=" ml-20 mt-2 rounded-lg shadow-lg w-20 h-10 pl-5" />

                                            <label htmlFor="userName" className="font-primary  text-md font-semibold  mt-3">User Name</label>
                                            <Field id="userName" name="userName" placeholder="Jane" className=" ml-2 rounded-lg shadow-lg w-60 h-10  mt-2 pl-5" />

                                            <label htmlFor="email" className="font-primary  text-md font-semibold  mt-3">Email</label>
                                            <Field id="email" name="email" placeholder="jane@gmail.com" className=" ml-2 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" />
                                        </div>
                                        <div className="flex flex-col">
                                            <label htmlFor="firstName" className="font-primary  text-md font-semibold  mt-3">First Name</label>
                                            <Field id="firstName" name="firstName" placeholder="Jane Irish" className=" ml-2 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" />

                                            <label htmlFor="userName" className="font-primary  text-md font-semibold  mt-3">User Name</label>
                                            <Field id="userName" name="userName" placeholder="Jane" className=" ml-2 rounded-lg shadow-lg w-60 h-10  mt-2 pl-5" />

                                            <label htmlFor="email" className="font-primary  text-md font-semibold  mt-3">Email</label>
                                            <Field id="email" name="email" placeholder="jane@gmail.com" className=" ml-2 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" />
                                        </div>
                                        </div>
                                </div>
                            </Form>
                        </Formik> */}

                    </div>
                </Popup>
            </div> 
    )
}
