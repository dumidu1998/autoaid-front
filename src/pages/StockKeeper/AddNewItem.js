import React from 'react'
import AppointmentContainer from '../../components/Atoms/serviceStation/AppointmentContainer'
import Register from '../../components/Atoms/serviceStation/Register'
import SubSectionHeading from '../../components/Atoms/serviceStation/SubSectionHeading'
import TopContainer from '../../components/Atoms/serviceStation/TopContainer'
import SideNavBar from '../../components/Moleculars/technician/SideNavBar'
import ButtonProps from '../../components/Atoms/stockKeeper/ButtonProps'

export default function AddNewItem() {
    return (
        <div>
            <div className=" bg-Background-0">
                <div className="flex flex-row">
                    <div className="">

                        <SideNavBar />
                    </div>
                    <div className="w-full flex flex-col">

                        <TopContainer heading1="Add New Item" heading2="Stock Keeper" addnewbtntext="Add New" />
                        <div className="h-full flex flex-col items-center mt-20">
                            <h1>Search for stock Item</h1>
                            <div className="lg:flex mt-5 items-center">
                                <div className=" float-left">
                                    {/* <FormInput lable=" First Name" value={props.firstname} onchange={props.onchangefirstname}/> */}
                                    <h1 className="font-primary  text-md font-semibold">Item Name</h1>
                                    <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0"
                                        />
                                </div>
                                <div className="lg:ml-24 mt-6">
                                    <ButtonProps name="Search"/>
                                </div>
                            </div>   
                            <div className="lg:flex mt-5">
                                <div className="">
                                    {/* <FormInput lable=" First Name" value={props.firstname} onchange={props.onchangefirstname}/> */}
                                    <h1 className="font-primary  text-md font-semibold">Item Number</h1>
                                    <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0"
                                        />
                                </div>
                                <div className="lg:ml-24">
                                    {/* <FormInput lable=" Last Name" value={props.lastname} /> */}
                                    <h1 className="font-primary  text-md font-semibold">Item Name</h1>
                                    <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0" />
                                </div>
                            </div>
                            <div className="lg:flex mt-5">
                                <div className="">
                                    {/* <FormInput lable=" First Name" value={props.firstname} onchange={props.onchangefirstname}/> */}
                                    <h1 className="font-primary  text-md font-semibold">Price</h1>
                                    <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0"
                                        />
                                </div>
                                <div className="lg:ml-24">
                                    {/* <FormInput lable=" Last Name" value={props.lastname} /> */}
                                    <h1 className="font-primary  text-md font-semibold">Stock</h1>
                                    <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0" />
                                </div>
                            </div>
                            <div className="lg:flex mt-5">
                                <div className="">
                                    {/* <FormInput lable=" First Name" value={props.firstname} onchange={props.onchangefirstname}/> */}
                                    <h1 className="font-primary  text-md font-semibold">Category</h1>
                                    <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0"
                                        />
                                </div>
                                <div className="lg:ml-24">
                                    {/* <FormInput lable=" Last Name" value={props.lastname} /> */}
                                    <h1 className="font-primary  text-md font-semibold">Reorder Level</h1>
                                    <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0" />
                                </div>
                            </div>
                            <div className=" justify-center mt-6">
                                <ButtonProps name="Add"/>
                            </div>
                        </div>
                        
                </div>

            </div>
        </div>
        </div>
    )
}
