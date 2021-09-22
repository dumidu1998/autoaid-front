import React from 'react'
import Button from '../../components/Atoms/Button'
import ButtonRedProps from '../../components/Atoms/stockKeeper/ButtonRedProps'
import AdminSideBar from '../../components/Moleculars/admin/AdminSideBar'


export default function ItemsAprove() {
    return (
        <div className="">
        <div className="md:ml-40 bg-Background-0"><AdminSideBar name="Items Aprove" roleName="Admin" /></div>
            <div className=" w-full absolute  bg-Background-0 h-screen">
                <div className="md:ml-40">
                    <div className="flex flex-col items-center my-10 mr-24 font-primary ml-20 mt-32" >
                            <div className="w-full p-4 bg-white  shadow-md rounded-lg flex items-center justify-evenly  space-x-3 my-3">
                                <div className=" w-4/6 flex flex-col items-center py-4 -mt-10">
                                    <table className="table-auto w-full">
                                        <tr>
                                            <td className="font-bold text-lg">Vehicle No</td>
                                            <td className="font-bold text-lg">Technician</td>
                                            <td className="font-bold text-lg">Section</td>
                                            <td className="font-bold text-lg">Items Name</td>
                                            <td></td>
                                            <td className="font-bold text-lg">Quantity</td>


                                        </tr>
                                        <tr>
                                            <td>CAM-9044</td>
                                            <td>Manthila Bandara</td>
                                            <td>General Repair</td>
                                            <td colSpan="2" className="pr-3">Axel</td>
                                            <td>3</td>

                                        </tr>
                                        
                                    </table>
                                </div>
                                <div className="flex flex-col mt-16 mb-8">
                                    <div>
                                    <p className="font-bold text-lg">Price</p>
                                        <input type="text" className="rounded-lg shadow- mb-3"/>
                                    </div>
                                    <div className="flex space-x-4  justify-center mt-2">
                                        <Button txt="Accept"/>
                                        <ButtonRedProps name="Reject" />
                                    </div>
                                </div>
                            </div>
                    </div>
            </div>
        </div>
        </div>
    )
}
