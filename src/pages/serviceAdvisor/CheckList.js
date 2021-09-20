import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import ButtonSecondary from '../../components/Atoms/ButtonSecondary'
import TopContainer from '../../components/Atoms/serviceStation/TopContainer'
import CameraContainer from '../../components/Moleculars/serviceAdvisor/CameraContainer'
import SideNav from '../../components/Moleculars/serviceAdvisor/sideNav'
import { db } from '../../Firebase'
import { getCookie } from '../../jsfunctions/cookies'
import { useHistory } from 'react-router'

var config = {
    headers: {
        'Authorization': 'Bearer ' + getCookie('token'),
    }
}
export default function CheckList() {
    const history = useHistory();
    const [repairID, setrepairID] = useState(0);
    const [img1, setimg1] = useState('')
    const [img2, setimg2] = useState('')
    const [img3, setimg3] = useState('')
    const [img4, setimg4] = useState('')
    const [serviceType, setserviceType] = useState("");
    const [millage, setmillage] = useState('');
    const [documents, setdocuments] = useState(false)
    const [spare, setspare] = useState(false)
    const [tools, settools] = useState(false)
    const [carpets, setcarpets] = useState(0)
    const [seatcovers, setseatcovers] = useState(0)
    const [description, setdescription] = useState(' ')

    function upload() {
        if (millage == '') {
            toast.error('❌ Please Enter the Millage');
            return 0;
        }
        if (serviceType == '') {
            toast.error('❌ Please Select the Service Type');

            return 0;
        }
        if (img1 == '' || img2 == '' || img3 == '' || img4 == '') {
            toast.error('❌ Please Take All Photoes');
            return 0;
        }

        var data = {
            image1: img1,
            image2: img2,
            image3: img3,
            image4: img4,
            serviceType: serviceType,
            millage: millage,
            documents: documents,
            spare: spare,
            tools: tools,
            carpets: carpets,
            seatcovers: seatcovers,
            description: description
        }

        console.log(data);

        db.collection('checklist').add(data).then(function (ref) {
            console.log(ref.id);
            //TODO repair Id 
            axios.put(`${process.env.REACT_APP_API_BASE_URL}/advisor/addchecklist`, { repairId: 1, fbdocid: ref.id, repairType: serviceType == "REGULAR SERVICE" ? "RSERVICE" : serviceType, millage: millage }, config)
                .then(e => {
                    //TODO redirect

                }).catch(function (error) {
                    //
                    toast.error('❌ Error Occurred!!');
                })
        }).catch(function (error) {
            toast.error('❌ Error Occurred!!');
        })
    }

    useEffect(() => {

    }, [])

    return (
        <div className="bg-Background-0 font-primary ">
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="flex flex-row">
                <SideNav />
                <div className="w-full flex flex-col xl:ml-40">
                    <TopContainer heading1="Dashboard" heading2="Service Advisor" addnewbtntext="Add New" path="/serviceadvisor/detailsform" />
                    <div className="w-full  flex justify-center items-center my-10">
                        <form className="space-y-5 w-10/12 bg-white py-10 rounded-lg">
                            <h1 className="text-center text-xl font-bold">Vehicle Checklist</h1>
                            <div className="flex justify-evenly space-x-5">
                                <div>
                                    <p>Current Millage</p>
                                    <input type="number" min="0" value={millage} onChange={e => setmillage(e.target.value)} className=" border-0 rounded-lg shadow-lg" />

                                </div>
                            </div>
                            <div className="flex justify-evenly space-x-5">
                                <div>
                                    <label className="mr-3">Regular Service</label>
                                    <input type="radio" name="vehicleServiceType" className=" border rounded-full shadow-lg w-8 h-8" onClick={() => setserviceType("REGULAR SERVICE")} />
                                </div>

                                <div>
                                    <label className="mr-3">Repair</label>
                                    <input type="radio" name="vehicleServiceType" className=" border rounded-full shadow-lg w-8 h-8" onClick={() => setserviceType("REPAIR")} />
                                </div>

                                <div>
                                    <label className="mr-3">Washing Only</label>
                                    <input type="radio" name="vehicleServiceType" className=" border rounded-full shadow-lg w-8 h-8" onClick={() => setserviceType("WASHING")} />
                                </div>
                            </div>


                            <div className="flex justify-evenly">
                                <div className="flex flex-col items-center">
                                    {/* <div className="w-72 h-44 bg-white border flex items-center justify-center text-3xl font-bold text-gray-400">Front View</div> */}
                                    <CameraContainer setter={setimg1} />
                                    {/* <button type="button" className="px-5 py-2 my-3 rounded-lg shadow-lg bg-primary-0 font-semibold text-white">Take Photo</button> */}

                                </div>
                                <div className="flex flex-col items-center">
                                    {/* <div className="w-72 h-44 bg-white border flex items-center justify-center text-3xl font-bold text-gray-400">Rear View</div> */}
                                    <CameraContainer setter={setimg2} />
                                    {/* <button type="button" className="px-5 py-2 my-3 rounded-lg shadow-lg bg-primary-0 font-semibold text-white">Take Photo</button> */}

                                </div>

                            </div>
                            <div className="flex justify-evenly">
                                <div className="flex flex-col items-center">
                                    {/* <div className="w-72 h-44 bg-white border flex items-center justify-center text-3xl font-bold text-gray-400">Side View</div> */}
                                    <CameraContainer setter={setimg3} />
                                    {/* <button type="button" className="px-5 py-2 my-3 rounded-lg shadow-lg bg-primary-0 font-semibold text-white">Take Photo</button> */}

                                </div>
                                <div className="flex flex-col items-center">
                                    {/* <div className="w-72 h-44 bg-white border flex items-center justify-center text-3xl font-bold text-gray-400">Side View</div> */}
                                    <CameraContainer setter={setimg4} />
                                    {/* <button type="button" className="px-5 py-2 my-3 rounded-lg shadow-lg bg-primary-0 font-semibold text-white">Take Photo</button> */}

                                </div>

                            </div>
                            <div className="flex flex-col items-center w-1/2  space-y-4 mt-10 p-5">
                                <div className="flex justify-between w-1/2 items-center">
                                    <label className="mr-3">Documents</label>
                                    <input type="checkbox" min="0" className=" border rounded-full shadow-lg w-8 h-8" onChange={e => setdocuments(e.target.checked)} />

                                </div>
                                <div className="flex justify-between w-1/2 items-center">
                                    <label className="mr-3">Spare Wheel</label>
                                    <input type="checkbox" min="0" className=" border rounded-full shadow-lg w-8 h-8" onChange={e => setspare(e.target.checked)} />

                                </div>
                                <div className="flex justify-between w-1/2 items-center">
                                    <label className="mr-3">Tool Set</label>
                                    <input type="checkbox" min="0" className=" border rounded-full shadow-lg w-8 h-8" onChange={e => settools(e.target.checked)} />

                                </div>

                            </div>


                            <div className="flex justify-evenly space-x-5">
                                <div>
                                    <p>Carpert count</p>
                                    <input type="number" min="0" value={carpets} onChange={e => setcarpets(e.target.value)} className="  border-0 rounded-lg shadow-lg" />

                                </div>
                                <div>
                                    <p>Seat Cover count</p>
                                    <input type="number" min="0" value={seatcovers} onChange={e => setseatcovers(e.target.value)} className=" border-0 rounded-lg shadow-lg" />

                                </div>

                            </div>


                            <div className="flex flex-col items-center">
                                <p className=" text-left">Description</p>
                                <input type="text" value={description} onChange={e => setdescription(e.target.value)} className="w-3/4 h-32 border rounded-lg shadow-lg" />

                            </div>
                            <div className="w-full flex justify-center text-white">
                                <button type="button" onClick={upload} className="w-52 h-10 bg-forth-0 rounded-md flex items-center justify-center hover:shadow-lg">
                                    <h1 className=" font-primary">Proceed</h1>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
