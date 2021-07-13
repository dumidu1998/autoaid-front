import React, { useState } from 'react'
import Signup from '../../pages/Signup'
import FormInput from '../Atoms/FormInput'

export default function SignUpForm(props) {

    return (
        <div className="flex flex-col items-center p-7 ">
            <div className="lg:flex">
                <div className="">
                    {/* <FormInput lable=" First Name" value={props.firstname} onchange={props.onchangefirstname}/> */}
                    <h1 className="font-primary  text-md">  First Name</h1>
                    <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-60 float-right"
                        onChange={(event) => props.onChangefirstname(event.target.value)}
                        value={props.firstname} />
                </div>
                <div className="lg:ml-24">
                    {/* <FormInput lable=" Last Name" value={props.lastname} /> */}
                    <h1 className="font-primary  text-md">  Last Name</h1>
                    <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-60 float-right" value={props.lastname}
                        onChange={(event) => props.onChangelastname(event.target.value)} />
                </div>
            </div>

            <div className="lg:flex mt-7">
                <div className="">
                    {/* <FormInput lable=" Email " id="email" value={props.email} /> */}
                    <h1 className="font-primary  text-md">  Email</h1>
                    <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-60 float-right" value={props.email}
                        onChange={(event) => props.onChangeemail(event.target.value)} />

                </div>
                <div className="lg:ml-24 mt-0">
                    {/* <FormInput lable=" Tel. No." value={props.contactNo} /> */}
                    <h1 className="font-primary  text-md">  Mobile No.</h1>
                    <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-60 float-right" value={props.contactno}
                        onChange={(event) => props.onChangecontact(event.target.value)} />
                </div>

            </div>
            <div>
                <div className="lg:flex mt-7">
                    <div className="">
                        {/* <FormInput lable=" Address Line 1 " /> */}
                        <h1 className="font-primary  text-md">  Address Line 1</h1>
                        <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-60 float-right" value={props.addl1} />
                    </div>
                    <div className="lg:ml-24 mt-0">
                        {/* <FormInput lable="Address Line 2 " /> */}
                        <h1 className="font-primary  text-md">  Address Line 2</h1>
                        <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-60 float-right" value={props.addl2} />
                    </div>


                </div>
                <div className="lg:flex mt-7">
                    <div className="">
                        {/* <FormInput lable="City" /> */}
                        <h1 className="font-primary  text-md">  City</h1>
                        <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-60 float-right" value={props.city} />
                    </div>
                </div>

            </div>
            <div>
                <div className="lg:flex mt-7">
                    <div className="">
                        {/* <FormInput lable="Password" /> */}
                        <h1 className="font-primary  text-md">  Password</h1>
                        <input type="password" name="name" className=" rounded-lg shadow-lg h-10 w-60 float-right" value={props.password}
                            onChange={(event) => props.onChangepassword(event.target.value)} />
                    </div>
                    <div className="lg:ml-24 mt-0">
                        {/* <FormInput lable="Re-check Password" /> */}
                        <h1 className="font-primary  text-md">  Confirm Password</h1>
                        <input type="password" name="name" className=" rounded-lg shadow-lg h-10 w-60 float-right" value={props.rcpwd} />
                    </div>


                </div>

            </div>
        </div>
    )
}
