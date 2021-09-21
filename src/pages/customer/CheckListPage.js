import React, { useEffect, useState } from 'react'
import { getCookie } from '../../jsfunctions/cookies'
import SubSectionHeading from '../../components/Atoms/serviceStation/SubSectionHeading'
import TopNav from '../../components/Moleculars/customer/TopNav'
import { Link, useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios';
import { db } from '../../Firebase'


var config = {
    headers: {
        'Authorization': 'Bearer ' + getCookie('token'),
    }
}


export default function CheckListPage() {

    const location = useLocation();
    const [docid, setdocid] = useState('')
    const [data, setdata] = useState({});
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/customer/getdocid/${location.state}`, config).then((res) => {
            setdocid(res.data);
            return res.data
        }).then(e => {
            db.collection('checklist').doc(e).onSnapshot(snapshot => {
                setdata(snapshot.data());
            })
        })

    }, [])

    return (
        <div className="flex flex-col items-center font-primary">
            <TopNav />
            <div className="md:w-1/2 w-full rounded-md shadow-lg my-5 py-5 flex flex-col items-center ">
                <h1 className="font-semibold text-2xl  tracking-wider my-10">Vehicle Items Check List</h1>
                <table className="table-auto w-3/4  text-center ">
                    <tbody>
                        <tr>
                            <th>Service Type</th>
                            <th>Millage</th>
                        </tr>
                        <tr>
                            <td>{data.serviceType}</td>
                            <td>{data.millage} km</td>
                        </tr>
                    </tbody>
                </table>
                <table className="table-auto w-3/4  text-center bg-primary-0 my-10 ">
                    <tbody >
                        <tr >
                            <th>Image 1</th>
                            <th>Image 2</th>
                        </tr>
                        <tr>
                            <td><img src={data.image1} /></td>
                            <td><img src={data.image2} /></td>
                        </tr>
                    </tbody>
                </table>
                <table className="table-auto w-3/4  text-center bg-primary-0 my-10">
                    <tbody>
                        <tr>
                            <th>Image 3</th>
                            <th>Image 4</th>
                        </tr>
                        <tr>
                            <td><img src={data.image3} /></td>
                            <td><img src={data.image4} /></td>
                        </tr>
                    </tbody>
                </table>

                <div className="w-3/4 my-5">
                    <h1 className="font-semibold text-lg  tracking-wide">Items In the Vehicle</h1>

                    {data.document ? < p className=" text-s tracking-wide"> Documents</p> : ''}
                    {data.spare ? < p className=" text-s tracking-wide"> Spare Wheel</p> : ''}
                    {data.tools ? < p className=" text-s tracking-wide"> Tool Set</p> : ''}
                </div>
                <table className="table-auto w-3/4  text-center my-10">
                    <tbody>
                        <tr>
                            <th>Carpet Count</th>
                            <th>Seat Covers</th>
                        </tr>
                        <tr>
                            <td>{data.carpets}</td>
                            <td>{data.seatcovers}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="w-3/4">
                    <h1 className="font-semibold text-lg  tracking-wide">Description</h1>
                    <p className=" text-sm tracking-wide">{data.description == " " ? ' - ' : data.description}</p>
                </div>
            </div>
        </div >
    )
}
