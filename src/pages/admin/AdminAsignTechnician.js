import React from 'react'
import { useParams,useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import AdminSideBar from '../../components/Moleculars/admin/AdminSideBar'

export default function AdminAsignTechnician(props) {
    const location = useLocation()
    const name = location.state?.name;
    return (
        <div className="">
        <div className="md:ml-40 "><AdminSideBar name="Section Manage " roleName="Admin"/></div>
        <div className=" w-full absolute  bg-Background-0 ">
            <div className="md:ml-40">
                <div className="font-primary text-xl font-medium ml-12   mt-8 md:text-2xl lg:text-3xl xl:text-4xl">{name}</div>
                <div className="px-3 md:px-8 -mt-24">
                    <div className="container mx-auto max-w-full">
                        
                    </div>
                </div>
            </div>
        </div>    
         </div>
    )
}
