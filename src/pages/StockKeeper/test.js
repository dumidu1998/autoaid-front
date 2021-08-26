import React from 'react'
import AppointmentContainer from '../../components/Atoms/serviceStation/AppointmentContainer'
import ButtonSecond from '../../components/Atoms/serviceStation/ButtonSecond'
import Register from '../../components/Atoms/serviceStation/Register'
import SubSectionHeading from '../../components/Atoms/serviceStation/SubSectionHeading'
import TopContainer from '../../components/Atoms/serviceStation/TopContainer'
import SideNavBar from '../../components/Moleculars/technician/SideNavBar'

export default function test() {
    return (
        <div>
            <div className=" bg-Background-0">
                <div className="flex flex-row">
                    <div className="">

                        <SideNavBar />
                    </div>
                    <div className="w-full flex flex-col">

                        <TopContainer />
                    <div className="h-full flex flex-col items-center mt-20">
                        <div className="lg:flex mt-5 items-center">
                            <div className=" float-left">
                                {/* <FormInput lable=" First Name" value={props.firstname} onchange={props.onchangefirstname}/> */}
                                <h1 className="font-primary  text-md font-semibold">Telephone no</h1>
                                <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0"
                                    />
                            </div>
                            <div className="lg:ml-24">
                                <ButtonSecond/>
                            </div>
                        </div>   
                        <div className="lg:flex mt-5">
                            <div className="">
                                {/* <FormInput lable=" First Name" value={props.firstname} onchange={props.onchangefirstname}/> */}
                                <h1 className="font-primary  text-md font-semibold">  First Name</h1>
                                <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0"
                                    />
                            </div>
                            <div className="lg:ml-24">
                                {/* <FormInput lable=" Last Name" value={props.lastname} /> */}
                                <h1 className="font-primary  text-md font-semibold">  Last Name</h1>
                                <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0" />
                            </div>
                        </div>
                        <div className="lg:flex mt-5">
                            <div className="">
                                {/* <FormInput lable=" First Name" value={props.firstname} onchange={props.onchangefirstname}/> */}
                                <h1 className="font-primary  text-md font-semibold">  Address</h1>
                                <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0"
                                    />
                            </div>
                            <div className="lg:ml-24">
                                {/* <FormInput lable=" Last Name" value={props.lastname} /> */}
                                <h1 className="font-primary  text-md font-semibold"> City</h1>
                                <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0" />
                            </div>
                        </div>
                    </div>

                    <h1>Vehicle Details</h1>
                    <div className="h-full flex flex-col items-center mt-20">
                        <div className="lg:flex mt-5 items-center">
                            <div className=" float-left">
                                {/* <FormInput lable=" First Name" value={props.firstname} onchange={props.onchangefirstname}/> */}
                                <h1 className="font-primary  text-md font-semibold">Telephone no</h1>
                                <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0"
                                    />
                            </div>
                            <div className="lg:ml-24">
                                <ButtonSecond/>
                            </div>
                        </div>   
                        <div className="lg:flex mt-5">
                            <div className="">
                                {/* <FormInput lable=" First Name" value={props.firstname} onchange={props.onchangefirstname}/> */}
                                <h1 className="font-primary  text-md font-semibold">  First Name</h1>
                                <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0"
                                    />
                            </div>
                            <div className="lg:ml-24">
                                {/* <FormInput lable=" Last Name" value={props.lastname} /> */}
                                <h1 className="font-primary  text-md font-semibold">  Last Name</h1>
                                <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0" />
                            </div>
                        </div>
                        <div className="lg:flex mt-5">
                            <div className="">
                                {/* <FormInput lable=" First Name" value={props.firstname} onchange={props.onchangefirstname}/> */}
                                <h1 className="font-primary  text-md font-semibold">  Address</h1>
                                <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0"
                                    />
                            </div>
                            <div className="lg:ml-24">
                                {/* <FormInput lable=" Last Name" value={props.lastname} /> */}
                                <h1 className="font-primary  text-md font-semibold"> City</h1>
                                <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
    )
}
