import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import AppointmentContainer from '../../components/Atoms/serviceStation/AppointmentContainer'
import Register from '../../components/Atoms/serviceStation/Register'
import SubSectionHeading from '../../components/Atoms/serviceStation/SubSectionHeading'
import TopContainer from '../../components/Atoms/serviceStation/TopContainer'
import SideNavBar from '../../components/Moleculars/stockKeeper/SideNavBar'
import ButtonProps from '../../components/Atoms/stockKeeper/ButtonProps'
import axios from 'axios'
import ButtonRedProps from '../../components/Atoms/stockKeeper/ButtonRedProps'
import UpdateQuantity from '../../components/Moleculars/stockKeeper/UpdateQuantity'
import { getCookie } from '../../jsfunctions/cookies';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import DropdownMol from '../../components/Moleculars/stockKeeper/DropdownMol';
import TechniciansDropDown from '../../components/Moleculars/technician/TechniciansDropDown';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function AddNewItem() {
    const [result, setresult] = useState([]);
    const [show, setshow] = useState("hidden");
    const [output, setoutput] = useState({ name: "", itemNo: "", stock: "", price: "", reorderLevel: "", categoryId: "", buyingPrice: "" });
    const [input, setInput] = useState([]);
    const [selectedItem, setselectedItem] = useState(0);
    const [addItem, setaddItem] = useState({ name: "", price: "", reorderLevel: "", stock: "", categoryId: "", buyingPrice: "" });
    const [itemCategory, setitemCategory] = useState([]);
    const [selectedItemCategory, setSelectedItemCategory] = useState();


    var config = {
        header: {
            'Authorization': 'Bearer ' + getCookie('token'),
        }
    }

    function showdetails(id) {
        setselectedItem(id.target.id)
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
        setoutput({ name: "", itemNo: "", stock: "", price: "", reorderLevel: "", categoryId: "", buyingPrice: "" });
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
    // function categorySet(cat) {
    //     setSelectedItemCategory(cat.target.value)
    //     axios.get(`${process.env.REACT_APP_API_BASE_URL}/inventory/itembyid/${id.target.id}`)
    //         .then(res => {
    //             setshow("hidden");
    //             // window.document.getElementById("name")=res.data.itemName;
    //             setoutput(res.data);
    //             console.log(output);
    //         }
    //         ).catch(err => {
    //             console.log(err);
    //         })
    // }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/inventory/categories`)
            .then(function (response) {
                console.log(response.data);
                setitemCategory(response.data);
                setSelectedItemCategory(response.data);
                console.log(itemCategory);
                console.log(selectedItemCategory);
            })
    }, [])

    // function addItem(item) {
    //     setaddItem({name:"",price:"",reorderLevel:"",stock:"",categoryId:""});
    //     if (e.target.value == "") {
    //         setshow("hidden");
    //         return;
    //     }
    //     axios.get(`${process.env.REACT_APP_API_BASE_URL}/inventory/item/${item.target.value}`)
    //         .then(res => {
    //             setaddItem(res.data);
    //             setshow("block");
    //         }
    //         ).catch(err => {
    //             console.log(err);
    //             setaddItem([]);
    //         })
    // }

    return (
        <div>
            <div className=" bg-Background-0">
                <div className="flex flex-row">
                    <div className="">
                        <SideNavBar />
                    </div>
                    <div className="w-full flex flex-col">
                        <TopContainer heading1="Add New Item" heading2="Stock Keeper" addnewbtntext="Add New" />
                        <div className="h-5/6 flex flex-col items-center mt-10">
                            {/* <h1>Search for stock Item</h1> */}
                            <div className="lg:flex mt-5 h-20">
                                <div className=" float-left">
                                    {/* <FormInput lable=" First Name" value={props.firstname} onchange={props.onchangefirstname}/> */}
                                    <h1 className="font-primary  text-md font-semibold">Item Name</h1>
                                    <input type="text" name="item" id="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0" onChange={getByName}
                                    />
                                    <div className="bg-white block ">
                                        <ul class={`bg-white border border-gray-100 w-full mt-12 overflow-y-scroll h-auto max-h-60 z-100 ${show} `} >
                                            {result.map(item => (<li class="pl-1 z-50 pr-2 py-1 border-b-2 bg-white border-gray-100 relative cursor-pointer hover:bg-yellow-50  hover:text-gray-900" onClick={showdetails} id={item.itemNo} >
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

                            {(result.length != 0) ?
                                <Formik
                                    enableReinitialize
                                    initialValues={output}
                                    onSubmit={async (values) => {
                                        await new Promise((r) => setTimeout(r, 500));
                                        alert(JSON.stringify(values, null, 2));
                                    }}
                                >
                                    <Form>
                                        <div className="lg:flex mt-5">

                                            <div className="flex flex-col items-center ">
                                                <div className="flex flex-row">
                                                    <div className="flex flex-col mr-12 ml-4 w-1/2 ">

                                                        <label htmlFor="name" className="font-primary  text-md font-semibold  mt-3">Item Number</label>
                                                        <Field id="name" name="name" placeholder="000" className=" ml-5 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" />

                                                        <label htmlFor="price" className="font-primary  text-md font-semibold  mt-3">Selling Price</label>
                                                        <Field id="price" name="price" placeholder="500" className=" ml-5 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" />
                                                    </div>
                                                    <div className="flex flex-col ml-40 w-1/2">
                                                        <label htmlFor="categoryId" className="font-primary  text-md font-semibold  mt-3 z-10">Category</label>
                                                        <Field id="categoryId" name="categoryId" placeholder="Item" className=" ml-5 rounded-lg shadow-lg w-60 h-10  mt-2 pl-5" />

                                                        <label htmlFor="reorderLevel" className="font-primary  text-md font-semibold  mt-3">Reorder Level</label>
                                                        <Field id="reorderLevel" name="reorderLevel" placeholder="20" className=" ml-5 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-center mt-4" >
                                            <div className="w-auto h-10 rounded-lg flex items-center justify-center p-4 bg-blue-700 mx-6 ">
                                                <button className="text-lg font-primary font-medium text-white" type="submit">Update Details</button>
                                            </div>
                                        </div>

                                        <div className="lg:flex mt-5">

                                            <div className="flex flex-col items-center overflow-auto ">
                                                <div className="flex flex-row">
                                                    <div className="flex flex-col mr-12 ml-4 w-1/2 ">

                                                        <label htmlFor="buyingPrice" className="font-primary  text-md font-semibold  mt-3">Buying Price</label>
                                                        <Field id="buyingPrice" name="buyingPrice" placeholder="000" className=" ml-5 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" />

                                                    </div>
                                                    <div className="flex flex-col ml-40 w-1/2">
                                                        <label htmlFor="stock" className="font-primary  text-md font-semibold  mt-3">Stock</label>
                                                        <Field id="stock" name="stock" placeholder="20" className=" ml-5 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="flex items-center justify-center mt-4" >
                                            <div className="w-auto h-10 rounded-lg flex items-center justify-center p-4 bg-blue-700 mx-6 ">
                                                <button className="text-lg font-primary font-medium text-white" type="submit">Update Stock</button>
                                            </div>
                                        </div>

                                    </Form>

                                </Formik>
                                :
                                <Formik
                                    enableReinitialize
                                    initialValues={output}
                                    onSubmit={async (values) => {
                                        values.categoryId=selectedItemCategory.categoryId;
                                        console.log(values);
                                        var addedId;
                                        axios.post(`${process.env.REACT_APP_API_BASE_URL}/inventory/item`, values, config)
                                            .then((res) => {
                                                console.log(res.data);
                                                addedId = res.data.itemId;
                                                axios.post(`${process.env.REACT_APP_API_BASE_URL}/inventory/updateStock`, {
                                                    itemNo: addedId,
                                                    buyingPrice: values.buyingPrice,
                                                    stock: values.stock
                                                }, config)
                                                    .then((res) => {
                                                        console.log(res.data);
                                                    }).catch((err) => {
                                                        console.log(err);
                                                    })
                                                toast.success(res.data.name + " Added Successfully");
                                            }).catch((err) => {
                                                console.log(err);
                                            })
                                        //    alert(JSON.stringify(values, null, 2));
                                    }}
                                >

                                    <Form>

                                        <div className="lg:flex mt-5">

                                            <div className="flex flex-col items-center ">
                                                <div className="flex flex-row">
                                                    <div className="flex flex-col mr-12 ml-4 w-1/2 ">

                                                        <label htmlFor="name" className="font-primary  text-md font-semibold  mt-3 z-10">Item Name</label>
                                                        <Field id="name" name="name" placeholder="Enter Item" className=" ml-5 rounded-lg shadow-lg w-60 h-10  mt-2 pl-5" />

                                                        <label htmlFor="price" className="font-primary  text-md font-semibold  mt-3">Selling Price</label>
                                                        <Field id="price" name="price" placeholder="Enter Buying Price" className=" ml-5 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" />

                                                        <label htmlFor="buyingPrice" className="font-primary  text-md font-semibold  mt-3">Buying Price</label>
                                                        <Field id="buyingPrice" name="buyingPrice" placeholder="Enter Selling Price" className=" ml-5 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" />

                                                    </div>
                                                    <div className="flex flex-col ml-40 w-1/2">

                                                        <label htmlFor="reorderLevel" className="font-primary  text-md font-semibold  mt-3">Reorder Level</label>
                                                        <Field id="reorderLevel" name="reorderLevel" placeholder="Enter Reorder Level" className=" ml-5 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5"/>

                                                        <label htmlFor="categoryId" className="font-primary  text-md font-semibold  mt-3 z-10">Category</label>
                                                        <div className=" ml-5 rounded-lg shadow-lg ">
                                                            <DropdownMol data={itemCategory} set={setSelectedItemCategory} id="categoryId" name="categoryId" />
                                                        </div>
                                                        
                                                        <label htmlFor="stock" className="font-primary  text-md font-semibold  mt-3">Stock</label>
                                                        <Field id="stock" name="stock" placeholder="Enter Stock" className=" ml-5 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" />

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="flex items-center justify-center " >
                                            <div className="w-min h-10 rounded-lg flex items-center justify-center p-4 bg-green-700 mt-6 ">
                                                <button className="text-lg font-primary font-medium text-white" type="submit">Add</button>
                                            </div>
                                            {/* <div className="mx-4">
                                           <div className="w-auto h-10 rounded-lg flex items-center justify-center p-4 bg-green-700" >
                                                <h1 className="text-lg font-primary font-medium text-white">Add</h1>
                                            </div>
                                            </div> */}
                                        </div>


                                    </Form>

                                </Formik>}


                            {/* <div className="lg:flex mt-5">
                                        <div className="">
                                            
                                            <label className="font-primary  text-md font-semibold" htmlFor="firstName">Item Number</label>
                                            <Field className=" rounded-lg shadow-lg h-10 w-96 float-right border-0" id="firstName" name="firstName" placeholder="000" />
                                            
                                        </div>
                                        <div className="lg:ml-24">
                                            
                                            <label className="font-primary  text-md font-semibold" htmlFor="lastName">Item Name</label>
                                            <Field className=" rounded-lg shadow-lg h-10 w-96 float-right border-0" id="lastName" name="lastName" placeholder="Item" />
                                            
                                        </div>
                                    </div>
                                    <div className="lg:flex mt-5">
                                        <div className="">
                                            
                                            <label className="font-primary  text-md font-semibold" htmlFor="firstName">Selling Price</label>
                                            <Field className=" rounded-lg shadow-lg h-10 w-96 float-right border-0" id="firstName" name="firstName" placeholder="500" />
                                            
                                        </div>
                                        <div className="lg:ml-24">
                                            
                                            <label className="font-primary  text-md font-semibold" htmlFor="lastName">Reorder Level</label>
                                            <Field className=" rounded-lg shadow-lg h-10 w-96 float-right border-0" id="lastName" name="lastName" placeholder="20" />
                                            
                                        </div>
                                    </div> */}

                            {/* <div className="lg:flex mt-5">
                                <div className="">
                                    
                                    <h1 className="font-primary  text-md font-semibold">Item Number</h1>
                                    <input type="text" name="name" value={output.itemNo} className=" rounded-lg shadow-lg h-10 w-96 float-right border-0"
                                    />
                                </div>
                                <div className="lg:ml-24">
                                    
                                    <h1 className="font-primary  text-md font-semibold">Item Name</h1>
                                    <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0" 
                                        value={output.itemName} onChange={event => setInput(event.target.value)}/>
                                </div>
                            </div>
                            <div className="lg:flex mt-5">
                                <div className="">
                                    
                                    <h1 className="font-primary  text-md font-semibold">Price</h1>
                                    <input type="text" name="name" value={output.price} className=" rounded-lg shadow-lg h-10 w-96 float-right border-0"
                                    />
                                </div>
                                <div className="lg:ml-24">
                                    
                                    <h1 className="font-primary  text-md font-semibold">Stock</h1>
                                    <input type="text" name="name" value={output.stock} className=" rounded-lg shadow-lg h-10 w-96 float-right border-0" />
                                </div>
                            </div>
                            <div className="lg:flex mt-5">
                                <div className="">
                                    
                                    <h1 className="font-primary  text-md font-semibold">Category</h1>
                                    <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-96 float-right border-0"
                                    />
                                </div>
                                <div className="lg:ml-24">
                                    
                                    <h1 className="font-primary  text-md font-semibold">Reorder Level</h1>
                                    <input type="text" name="name" value={output.reorderLevel} className=" rounded-lg shadow-lg h-10 w-96 float-right border-0" />
                                </div>
                            </div>
                            
                            <div className="flex justify-between mt-6">
                                <div className="mx-4"><ButtonProps name="Add" color="bg-green-600" /></div>
                                <div className="mx-4"><ButtonProps name="Update" color="bg-blue-700" /></div>
                            </div> */}

                        </div>
                        {/* <div className="mx-8 "><UpdateQuantity itemName={output.itemName} quantity="123" price="100" link={""} /></div>    */}
                    </div>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover

                    />
                </div>
            </div>
        </div >
    )
}
