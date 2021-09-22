import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SideNavBar from '../../components/Moleculars/stockKeeper/SideNavBar'
import TopContainer from '../../components/Atoms/serviceStation/TopContainer'
import ItemContainer from '../../components/Atoms/stockKeeper/ItemContainer'
import SubSectionHeading from '../../components/Atoms/serviceStation/SubSectionHeading'
import LowQuantityItems from '../../components/Atoms/stockKeeper/LowQuantityItems'
import { getCookie } from '../../jsfunctions/cookies'
import { ToastContainer, toast } from 'react-toastify';

export default function Dashboard() {
    const [output, setoutput] = useState({ itemName: "", itemNo: "", stock: "", price: "", reorderLevel: "" });
    const [result, setresult] = useState([]);
    const [show, setshow] = useState("hidden");
    const [request, setrequest] = useState([]);
    const [changed, setchanged] = useState(true);


    var config={
        header:{
            'Authorization': 'Bearer ' + getCookie('token'),
        }
    }

    // useEffect(() => {
    //     console.log("test")
    //     axios.get(`${process.env.REACT_APP_API_BASE_URL}/inventory/itemRequestAll`)
    //     .then(res => {
    //         setrequest(res.data);
    //         console.log(request);
    //     }
    //     ).catch(err => {
    //         console.log(err);
    //         setrequest([]);
    //     })
    // }, [])

    function approve(e) {
        console.log(e);
        axios.put(`${process.env.REACT_APP_API_BASE_URL}/inventory/approveItemRequest/${e}`, config)
            .then(res => {
                console.log(res.data);
                setchanged(!changed);
                toast.success(" Approved Successfully");
            }
            ).catch(err => {
                console.log(err);
            })
    }
    function refer(e) {
        console.log(e);
        axios.put(`${process.env.REACT_APP_API_BASE_URL}/inventory/referItemRequest/${e}`, config)
            .then(res => {
                console.log(res.data);
                setchanged(!changed);
                toast.success(" Referred Successfully");
            }
            ).catch(err => {
                console.log(err);
            })
    }


useEffect(() => {
    console.log("test")
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/inventory/itemRequestAll`, config)
        .then(res => {
            setrequest(res.data);
            console.log(res.data);
        }
        ).catch(err => {
            console.log(err);
            setrequest([]);
        })
    
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/inventory/items`, config)
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

    }, [changed])

    return (

        <div className="h-screen w-full relative bg-Background-0">

            <div className="flex">
                <div>
                    <SideNavBar />
                </div>
                <div className="w-full flex flex-col xl:ml-40">
                    <TopContainer heading1="Dashboard" heading2="Stock Keeper" addnewbtntext="Add New" path="addnew" />
                    <div className="h-full w-FULL flex items-center justify-center mx-8 ">
                        <div className="h-full w-5/12 py-8">
                            <SubSectionHeading heading="Item Requests" />
                            <div className="w-full h-full overflow-y-auto">
                                {request.map(item => (
                                    <div className="">
                                        <div className=" w-full h-36 shadow-lg bg-white mt-5 rounded-lg flex items-center justify-center">
                                            <div className="flex flex-row w-10/12 items-center justify-between">
                                                <div>
                                                    <h1 className="my-4 font-bold font-primary text-lg text-black">{item.itemName}</h1>
                                                    <h1 className="my-4 font-bold font-primary text-gray-400">{item.vehicleNumber}</h1>
                                                </div>
                                                <div>
                                                    <h1 className="font-bold font-primary text-2xl text-black">{item.quantity}</h1>
                                                </div>
                                                <div className="">
                                                    <div className="my-4 w-auto h-10 rounded-lg flex items-center justify-center bg-green-600 p-4">
                                                        <button className="text-lg font-primary font-medium text-white" onClick={() => approve(item.requestId)} >Accept</button>
                                                    </div>
                                                    <div className="my-4 w-auto h-10 rounded-lg flex items-center justify-center bg-red-600 p-4">
                                                        <button className="text-lg font-primary font-medium text-white" onClick={() => refer(item.requestId)}>Refer to Admin</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* <ItemContainer itemNo="Piston" parts="25" repair="2" link={""} />
                                <ItemContainer itemNo="Brake Pad" link={""} />
                                <ItemContainer itemNo="Cluch Pad" link={""} />
                                <ItemContainer itemNo="Oil Filter" link={""} />
                                <ItemContainer itemNo="Piston" link={""} />
                                <ItemContainer itemNo="Brake Pad" link={""} />
                                <ItemContainer itemNo="Cluch Pad" link={""} />
                                <ItemContainer itemNo="Oil Filter" link={""} /> */}
                            </div>
                        </div>
                        <div className="h-full w-5/12 py-8 ml-20">
                            <SubSectionHeading heading="Low Quantity Items" />
                            <div className="bg-white w-full rounded-xl shadow-xl py-4 pb-6">
                                <div className="px-4 font-bold border-b-2 text-lg">
                                    <LowQuantityItems itemNo="Item Number" itemName="Item Name" stock="Stock" />
                                </div>
                                <div className="w-full h-84 overflow-auto ">
                                    {/* <ul class={` ${show} `} > */}
                                    {result.map(item => (<div className=" pr-9 pl-12 ">
                                        {(item.stock < (item.reorderLevel / 2)) ?
                                            <div className="mt-4 text-red-600 text-sm font-semibold"><LowQuantityItems itemNo={item.itemNo} itemName={item.itemName} stock={item.stock} color="text-red-600" /></div>
                                            :
                                            ("")
                                        }
                                    </div>
                                    ))}

                                    {/* </ul> */}
                                    {/* <div className="mt-4 border-b-2 pr-9 pl-12"><LowQuantityItems itemNo={item.itemNo} itemName={item.itemNo} stock="Completed" /></div> */}
                                    {/* <div className="mt-4 border-b-2 pr-9 pl-12"><LowQuantityItems itemNo="15948" itemName="Brake Pad" stock="On service" /></div>
                                    <div className="mt-4 border-b-2 pr-9 pl-12"><LowQuantityItems itemNo="21356" itemName="Brake Pad" stock="Completed" /></div>*/}
                                    {/* <div className="mt-4 border-b-2 pr-9 pl-12"><LowQuantityItems itemNo="15943" itemName="Brake Pad" stock="On service" /></div>  */}


                                </div>
                                <div className="w-full h-84 overflow-auto ">
                                    {/* <ul class={` ${show} `} > */}
                                    {result.map(item => (<div className=" pr-9 pl-12 ">

                                        {(item.stock < (item.reorderLevel / 2)) ?
                                            ("")
                                            : (item.stock < item.reorderLevel) ?
                                                <div className="mt-4 text-yellow-500 text-sm font-semibold"><LowQuantityItems itemNo={item.itemNo} itemName={item.itemName} stock={item.stock} color="text-red-600" /></div>
                                                :
                                                ("")
                                        }
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
    )

}
