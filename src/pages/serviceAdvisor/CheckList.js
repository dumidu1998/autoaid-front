import React from 'react'
import ButtonSecondary from '../../components/Atoms/ButtonSecondary'
import TopContainer from '../../components/Atoms/serviceStation/TopContainer'
import SideNav from '../../components/Moleculars/serviceAdvisor/sideNav'

export default function CheckList() {
    return (
        <div className="bg-Background-0 font-primary ">
            <div className="flex flex-row">
                <SideNav/>            
                <div className="w-full flex flex-col xl:ml-40">
                    <TopContainer heading1="Dashboard" heading2="Service Advisor" addnewbtntext="Add New" path="/serviceadvisor/detailsform"/>
                    <div className="w-full  flex justify-center items-center my-10">
                        <form className="space-y-5 w-10/12 bg-white py-10 rounded-lg">
                            <h1 className="text-center text-xl font-bold">Vehicle Checklist</h1>
                            <div className="flex justify-evenly">
                                <div className="flex flex-col items-center">
                                    <div className="w-72 h-44 bg-white border flex items-center justify-center text-3xl font-bold text-gray-400">Front View</div>
                                    <button className="px-5 py-2 my-3 rounded-lg shadow-lg bg-primary-0 font-semibold text-white">Take Photo</button>

                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-72 h-44 bg-white border flex items-center justify-center text-3xl font-bold text-gray-400">Rear View</div>
                                    <button className="px-5 py-2 my-3 rounded-lg shadow-lg bg-primary-0 font-semibold text-white">Take Photo</button>

                                </div>

                            </div>
                            <div className="flex justify-evenly">
                                <div className="flex flex-col items-center">
                                    <div className="w-72 h-44 bg-white border flex items-center justify-center text-3xl font-bold text-gray-400">Side View</div>
                                    <button className="px-5 py-2 my-3 rounded-lg shadow-lg bg-primary-0 font-semibold text-white">Take Photo</button>

                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-72 h-44 bg-white border flex items-center justify-center text-3xl font-bold text-gray-400">Side View</div>
                                    <button className="px-5 py-2 my-3 rounded-lg shadow-lg bg-primary-0 font-semibold text-white">Take Photo</button>

                                </div>

                            </div>
                            <div className="flex flex-col items-center w-1/2  space-y-4 mt-10 p-5">
                                <div className="flex justify-between w-1/2 items-center">
                                    <label className="mr-3">Documents</label>
                                    <input type="checkbox" min="0"  className=" border rounded-full shadow-lg w-8 h-8"/>

                                </div>
                                <div className="flex justify-between w-1/2 items-center">
                                    <label className="mr-3">Spare Wheel</label>
                                    <input type="checkbox" min="0"  className=" border rounded-full shadow-lg w-8 h-8"/>

                                </div>
                                <div className="flex justify-between w-1/2 items-center">
                                    <label className="mr-3">Tool Set</label>
                                    <input type="checkbox" min="0"  className=" border rounded-full shadow-lg w-8 h-8"/>

                                </div>

                            </div>


                            <div className="flex justify-evenly space-x-5">
                                <div>
                                    <p>Carpert count</p>
                                    <input type="number" min="0"  className=" border-0 rounded-lg shadow-lg"/>

                                </div>
                                <div>
                                    <p>Seat Cover count</p>
                                    <input type="number" min="0"  className=" border-0 rounded-lg shadow-lg"/>

                                </div>

                            </div>
                            <div className="flex flex-col items-center">
                                <p className=" text-left">Description</p>
                                <input type="text"  className="w-3/4 h-32 border rounded-lg shadow-lg"/>

                            </div>
                            <div className="w-full flex justify-center text-white">
                                    <ButtonSecondary txt="Checked"/>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
