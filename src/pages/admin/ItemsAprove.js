import React from 'react'
import Button from '../../components/Atoms/Button'
import ButtonRedProps from '../../components/Atoms/stockKeeper/ButtonRedProps'
import AdminSideBar from '../../components/Moleculars/admin/AdminSideBar'


export default function ItemsAprove() {
    return (
        <div className="">
        <div className="md:ml-40 bg-Background-0"><AdminSideBar name="Items Aprove" roleName="Admin" /></div>
        <div className=" w-full absolute  bg-Background-0 ">
            <div className="md:ml-40">
            <div className="flex flex-col items-center my-10 mr-24 font-primary " >
                        <div className="w-1/2 bg-white  shadow-md rounded-lg flex items-center justify-evenly  space-x-3 my-3">
                            <div className=" w-4/6 flex flex-col items-center py-4 ">
                                <table className="table-auto w-full">
                                    <tr>
                                        <td className="font-bold text-lg">Vehicle No</td>
                                        <td className="font-bold text-lg">Technician</td>
                                        <td className="font-bold text-lg">Section</td>
                                        <td className="font-bold text-lg">Price</td>

                                    </tr>
                                    <tr>
                                        <td>CAM-9044</td>
                                        <td>Manthila Bandara</td>
                                        <td>General Repair</td>
                                        <td>30,000</td>

                                    </tr>
                                    
                                </table>
                                <table className="table-auto w-full mt-10">
                                    <tr>
                                        <td className="font-bold text-lg">Description</td>
                                        <td></td>
                                        <td className="font-bold text-lg">Phone no</td>

                                    </tr>
                                    <tr>
                                        <td colSpan="2" className="pr-3">Get the most out of your new inbox by quickly and easily marking all of your previously read notifications as done.</td>
                                        <td><a href="tel:0775509830">0775509830</a> </td>

                                    </tr>
                                    
                                </table>

                            </div>
                            <div className="flex space-x-3">
                                <Button txt="Accept"/>
                                <ButtonRedProps name="Reject" />
                            </div>
                        </div>
                        </div>
            </div>
        </div>
        </div>
    )
}
