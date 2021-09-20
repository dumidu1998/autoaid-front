import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SideNavBar from '../../components/Moleculars/stockKeeper/SideNavBar'
import TopContainer from '../../components/Atoms/serviceStation/TopContainer'
import ItemContainer from '../../components/Atoms/stockKeeper/ItemContainer'
import SubSectionHeading from '../../components/Atoms/serviceStation/SubSectionHeading'
import LowQuantityItems from '../../components/Atoms/stockKeeper/LowQuantityItems'
import { getCookie } from '../../jsfunctions/cookies'

export default function Dashboard() {
    const [output, setoutput] = useState({itemName:"",itemNo:"",stock:"",price:"",reorderLevel:""});
    const [result, setresult] = useState([]);
    const [show, setshow] = useState("hidden");
    const [request, setrequest] = useState([]);

    useEffect(() => {
    
    
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/inventory/itemRequestAll`)
        .then(res => {
            setrequest(res.data);
            // setshow("block");
            console.log(request);
        }
        ).catch(err => {
            console.log(err);
            setrequest([]);
        })
        // setshow("hidden");
        // setresult(res.data);
        // setshow("block");



}, [])

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

    return (
        <div className="relative bg-Background-0">
            <div className="flex flex-row">
                <div>
                    <SideNavBar />
                </div>
                <div className="w-full flex flex-col xl:ml-40">
                    <TopContainer heading1="Dashboard" heading2="Stock Keeper" addnewbtntext="Add New" path="addnew" />
                    <div className="h-full w-FULL flex items-center justify-center mx-16 ">
                        <div className="h-full w-5/12 py-8">
                            <SubSectionHeading heading="Item Requests" />
                            <div className="w-full h-3/5 overflow-auto">
                                <ItemContainer itemNo="Piston" parts="25" repair="2" link={""} />
                                <ItemContainer itemNo="Brake Pad" link={""} />
                                <ItemContainer itemNo="Cluch Pad" link={""} />
                                <ItemContainer itemNo="Oil Filter" link={""} />
                                <ItemContainer itemNo="Piston" link={""} />
                                <ItemContainer itemNo="Brake Pad" link={""} />
                                <ItemContainer itemNo="Cluch Pad" link={""} />
                                <ItemContainer itemNo="Oil Filter" link={""} />
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
                                                {(item.stock<(item.reorderLevel/2)) ?
                                                    <div className="mt-4 text-red-600 text-sm font-semibold"><LowQuantityItems itemNo={item.itemNo} itemName={item.itemName} stock={item.stock} color="text-red-600"/></div>
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
                                            
                                                {(item.stock<(item.reorderLevel/2)) ?
                                                    ("")
                                                :(item.stock<item.reorderLevel) ?
                                                    <div className="mt-4 text-yellow-500 text-sm font-semibold"><LowQuantityItems itemNo={item.itemNo} itemName={item.itemName} stock={item.stock} color="text-red-600"/></div>
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
        </div>
    )

}
