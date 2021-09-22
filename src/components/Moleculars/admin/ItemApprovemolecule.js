import axios from 'axios';
import React, { useState } from 'react'
import { getCookie } from '../../../jsfunctions/cookies';
import ButtonRedProps from '../../Atoms/stockKeeper/ButtonRedProps';

var config = {
    headers: {
        'Authorization': 'Bearer ' + getCookie('token'),
    }
}
export default function ItemApprovemolecule({ e, changer }) {

    function submit(f) {

        if (price == 0) { alert("Price Cannot be Zero!!"); return; }

        var data = {
            requestId: id,
            status: 'APPROVED',
            price: price
        }

        axios.put(`${process.env.REACT_APP_API_BASE_URL}/admin/approvereject`, data, config)
            .then((res) => {
                alert("Accepted!!")
                changer(e => !e);
            })


    }

    function reject(f) {
        var data = {
            requestId: id,
            status: 'DENIED',
            price: 0
        }
        axios.put(`${process.env.REACT_APP_API_BASE_URL}/admin/approvereject`, data, config)
            .then((res) => {
                alert("rejected!");
                changer(e => !e);
            })

    }

    const [id, setid] = useState(e.requestId)
    const [price, setprice] = useState(0);

    return (
        <div className="w-full p-4 bg-white  shadow-md rounded-lg flex items-center justify-evenly  space-x-3 my-3">
            <div className=" w-4/6 flex flex-col items-center py-4 -mt-10">
                <table className="table-auto w-full">
                    <tr>
                        <td className="font-bold text-lg">Vehicle No</td>
                        <td className="font-bold text-lg">Technician</td>
                        {/* <td className="font-bold text-lg">Section</td> */}
                        <td className="font-bold text-lg">Items Name</td>
                        <td></td>
                        <td className="font-bold text-lg">Quantity</td>
                    </tr>
                    <tr>
                        <td>{e.vehicleNo}</td>
                        <td>{e.techieName}</td>
                        {/* <td>General Repair</td> */}
                        <td colSpan="2" className="pr-3">{e.itemName}</td>
                        <td>{e.qty}</td>
                    </tr>
                </table>
            </div>
            <div className="flex flex-col mt-16 mb-8">
                <div>
                    <p className="font-bold text-lg">Total Price</p>
                    <input type="number" value={price} onChange={e => setprice(e.target.value)} className="rounded-lg shadow- mb-3" />
                </div>
                <div className="flex space-x-4  justify-center mt-2">
                    <button onClick={submit} className="w-24 h-10 bg-green-600 text-white text-lg rounded-md flex items-center justify-center hover:shadow-lg"><h1 className=" font-primary">Accept</h1></button>


                    <button className="w-24 h-10 rounded-lg bg-red-700 flex items-center justify-center" onClick={reject}>
                        <h1 className="text-lg font-primary font-medium text-white">Reject</h1>
                    </button>

                </div>
            </div>
        </div>
    )
}
