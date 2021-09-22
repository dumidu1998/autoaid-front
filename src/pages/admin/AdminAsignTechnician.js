import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import AddSlotBtn from '../../components/Atoms/admin/AddSlotBtn';
import SlotNumberCard from '../../components/Atoms/admin/SlotNumberCard';
import AdminSideBar from '../../components/Moleculars/admin/AdminSideBar'
import TechniciansDropDown from '../../components/Moleculars/technician/TechniciansDropDown';
import { getCookie } from '../../jsfunctions/cookies';
import axios from 'axios';

export default function AdminAsignTechnician(props) {
    const [slotInfo, setslotInfo] = useState([]);
    const location = useLocation();
    const name = location.state?.name;
    var config = {
        headers: {
            'Authorization': 'Bearer ' + getCookie('token'),
        }
    }

    const [added, setadded] = useState(true);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/slots/getdetails/${name}`, config)
            .then(function (response) {
                console.log(response.data);
                setslotInfo(response.data);
            })
    }, [added])
    return (
        <div className="">
            <div className="md:ml-40 bg-Background-0"><AdminSideBar name="Slot Manage " roleName="Admin" /></div>
            <div className=" w-full absolute  bg-Background-0 ">
                <div className="md:ml-40">
                    <div className="font-primary text-xl font-medium ml-12   mt-8 md:text-2xl lg:text-3xl xl:text-4xl text-white">{name}</div>
                    <div className="px-3 md:px-8 -mt-24">
                        <div className="container mx-auto max-w-full">
                            <div className="flex justify-center items-center mt-32 sm:mt-20 md:mt-4 md:justify-end md:mr-10">
                                <AddSlotBtn secid={location.state.secid} added={setadded} />
                            </div>
                            <div className="bg-white shadow-xl rounded-lg w-full px-8 py-12 mt-6 mb-6">
                                <div className="flex justify-center items-center">
                                    <TechniciansDropDown sectionName={name} url1="/admin/getstaff/3" url2="/admin/gettech/" url3="/admin/settech/" defaultMsg="Assign Lead Tech" />
                                </div>
                                <div className="flex flex-col justify-center items-center mt-6 sm:grid grid-cols-2 place-items-center lg:grid-cols-3 xl:grid-cols-4">
                                    {slotInfo.map(slot => <SlotNumberCard color={slot.slotStatus == 'AVAILABLE' ? "bg-green-500" : "bg-red-500"} slotName={slot.slotName} vNum={slot.slotStatus == 'AVAILABLE' ? "AVAILABLE" : slot.slotStatus == 'NOTAVAILABLE' ? "NOT AVAILABLE" : slot.assignedVehicle} techName={slot.assignedTechnicianName == null ? "Technician Not Assigned" : slot.assignedTechnicianName} />)}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
