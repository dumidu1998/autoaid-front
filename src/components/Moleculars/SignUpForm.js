import React from 'react'
import FormInput from '../Atoms/FormInput'

export default function SignUpForm() {
    return (
        <div className="flex flex-col items-center p-7 ">
                <div className="lg:flex">
                    <div className="">
                        <FormInput lable=" First Name"/>

                    </div>
                     <div className="lg:ml-24">
                        <FormInput lable=" Last Name"/>

                    </div>
            </div>

            <div className="lg:flex mt-7">
                    <div className="">
                        <FormInput lable=" Email "/>

                    </div>
                    <div className="lg:ml-24 mt-7">
                        <FormInput lable=" Tel. No."/>

                    </div>

            </div>
            <div>
                <div className="lg:flex mt-7">
                        <div className="">
                            <FormInput lable=" VIN "/>

                        </div>
                        <div className="lg:ml-24 mt-7">
                            <FormInput lable="Engine No"/>

                        </div>

                </div>
                <div className="lg:flex mt-7">
                        <div className="">
                            <FormInput lable="Chassis No. "/>

                        </div>
                </div>

            </div>
            <div>
                <div className="lg:flex mt-7">
                        <div className="">
                            <FormInput lable=" Address Line 1 "/>

                        </div>
                        <div className="lg:ml-24 mt-7">
                            <FormInput lable="Address Line 2 "/>

                        </div>

                </div>
                <div className="lg:flex mt-7">
                        <div className="">
                            <FormInput lable="City"/>

                        </div>
                </div>

            </div>
            <div>
                <div className="lg:flex mt-7">
                        <div className="">
                            <FormInput lable="Username"/>

                        </div>
                </div>
                <div className="lg:flex mt-7">
                        <div className="">
                            <FormInput lable="Password"/>

                        </div>
                        <div className="lg:ml-24 mt-7">
                            <FormInput lable="Re-check Password"/>

                        </div>

                </div>

            </div>
        </div>
    )
}
