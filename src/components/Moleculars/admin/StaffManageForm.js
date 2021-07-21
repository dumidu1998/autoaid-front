
import React,{useState}from 'react'
import StaffManageFormTxt from '../../Atoms/admin/StaffManageFormTxt';
import { Formik, Field, Form } from 'formik';

export default function StaffManageForm() {
    
    return (
        <div className="w-full shadow-xl ">
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
                >
                
                <Form>
                    <div className=" bg-white rounded-2xl shadow-2xl  flex justify-between items-center -mt-12 py-9 px-12 mb-4">
                        <div className="flex flex-col">
                            <label htmlFor="firstName" className="font-primary  text-md font-semibold  mt-3">First Name</label>
                            <Field id="firstName" name="firstName" placeholder="Jane Irish" className=" ml-2 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5"/>

                            <label htmlFor="userName" className="font-primary  text-md font-semibold  mt-3">User Name</label>
                            <Field id="userName" name="userName" placeholder="Jane" className=" ml-2 rounded-lg shadow-lg w-60 h-10  mt-2 pl-5"/>
                            
                            <label htmlFor="email" className="font-primary  text-md font-semibold  mt-3">Email</label>
                            <Field id="email" name="email" placeholder="jane@gmail.com" className=" ml-2 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5"/>

                            <label htmlFor="contactNumber" className="font-primary  text-md font-semibold  mt-3">Contact Number</label>
                            <Field id="contactNumber" name="contactNumber" placeholder="0772435678" className=" ml-2 rounded-lg shadow-lg w-60 h-10  mt-2 pl-5"/>
                            
                            <label htmlFor="city" className="font-primary  text-md font-semibold  mt-3">City </label>
                            <Field id="city" name="city" placeholder="Veyangoda" className=" ml-2 rounded-lg shadow-lg w-60 h-10  mt-2 pl-5"/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="lastName" className="font-primary  text-md font-semibold  mt-3">Last Name</label>
                            <Field id="lastName" name="lastName" placeholder="Viniger" className=" ml-2 rounded-lg shadow-lg w-60 h-10  mt-2 pl-5"/>
                            
                            <label htmlFor="role" className="font-primary  text-md font-semibold  mt-3">Role</label>
                            <Field id="role" name="role" placeholder="ADMIN" className=" ml-2 rounded-lg shadow-lg w-60 h-10  mt-2 pl-5"/>
                            
                            <label htmlFor="password" className="font-primary  text-md font-semibold  mt-3">Password</label>
                            <Field id="password" name="password" placeholder="***********" className=" ml-2 rounded-lg shadow-lg w-60 h-10  mt-2 pl-5"/>
                            
                            <label htmlFor="address" className="font-primary  text-md font-semibold  mt-3">Address</label>
                            <Field id="address" name="address" placeholder="16/A Wataddara, Veyangoda" className=" ml-2 rounded-lg shadow-lg w-60 h-32  mt-2 pl-5"/>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

 
