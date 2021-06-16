import React, { useState } from 'react'
import Signup from '../../pages/Signup'
import FormInput from '../Atoms/FormInput'

export default function SignUpForm(props) {

    return (
        <div className="flex flex-col items-center p-7 ">
            <div className="lg:flex">
                <div className="">
                    <FormInput lable=" First Name" value={props.firstname} />

                </div>
                <div className="lg:ml-24">
                    <FormInput lable=" Last Name" value={props.lastname} />

                </div>
            </div>

            <div className="lg:flex mt-7">
                <div className="">
                    <FormInput lable=" Email " id="email" value={props.email} />

                </div>
                <div className="lg:ml-24 mt-0">
                    <FormInput lable=" Tel. No." value={props.contactNo} />

                </div>

            </div>
            <div>
                <div className="lg:flex mt-7">
                    <div className="">
                        <FormInput lable=" Address Line 1 " />

                    </div>
                    <div className="lg:ml-24 mt-0">
                        <FormInput lable="Address Line 2 " />

                    </div>

                </div>
                <div className="lg:flex mt-7">
                    <div className="">
                        <FormInput lable="City" />

                    </div>
                </div>

            </div>
            <div>
                <div className="lg:flex mt-7">
                    <div className="">
                        <FormInput lable="Username" />

                    </div>
                </div>
                <div className="lg:flex mt-7">
                    <div className="">
                        <FormInput lable="Password" />

                    </div>
                    <div className="lg:ml-24 mt-0">
                        <FormInput lable="Re-check Password" />

                    </div>

                </div>

            </div>
        </div>
    )
}
