import { Tab } from '@headlessui/react'
import React from 'react'
// import Logo from '/imgs/Logo.png'
export default function Invoice() {
    return (
        <div className="w-screen flex flex-col items-center justify-center font-primary  ">
                <div className="w-5/12 flex flex-col items-center justify-evenly bg-white shadow-lg p-5 rounded-lg relative ">
                    <div className="flex w-full justify-evenly items-baseline z-10 ">
                        <div className="space-y-3">
                            <h1 className="font-bold text-lg ">Invoice To :- </h1>
                            <p>Dumidu Kasun</p>
                            <p>388/53 hospital road</p>
                            <p>Weyangoda</p>
                            <p>005509830</p>
                        </div>
                        <div className="space-y-3">
                            <img src="/imgs/Logo.png" className="w-44 mr-5" />
                            <h1 className="font-bold text-5xl ">INVOICE</h1>
                            <table className="w-44">
                                <tr>
                                    <td>Invoice no :-</td>
                                    <td>12345</td>
                                </tr>
                                <tr>
                                    <td>Date :-</td>
                                    <td>2021/3/3</td>
                                </tr>
                            </table>
                        </div>

                    </div>
                    <div className=" w-2/3 flex flex-col justify-center items-center my-10 z-10  p-5 backdrop-filter backdrop-blur-xl  ">
                        <table className="w-10/12 text-left">
                            <tr>
                                <th></th>
                                <th className="font-light">Description</th>
                                <th className="font-light">Price</th>
                            </tr>
                            <tr>
                                <td className="text-lg font-bold">Labour/Services</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Engine oil Service</td>
                                <td>Rs 2500.00</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Vehicle Wash</td>
                                <td>Rs 1521.00</td>
                                
                            </tr>
                            <tr>
                                <td></td>
                                <td>Vaccume</td>
                                <td>Rs 400.00</td>

                            </tr>
                            <br />
                            <tr>
                                <td className="text-lg font-bold">Materials/Parts</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Engine oil Service</td>
                                <td>Rs 2500.00</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Vehicle Wash</td>
                                <td>Rs 1521.00</td>
                                
                            </tr>
                            <tr>
                                <td></td>
                                <td>Vaccume</td>
                                <td>Rs 400.00</td>

                            </tr>
                            <br/>
                            <tr>
                                <td colSpan="2" className="font-semibold text-center"> Total</td>
                                <td>Rs 400.00</td>

                            </tr>
                            
                        </table>
                        
                    </div>
                    <div className=" w-5/12 h-full bg-gradient-to-br from-Secondary-0 to-primary-0 absolute top-0 left-0 z-0">

                    </div>
                </div>
        </div>
    )
}
