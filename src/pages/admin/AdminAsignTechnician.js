import React from 'react'
import { useParams,useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import AddSlotBtn from '../../components/Atoms/admin/AddSlotBtn';
import SlotNumberCard from '../../components/Atoms/admin/SlotNumberCard';
import AdminSideBar from '../../components/Moleculars/admin/AdminSideBar'
import TechniciansDropDown from '../../components/Moleculars/technician/TechniciansDropDown';

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
                        <div className="flex justify-center items-center mt-32 md:mt-16 md:justify-end md:mr-10"><AddSlotBtn/></div>
                        <div className="bg-white shadow-xl rounded-lg w-full px-8 py-12 mt-6 mb-6">
                            <div className="flex justify-center items-center">
                                <TechniciansDropDown/>  
                            </div>
                            <div className="flex flex-col justify-center items-center mt-6 sm:grid grid-cols-2 place-items-center lg:grid-cols-3 xl:grid-cols-4">
                                <SlotNumberCard color="bg-green-500" slotNum="1" vNum="" techName=""/>
                                <SlotNumberCard color="bg-green-500" slotNum="2" vNum="" techName=""/>
                                <SlotNumberCard color="bg-red-500" slotNum="3" vNum="CAZ-4079" techName="Pathiya"/>
                                <SlotNumberCard color="bg-red-500" slotNum="4" vNum="CAZ-4079" techName="Pathiya"/>
                                <SlotNumberCard color="bg-green-500" slotNum="5" vNum="" techName=""/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>    
         </div>
    )
}
