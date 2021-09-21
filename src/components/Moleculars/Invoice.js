import { Tab } from '@headlessui/react'
import React from 'react'
// import Logo from '/imgs/Logo.png'
export default function Invoice(props) {
    return (
        <div className="w-screen flex flex-col items-center justify-center font-primary  ">
            <div className="w-1/2 flex flex-col items-center justify-evenly bg-white shadow-lg p-5 rounded-lg relative ">
                <div className="flex w-full justify-evenly items-baseline z-10 ">
                    <div className="space-y-3">
                        <h1 className="font-bold text-lg ">Invoice To :- </h1>
                        <p>{props.data.customerName}</p>
                        <p>{props.data.address}</p>
                        <p>{props.data.city}</p>
                        <p>{props.data.mobileNumber}</p>
                    </div>
                    <div className="space-y-3">
                        <img src="/imgs/Logo.png" className="w-44 mr-5" />
                        <h1 className="font-bold text-5xl ">INVOICE</h1>
                        <table className="w-66 ">
                            <tbody>
                                <tr>
                                    <td>Invoice No :- </td>
                                    <td>{props.data.invoiceNumber}</td>
                                </tr>
                                <tr>
                                    <td>Date :- </td>
                                    <td>{props.data.invoiceDate.split(' ')[0]}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className=" w-10/11 flex flex-col justify-center items-center my-10 z-10  p-5 backdrop-filter backdrop-blur-xl  ">
                    <table className="w-full text-left">
                        <tbody>
                            <tr>
                                <th></th>
                                <th className="">Description</th>
                                <th className="">Price</th>
                            </tr>
                            <tr>
                                <td className="text-lg font-bold">Labour/Services</td>
                            </tr>
                            {props.data.services.map(e => (
                                <tr>
                                    <td></td>
                                    <td>{e.repairName.toLocaleString("en", { useGrouping: false, minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                    <td>Rs. {e.price.toLocaleString("en", { useGrouping: false, minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                </tr>
                            ))}
                            <br />
                        </tbody>
                    </table>

                    <table className="w-full text-left">
                        <tbody>
                            <tr>
                                <th></th>
                                <th className=" w-44">Description</th>
                                <th className=" ">Unit Price</th>
                                <th className=" w-20">Quantity</th>
                                <th className="">Total Price</th>
                            </tr>
                            <tr>
                                <td className="text-lg font-bold">Materials/Parts</td>
                            </tr>
                            {props.data.materials.map(e => (
                                <tr>
                                    <td></td>
                                    <td>{e.itemName}</td>
                                    <td>Rs.{e.unitPrice.toLocaleString("en", { useGrouping: false, minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                    <td className="text-center">{e.qty}</td>
                                    <td>Rs. {(e.unitPrice * e.qty).toLocaleString("en", { useGrouping: false, minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                </tr>
                            ))}
                            <br />
                            <tr>
                                <td colSpan="2" className="font-semibold text-center"> Total</td>
                                <td></td>
                                <td></td>
                                <th >Rs. {props.data.amount.toLocaleString("en", { useGrouping: false, minimumFractionDigits: 2, maximumFractionDigits: 2 })}</th>

                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className=" w-5/12 h-full bg-gradient-to-br from-Secondary-0 to-primary-0 absolute top-0 left-0 z-0">

                </div>
            </div>
        </div >
    )
}
