import React, { useState, useEffect } from 'react'
import SideNavBar from '../../components/Moleculars/stockKeeper/SideNavBar'
import TopContainer from '../../components/Atoms/serviceStation/TopContainer'
import ItemContainer3 from '../../components/Atoms/stockKeeper/ItemContainer3'
import SubSectionHeading from '../../components/Atoms/serviceStation/SubSectionHeading'
import CategorySelectNavBarMol from '../../components/Moleculars/stockKeeper/CategorySelectNavBarMol'
import AppointmentContainer from '../../components/Atoms/serviceStation/AppointmentContainer'
import Register from '../../components/Atoms/serviceStation/Register'
import ButtonProps from '../../components/Atoms/stockKeeper/ButtonProps'
import axios from 'axios'
import ButtonRedProps from '../../components/Atoms/stockKeeper/ButtonRedProps'
import { getCookie } from '../../jsfunctions/cookies'
import PopupItemDetails from '../../components/Moleculars/stockKeeper/PopupItemDetails'

export default function StockQuantity() {
    const [itemCategory, setitemCategory] = useState(0);
    const [result, setresult] = useState([]);
    const [show, setshow] = useState("hidden");
    const [output, setoutput] = useState({itemName:"",itemNo:"",stock:"",price:"",reorderLevel:""});

    var config={
        header:{
            'Authorization': 'Bearer ' + getCookie('token'),
        }
    }

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
                console.log("error showdetails");
            })
    }

    function getByName(e) {
        if (e.target.value == "") {
            axios.get(`${process.env.REACT_APP_API_BASE_URL}/inventory/items`)
            .then(res => {
                setresult(res.data);
                setshow("block");
                console.log(result);
            }
            ).catch(err => {
                console.log(err);
                setresult([]);
                console.log("error getByName");
            })
            // setshow("hidden");
            // setresult(res.data);
            // setshow("block");
            return;
        }
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/inventory/searchitembyname/${e.target.value}`)
            .then(res => {
                setresult(res.data);
                setshow("block");
                console.log(result);
            }
            ).catch(err => {
                console.log(err);
                setresult([]);
                console.log("error search by name");
            })
    }
    
useEffect(() => {
    
    
            axios.get(`${process.env.REACT_APP_API_BASE_URL}/inventory/items`)
            .then(res => {
                setresult(res.data);
                setshow("block");
                console.log(result);
            }
            ).catch(err => {
                console.log(err);
                setresult([]);
                console.log("error use effect");
            })
            // setshow("hidden");
            // setresult(res.data);
            // setshow("block");

    

}, [])

useEffect(() => {
    console.log(itemCategory);
    console.log(`${process.env.REACT_APP_API_BASE_URL}/inventory/searchitembycategory/${itemCategory}`);
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/inventory/searchitembycategory/${itemCategory}`, config)
        .then(function (response) {
            console.log(response.data);
            setresult(response.data);
            console.log("Response data printed");
        }).catch(err => {
            console.log(err);
            setresult([]);
            console.log("error use effect 2");
        })
}, [itemCategory])

    return (
        <div className="relative bg-Background-0 h-screen">
            <div className="flex flex-row">
                <div>
                    <SideNavBar />
                </div>
                <div className="w-full flex flex-col xl:ml-40">
                        <div className="">
                            <TopContainer heading1="Stock" heading2="Stock Keeper" addnewbtntext="Add New" path="addnew" />
                        </div>
                    <div className="h-full flex items-center justify-center mx-2 ">
                        <div className="h-full w-10/12 py-8">
                            <div className=" flex">
                                        <div className="p-2 float-left flex">
                                            {/* <FormInput lable=" First Name" value={props.firstname} onchange={props.onchangefirstname}/> */}
                                            <h1 className="font-primary mt-2 mb-4 text-xl font-semibold">Item Name</h1>
                                            <input type="text" name="item" id="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0 ml-10" onChange={getByName}
                                            />
                                        </div>
                                        <div>
                                            {/* <PopupItemDetails/> */}
                                        </div>
                                        {/* <div className="h-auto z-20 ">
                                            <ul class={`bg-white border border-gray-100 w-full mt-12 ${show} `} >
                                                {result.map(item => (<li class="pl-1 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900" onClick={showdetails} id={item.itemNo} >
                                                    {item.itemName}
                                                </li>))}
                                                {(result.length == 0) ? ("Item Not found. Please Add New Item!") : ("")}
                                            </ul>
                                        </div> */}
                                    
                            </div>
                            <div className=" flex">
                                <div className="ml-10 font-primary text-xl font-semibold">Select Category </div>
                                {/* <div className="ml-80"><ButtonRedProps name="Clear" link={""} /></div> */}
                            </div>
                            <div className="p-2 rounded-lg mt-4 ">
                                <CategorySelectNavBarMol itemCategory={itemCategory} setitemCategory={setitemCategory} />
                            </div>
                            
                            <div className="font-primary text-xl">Stock Items</div>
                            <div className="w-full h-3/5 overflow-auto">
                                <div className="h-auto z-20 ">
                                    <ul class={` ${show} `} >
                                                {result.map(item => (<div className="mt-4 border-b-2 pr-9 pl-12 " onChange={showdetails} id={item.itemNo}>
                                                    {/* {item.itemName} */}
                                                     <ItemContainer3 key={item.itemNo} itemName={item.itemName} quantity={item.stock} itemNo={item.itemNo}/>
                                                                                                          
                                                </div>
                                                ))}
                                                {(result.length == 0) ? ("Item Not found. Please Add New Item!") : ("")}
                                    </ul>
                                </div>
                                {/* <div className="mt-4 border-b-2 pr-9 pl-12"><ItemContainer3 itemNo="Piston" quantity="123" link={""} /></div> */}
                                {/* <div className="mt-4 border-b-2 pr-9 pl-12">
                                    <ItemContainer3 itemNo="Brake Pad" quantity="123" link={""} />
                                </div>
                                <div className="mt-4 border-b-2 pr-9 pl-12"><ItemContainer3 itemNo="Piston" quantity="123" link={""} /></div>
                                <div className="mt-4 border-b-2 pr-9 pl-12"><ItemContainer3 itemNo="Cluch Pad" quantity="123" link={""} /></div>
                                <div className="mt-4 border-b-2 pr-9 pl-12"><ItemContainer3 itemNo="Pist" quantity="123" link={""} /></div>
                                <div className="mt-4 border-b-2 pr-9 pl-12"><ItemContainer3 itemNo="Bake Pad" quantity="123" link={""} /></div>
                                <div className="mt-4 border-b-2 pr-9 pl-12"><ItemContainer3 itemNo="Piston" quantity="123" link={""} /></div>
                                <div className="mt-4 border-b-2 pr-9 pl-12"><ItemContainer3 itemNo="Clch Pad" quantity="123" link={""} /></div>
                                <div className="mt-4 border-b-2 pr-9 pl-12"><ItemContainer3 itemNo="Pisto" quantity="123" link={""} /></div>
                                <div className="mt-4 border-b-2 pr-9 pl-12"><ItemContainer3 itemNo="Piston" quantity="123" link={""} /></div>
                                <div className="mt-4 border-b-2 pr-9 pl-12"><ItemContainer3 itemNo="Cluch Pad" quantity="123" link={""} /></div>
                                <div className="mt-4 border-b-2 pr-9 pl-12"><ItemContainer3 itemNo="Pistn" quantity="123" link={""} /></div>
                                <div className="mt-4 border-b-2 pr-9 pl-12"><ItemContainer3 itemNo="Brae Pad" quantity="123" link={""} /></div>
                                <div className="mt-4 border-b-2 pr-9 pl-12"><ItemContainer3 itemNo="Pison" quantity="123" link={""} /></div>
                                <div className="mt-4 border-b-2 pr-9 pl-12"><ItemContainer3 itemNo="Cluch Pad" quantity="123" link={""} /></div>
                                <div className="mt-4 border-b-2 pr-9 pl-12"><ItemContainer3 itemNo="on" quantity="123" link={""} /></div> */}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
