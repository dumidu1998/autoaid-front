import React from 'react'
import Addnew from '../../components/Atoms/serviceStation/Addnew'
import AddnewWithIcon from '../../components/Atoms/serviceStation/AddnewWithIcon'
import BlueBgBtn from '../../components/Atoms/serviceStation/BlueBgBtn'
import PauseBtn from '../../components/Atoms/serviceStation/PauseBtn'
import TopContainerVNo from '../../components/Atoms/technician/TopContainerVNo'
import ProgressMainContainer from '../../components/Organs/technician/ProgressMainContainer'
import SummaryMainContainer from '../../components/Organs/technician/SummaryMainContainer'
import SummaryRightContainer from '../../components/Organs/technician/SummaryRightContainer'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { Dialog, Transition, Listbox } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import Button from '../../components/Atoms/Button'

export default function ServiceProgress() {
    const location=useLocation();
    // console.log(location.state.repair.repairId);
    // console.log(location.state.sectionName);
    function closeModal() {
		setIsOpen(false)
	}

	function openModal() {
		setIsOpen(true)
	}

    
	let [isOpen, setIsOpen] = useState(false);

    return (

        <div className="relative bg-Background-0 h-full lg:h-screen">
            <div className="flex flex-col items-center ">
                <TopContainerVNo heading1="KT-0246" link="dashboard" />
                <div className="flex  flex-col lg:flex-row w-11/12 justify-center items-center">
                    <div>
                        <ProgressMainContainer repair={location.state.repair} sectionName={location.state.sectionName} />
                    </div>
                    <div className="flex flex-col items-center">
                        <SummaryRightContainer repairid={location.state.repair.repairId} />
                        <PauseBtn txt={"Pause"} />
                        <div className="flex ">
                            <AddnewWithIcon txt={"Add New"} />
                            <div className="">
				<button
					type="button"
					onClick={openModal}
					className="w-40 h-14 rounded-lg shadow-lg bg-primary-0  m-5 flex items-center justify-center text-white font-bold text-xl">
					Request Items 
				</button>
			</div>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 w-screen z-40 overflow-y-auto flex items-center justify-center backdrop-filter backdrop-blur-lg"
					onClose={closeModal}
				>
					<div className="min-h-screen w-10/12 px-4">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0" />
						</Transition.Child>
						{/* This element is to trick the browser into centering the modal contents. */}
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<div className="flex flex-col w-full  p-5 my-10 overflow-hidden text-center items-center transition-all transform bg-white shadow-xl rounded-2xl ">
								<Dialog.Title
									as="h3"
									className="text-2xl font-bold leading-6 text-primary-0 font-primary text-center"
								>
									Request Items Now
								</Dialog.Title>
								<div className="my-5 text-left">
									<div >
										<input type="text" className=" w-96 h-12 rounded-md shadow-md" placeholder="Search" />
									</div>
								</div>
                                    <table className="w-10/12">
                                        <tbody>
                                            <tr>
                                                <th>
                                                    Item Name
                                                </th>
                                                <th>
                                                    Qty.
                                                </th>
                                                <th>
                                                    Actvity
                                                </th>
                                            </tr>
                                            <tr>
                                                <td>Radiator</td>
                                                <td><input type="number" min="0" max="avail" value="2" /></td>
                                                <td className="flex justify-center"><Button txt="Order" /></td>
                                            </tr>
                                        </tbody>
                                    </table>
								
								<div className="mt-4 mb-5">
									<button
										type="button"
										className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
										
										
									>
										Order Now
									</button>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
