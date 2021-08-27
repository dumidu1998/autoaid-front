import React, { useState } from 'react'
import SideNavBar from '../../components/Moleculars/stockKeeper/SideNavBar'
import TopContainer from '../../components/Atoms/serviceStation/TopContainer'
import ItemContainer3 from '../../components/Atoms/stockKeeper/ItemContainer3'
import SubSectionHeading from '../../components/Atoms/serviceStation/SubSectionHeading'
import CategorySelectNavBarMol from '../../components/Moleculars/stockKeeper/CategorySelectNavBarMol'
import AppointmentContainer from '../../components/Atoms/serviceStation/AppointmentContainer'
import Register from '../../components/Atoms/serviceStation/Register'
import ButtonProps from '../../components/Atoms/stockKeeper/ButtonProps'
import axios from 'axios'

export default function StockQuantity() {
    const [result, setresult] = useState([]);
    const [show, setshow] = useState("hidden");

    function showdetails(id) {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/inventory/itembyid/${id.target.id}`)
            .then(res => {
                setshow("hidden");
            }
            ).catch(err => {
                console.log(err);
            })
    }

    function getByName(e) {
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
        <div className="relative bg-Background-0">
            <div className="flex flex-row">
                <div>
                    <SideNavBar />
                </div>
                <div className="w-full flex flex-col">
                    <TopContainer heading1="Stock" heading2="Stock Keeper" addnewbtntext="Add New" path="addnew" />
                    <div className="h-full flex items-center justify-center mx-2 ">
                        <div className="h-full w-10/12 py-8">
                            <div className="p-2 float-left">
                                    {/* <FormInput lable=" First Name" value={props.firstname} onchange={props.onchangefirstname}/> */}
                                    <h1 className="font-primary mb-8 text-xl font-semibold">Item Name</h1>
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
                            <div className="ml-10 font-primary text-xl font-semibold">Select Category </div>
                            <div><ButtonProps name="Clear" link={""} /></div>
                            <div className="ml-16 p-2 rounded-lg mt-4 w-full">
                                <CategorySelectNavBarMol />
                            </div>
                            
                            <div className="font-primary text-xl">Stock Items</div>
                            <div className="w-full h-3/5 overflow-auto">
                                <div className="mt-4 border-b-2 pr-9 pl-12"><ItemContainer3 itemNo="Piston" quantity="123" link={""} /></div>
                                <div className="mt-4 border-b-2 pr-9 pl-12"><ItemContainer3 itemNo="Brake Pad" quantity="123" link={""} /></div>
                                <div className="mt-4 border-b-2 pr-9 pl-12"><ItemContainer3 itemNo="Piston" quantity="123" link={""} /></div>
                                <div className="mt-4 border-b-2 pr-9 pl-12"><ItemContainer3 itemNo="Cluch Pad" quantity="123" link={""} /></div>
                                <div className="mt-4 border-b-2 pr-9 pl-12"><ItemContainer3 itemNo="Piston" quantity="123" link={""} /></div>
                                <div className="mt-4 border-b-2 pr-9 pl-12"><ItemContainer3 itemNo="Brake Pad" quantity="123" link={""} /></div>
                                <div className="mt-4 border-b-2 pr-9 pl-12"><ItemContainer3 itemNo="Piston" quantity="123" link={""} /></div>
                                <div className="mt-4 border-b-2 pr-9 pl-12"><ItemContainer3 itemNo="Cluch Pad" quantity="123" link={""} /></div>
                                <div className="mt-4 border-b-2 pr-9 pl-12"><ItemContainer3 itemNo="Piston" quantity="123" link={""} /></div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
