
import React, { useEffect, useState } from 'react'
import StaffManageFormTxt from '../../Atoms/admin/StaffManageFormTxt';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

export default function StaffManageForm(props) {

    const [initvals, setinitvals] = useState();

    useEffect(() => {
        setinitvals(props.staffdetails);
    }, [props.staffdetails])


    return (
        <div className="">
            <Formik
                enableReinitialize
                initialValues={initvals}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    axios.post(`${process.env.REACT_APP_API_BASE_URL}/admin/addstaff`, values)
                        .then(function (response) {
                            // handle success
                            //onsole.log(response);
                            props.setadded(!props.added);
                            alert("Admin " + response.data.fisrtName + " with id " + response.data.sid + " Added Sucessfully");

                        })
                        .catch(function (error) {
                            //handle error
                            console.log(error.response.data);
                            alert("error Occured. Please Check data again");
                        })
                        .then(function () {
                            //submit();
                            // always executed

                        });
                }}
            >

                <Form>
                    <div className="flex flex-col items-center">
                   
                    <div className=" bg-white rounded-2xl shadow-2xl  flex justify-between items-center -mt-12 py-9 px-12 mb-4 w-11/12">

                        <div className="flex flex-col">
                            <label htmlFor="firstName" className="font-primary  text-md font-semibold  mt-3">First Name</label>
                            <Field id="firstName" name="firstName" placeholder="Jane Irish" className=" ml-2 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" />

                            <label htmlFor="userName" className="font-primary  text-md font-semibold  mt-3">User Name</label>
                            <Field id="userName" name="userName" placeholder="Jane" className=" ml-2 rounded-lg shadow-lg w-60 h-10  mt-2 pl-5" />

                            <label htmlFor="email" className="font-primary  text-md font-semibold  mt-3">Email</label>
                            <Field id="email" name="email" placeholder="jane@gmail.com" className=" ml-2 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" />

                            <label htmlFor="contactNum" className="font-primary  text-md font-semibold  mt-3">Contact Number</label>
                            <Field id="contactNum" name="contactNum" placeholder="0772435678" className=" ml-2 rounded-lg shadow-lg w-60 h-10  mt-2 pl-5" />

                            <label htmlFor="city" className="font-primary  text-md font-semibold  mt-3">City </label>
                            <Field id="city" name="city" placeholder="Veyangoda" className=" ml-2 rounded-lg shadow-lg w-60 h-10  mt-2 pl-5" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="lastName" className="font-primary  text-md font-semibold  mt-3">Last Name</label>
                            <Field id="lastName" name="lastName" placeholder="Viniger" className=" ml-2 rounded-lg shadow-lg w-60 h-10  mt-2 pl-5" />

                            <label htmlFor="role" className="font-primary  text-md font-semibold  mt-3">Role</label>
                            <Field id="role" name="role" placeholder="ADMIN" className=" ml-2 rounded-lg shadow-lg w-60 h-10  mt-2 pl-5" />

                            <label htmlFor="password" className="font-primary  text-md font-semibold  mt-3">Password</label>
                            <Field id="password" type="password" name="password" placeholder="***********" className=" ml-2 rounded-lg shadow-lg w-60 h-10  mt-2 pl-5" />

                            <label htmlFor="address" className="font-primary  text-md font-semibold  mt-3">Address</label>
                            <Field id="address" name="address" placeholder="16/A Wataddara, Veyangoda" className=" ml-2 rounded-lg shadow-lg w-60 h-32  mt-2 pl-5" />
                        
                        </div>
                      
                        
                    </div>
                    <div className="flex justify-between " >
                        <button className="bg-green-600 w-48 h-12 rounded-xl text-white text-xl mt-2 mr-8" type="submit">Add </button>
                        <button className="bg-blue-600 w-48 h-12 rounded-xl text-white text-xl mt-2 mr-8 ml-8" type="">Update </button>
                        <button className="bg-red-600 w-48 h-12 rounded-xl text-white text-xl mt-2 ml-8" type="">Delete </button>
                    </div>
                    </div>
                </Form>
                
            </Formik>
        </div>
    )
}


