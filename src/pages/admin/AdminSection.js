import React, { useEffect, useState } from 'react'
import GoBtn from '../../components/Atoms/GoBtn'
import SectionCardsHeadings from '../../components/Atoms/serviceStation/SectionCardsHeadings'
import SectionsCardsTechnisianInchage from '../../components/Atoms/serviceStation/SectionsCardsTechnisianInchage'
import AdminSideBar from '../../components/Moleculars/admin/AdminSideBar'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { getCookie } from '../../jsfunctions/cookies'
import ButtonSecond from '../../components/Atoms/serviceStation/ButtonSecond'
import StatusBtn from '../../components/Atoms/admin/StatusBtn'
import AddSectionBtn from '../../components/Atoms/admin/AddSectionBtn'

export default function AdminSection() {

    const [sectionDetails, setsectionDetails] = useState([]);
    var config = {
        headers: {
            'Authorization': 'Bearer ' + getCookie('token'),
        }
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/section/getall`, config)
            .then(function (response) {
                console.log(response.data);
                setsectionDetails(response.data);
            })
    }, [])
    return (
        <div className="">
            <div className="md:ml-40 "><AdminSideBar name="Section Manage " roleName="Admin" /></div>
            <div className=" w-full absolute  bg-Background-0 ">
                <div className="md:ml-40">
                    <div className="font-primary text-xl font-medium ml-6 mt-8 md:text-2xl lg:text-3xl xl:text-4xl">Sections</div>
                    <div className="px-3 md:px-8 -mt-24">
                        <div className="container mx-auto max-w-full">
                            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3">
                                <div className="flex justify-center items-center mt-32 md:mt-16 md:justify-end md:mr-10"><AddSectionBtn /></div>
                                {sectionDetails.map(section =>
                                    <div className="flex flex-col  items-center ">

                                        <div className="bg-white w-10/12 mt-32 mb-8 rounded-lg shadow-2xl p-6 md:w-10/12 ">
                                            <div className="text-xl font-primary font-medium flex justify-center items-center md:text-2xl ">{section.sectionName}</div>
                                            <div className="flex flex-col justify-between items-center lg:flex-row">
                                                <div className="flex flex-col">
                                                    <SectionCardsHeadings heading="Total No of Slots" count={section.numberOfSlots} class="font-medium ml-12    " />
                                                    <SectionCardsHeadings heading="Free Slots" count={section.freeSlots} class="font-bold text-green-500" />
                                                    <SectionCardsHeadings heading="Occupied Slots" count={section.occupiedSlots} class="font-bold text-red-600" />
                                                </div>
                                                <div className="mt-8">
                                                    <SectionsCardsTechnisianInchage technician={section.technicianName} />
                                                </div>
                                            </div>
                                            <div className="mt-8 flex justify-center items-center">
                                                <Link to={{ pathname: "/admin/technician/asign", state: { name: section.sectionName } }}>
                                                    <GoBtn btnName="More.." />
                                                </Link>
                                            </div>
                                            <div className="mt-8 flex justify-center items-center"><StatusBtn btnName="Deactivate" /></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}