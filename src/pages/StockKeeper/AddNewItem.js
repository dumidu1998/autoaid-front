import React, { useState } from 'react'
import AppointmentContainer from '../../components/Atoms/serviceStation/AppointmentContainer'
import Register from '../../components/Atoms/serviceStation/Register'
import SubSectionHeading from '../../components/Atoms/serviceStation/SubSectionHeading'
import TopContainer from '../../components/Atoms/serviceStation/TopContainer'
import SideNavBar from '../../components/Moleculars/stockKeeper/SideNavBar'
import ButtonProps from '../../components/Atoms/stockKeeper/ButtonProps'
import axios from 'axios'
import ButtonRedProps from '../../components/Atoms/stockKeeper/ButtonRedProps'

export default function AddNewItem() {
    const [result, setresult] = useState([]);
    const [show, setshow] = useState("hidden");
    const [output, setoutput] = useState({itemName:"",itemNo:"",stock:"",price:"",reorderLevel:""});

    function showdetails(id) {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/inventory/itembyid/${id.target.id}`)
            .then(res => {
                setshow("hidden");
                // window.document.getElementById("name")=res.data.itemName;
               setoutput(res.data);
               console.log(output);
            }
            ).catch(err => {
                console.log(err);
            })
    }

    function getByName(e) {
        setoutput({itemName:"",itemNo:"",stock:"",price:"",reorderLevel:""});
        if (e.target.value == "") {
            setshow("hidden");
            return;
        }
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/inventory/searchitembyname/${e.target.value}`)
            .then(res => {
                setresult(res.data);
                setshow("block");
            }
            ).catch(err => {
                console.log(err);
                setresult([]);
            })
    }

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
                                    <input type="text" name="item" id="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0" onChange={getByName}
                                    />
                                    <div className="h-auto z-20 ">
                                        <ul class={`bg-white border border-gray-100 w-full mt-12 ${show} `} >
                                            {result.map(item => (<li class="pl-1 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900" onClick={showdetails} id={item.itemNo} >
                                                {item.itemName}
                                            </li>))}
                                            {(result.length == 0) ? ("Item Not found. Add New Item Below!") : ("")}
                                        </ul>
                                    </div>
                                </div>
                                <div className="lg:ml-24 mt-6">
                                    {/* <ButtonProps name="Search" /> */}
                                </div>
                            </div>
                            <div className="lg:flex mt-5">
                                <div className="">
                                    {/* <FormInput lable=" First Name" value={props.firstname} onchange={props.onchangefirstname}/> */}
                                    <h1 className="font-primary  text-md font-semibold">Item Number</h1>
                                    <input type="text" name="name" value={output.itemNo} className=" rounded-lg shadow-lg h-10 w-96 float-right border-0"
                                    />
                                </div>
                                <div className="lg:ml-24">
                                    {/* <FormInput lable=" Last Name" value={props.lastname} /> */}
                                    <h1 className="font-primary  text-md font-semibold">Item Name</h1>
                                    <input type="text" name="name" value={output.itemName} className=" rounded-lg shadow-lg h-10 w-96 float-right border-0" />
                                </div>
                            </div>
                            <div className="lg:flex mt-5">
                                <div className="">
                                    {/* <FormInput lable=" First Name" value={props.firstname} onchange={props.onchangefirstname}/> */}
                                    <h1 className="font-primary  text-md font-semibold">Price</h1>
                                    <input type="text" name="name" value={output.price} className=" rounded-lg shadow-lg h-10 w-96 float-right border-0"
                                    />
                                </div>
                                <div className="lg:ml-24">
                                    {/* <FormInput lable=" Last Name" value={props.lastname} /> */}
                                    <h1 className="font-primary  text-md font-semibold">Stock</h1>
                                    <input type="text" name="name" value={output.stock} className=" rounded-lg shadow-lg h-10 w-96 float-right border-0" />
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
                                    <input type="text" name="name" value={output.reorderLevel} className=" rounded-lg shadow-lg h-10 w-96 float-right border-0" />
                                </div>
                            </div>
                            {/* <div className=" justify-center mt-6"></div> */}
                            <div className="flex justify-between mt-6">
                                <div className="mx-4"><ButtonProps name="Add" color="bg-blue-700" /></div>
                                <div className="mx-4"><ButtonRedProps name="Update" link={""} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
