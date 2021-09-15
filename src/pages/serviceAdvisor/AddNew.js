import React from 'react'
import AppointmentContainer from '../../components/Atoms/serviceStation/AppointmentContainer'
import ButtonSecond from '../../components/Atoms/serviceStation/ButtonSecond'
import Register from '../../components/Atoms/serviceStation/Register'
import SubSectionHeading from '../../components/Atoms/serviceStation/SubSectionHeading'
import TopContainer from '../../components/Atoms/serviceStation/TopContainer'
import SideNavBar from '../../components/Moleculars/technician/SideNavBar'
import SideNav from '../../components/Moleculars/serviceAdvisor/sideNav'

export default function AddNew() {
    return (
        <div>
            <div className=" bg-Background-0 h-full lg:h-full">
                <div className="flex flex-row">
                    <div className="">
                    <SideNav />
                    </div>
                    <div className="w-full flex flex-col  xl:ml-40">
                        <TopContainer />
                    <div className="h-full flex flex-col items-center mt-20">
                        <div className="flex flex-col lg:flex-row mt-5 items-center justify-center">
                            <div className=" float-left">
                                {/* <FormInput lable=" First Name" value={props.firstname} onchange={props.onchangefirstname}/> */}
                                <h1 className="font-primary  text-md font-semibold">Telephone no</h1>
                                <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0"
                                    />
                            </div>
                            <div className="lg:ml-24 lg:mt-6 mt-4 mb-6 lg:mb-0">
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

                    <h1 className="font-primary text-2xl mt-14 flex justify-center lg:justify-start lg:ml-20">Vehicle Details</h1>

                    <div className="h-full flex flex-col items-center mt-12 mb-12">
                        <div className="flex flex-col lg:flex-row mt-5 items-center justify-center mb-4">
                            <div className=" float-left">
                                {/* <FormInput lable=" First Name" value={props.firstname} onchange={props.onchangefirstname}/> */}
                                <h1 className="font-primary  text-md font-semibold">Telephone no</h1>
                                <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0"
                                    />
                            </div>
                            <div className="lg:ml-24 lg:mt-6 lg:mb-0 mt-5 mb-5">
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
