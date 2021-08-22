import React, { useState, Fragment } from 'react';
import { Dialog, Popover, Transition } from '@headlessui/react'
import Calendar, { MonthView } from 'react-calendar';
import TechniciansDropDown from '../technician/TechniciansDropDown'
import ReasonDropdown from './ReasonDropdown';

export default function RepairList(props) {
    const [value, onChange] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div>
                <div className="bg-white p-3 shadow-xl rounded-lg w-96 mb-5">
                    <div className="flex justify-between w-10/12 items-center">
                        <div>
                            <h1 className="font-primary font-semibold text-lg mt-2 ml-7">{props.title}</h1>
                            <span className="font-primary font-medium text-base text-gray-500 ml-7">
                                {props.time}
                            </span>
                        </div>
                        <Popover>
                            {({ open }) => (
                                <>
                                    <Popover.Button>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primary-0" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                                        </svg>
                                    </Popover.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 px-4 mt-3 transform -translate-x-1/2 left-1/3 sm:px-0 w-1/4">
                                            <div className=" rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 ">
                                                <div className="relative gap-8 bg-white p-7 lg:grid-cols-2 ">
                                                    <h2 className="font-primary">Reason for Removing - Engine Piston Repair in Service #12</h2>
                                                    <ReasonDropdown />
                                                </div>
                                                <div className="p-4 bg-gray-50 flex justify-center">
                                                    <button
                                                        type="button"
                                                        className="inline-flex justify-center px-4 py-2 text-sm rounded-lg shadow-lg bg-gradient-to-br from-primary-0 to-Secondary-0 border border-transparent text-white font-bold  hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                                        onClick={closeModal}
                                                    >
                                                        Remove Entry
                                                    </button>
                                                </div>
                                            </div>
                                        </Popover.Panel>


                                    </Transition>
                                </>
                            )}
                        </Popover>



                    </div>
                </div >

            </div >
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 w-screen z-40 overflow-y-auto flex items-center justify-center backdrop-filter backdrop-blur-lg"
                    onClose={closeModal}
                >
                    <div className="min-h-screen w-1/4 px-4">
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
                                    Reason for Removing
                                </Dialog.Title>
                                <div className="my-5 text-left">
                                    <div >
                                        <form>

                                            {/* <div className="mt-5">
                                                <h1 className="font-primary  text-md font-semibold"> Time</h1>
                                                <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-60" value="" />

                                            </div>
                                            <div className="mt-5">
                                                <h1 className="font-primary  text-md font-semibold "> Vehicle No</h1>
                                                <select className="">
                                                    <option value="">Select a value</option>
                                                </select>
                                            </div> */}

                                            <div className="mt-5 w-full">
                                                <h1 className="font-primary text-md font-semibold"> Service Advisor</h1>
                                                <ReasonDropdown />
                                            </div>
                                        </form>
                                    </div>

                                </div>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={closeModal}
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>

        </>
    )
}
