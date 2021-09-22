import React, { Component,useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-tailwind/react/Button';
export default function AdminSideBarIcons({ showSidebar, setShowSidebar }) {
    return (
        <div className="flex justify-start ">
        {/* <div className="bg-black shadow-lg w-40 h-screen"> */}
        <div className="md:hidden ">
                    <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        iconOnly
                        rounded
                        ripple="light"
                        onClick={() => setShowSidebar('left-0')}
                    >
                        {/* <Icon name="menu" size="2xl" color="bg-forth-0" /> */}
                        <img src="https://img.icons8.com/material-rounded/48/000000/menu--v4.png"/>
                    </Button>
                    <div
                        className={`absolute top-2 md:hidden ${
                            showSidebar === 'left-0' ? 'left-40' : '-left-40'
                        } z-50 transition-all duration-300`}
                    >
                        <Button
                            color="transparent"
                            buttonType="link"
                            size="lg"
                            iconOnly
                            rounded
                            ripple="light"
                            onClick={() => setShowSidebar('-left-40')}
                        >
                            {/* <Icon name="close" size="2xl" color="red" /> */}
                            <img src="https://img.icons8.com/fluency/96/000000/close-window.png"/>
                        </Button>
                    </div>
                </div>

                <div className={`h-screen fixed  top-0 md:left-0 ${showSidebar} flex items-center justify-center flex-row flex-nowrap overflow-y-auto bg-white z-200 shadow-lg w-40   z-10 py-4 px-6 transition-all duration-300 md:overflow-hidden`}>
                {/* <div > */}
            
            
                    <div className="relative -mt-32 h-screen">
                        <Link to="/admin/"> 
                            <div className="flex flex-col items-center justify-center w-20 h-20 hover:shadow-lg  m-10 rounded-lg mt-24 hover:text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-Secondary-0  hover:text-primary-0" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                                </svg>
                                <h1 className="text-gray-300 font-primary text-xs m-1 font-bold ">Dashboard</h1>
                            </div>
                        </Link>
                        <Link to="/admin/staff"> 
                            <div className="flex flex-col items-center justify-center w-20 h-20 hover:shadow-lg  m-10 rounded-lg mt-12">
                                <svg xmlns="http://www.w3.org/2000/svg"className="h-8 w-8 text-Secondary-0  hover:text-primary-0" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                </svg>
                                <h1 className="text-gray-300 font-primary text-xs m-1 font-bold">Staff</h1>
                            </div>
                        </Link>
                        <Link to="/admin/section"> 
                            <div className="flex flex-col items-center justify-center w-20 h-20 hover:shadow-lg m-10 rounded-lg mt-12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-Secondary-0  hover:text-primary-0" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                            </svg>
                                <h1 className="text-gray-300 font-primary text-xs m-1 font-bold">Sections</h1>
                            </div>
                        </Link>
                        <Link to="/admin/items"> 
                            <div className="flex flex-col items-center justify-center w-20 h-20 hover:shadow-lg m-10 rounded-lg mt-12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-Secondary-0  hover:text-primary-0"  viewBox="0 0 20 20" fill="currentColor">
                            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                            </svg>
                                <h1 className="text-gray-300 font-primary text-xs m-1 font-bold">Items</h1>
                            </div>
                        </Link>
                            {/* <div className="flex flex-col items-center justify-center w-20 h-20 hover:shadow-lg m-10 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-300 hover:text-primary-0" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                                </svg>
                                <h1 className="text-gray-300 font-primary text-xs m-1 font-bold">New Items</h1>
                            </div> */}
                         <Link to="/admin/reports">
                            <div className="flex flex-col items-center justify-center w-20 h-20 hover:shadow-lg m-10  rounded-lg mt-12">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-300 hover:text-primary-0" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                                </svg> */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-Secondary-0 hover:text-primary-0" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clip-rule="evenodd" />
                                </svg>
                                <h1 className="text-gray-300 font-primary text-xs m-1 font-bold ">Reports</h1>
                            </div>
                        </Link>
                        <Link to="/login">
                            <div className="flex flex-col items-center justify-center w-20 h-20 hover:bg-white hover:shadow-lg hover:border-transparent m-10  rounded-lg mt-24">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-Secondary-0 hover:text-primary-0" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd" />
                                </svg>
                                <h1 className=" font-primary text-xs m-1 font-bold text-gray-300">Logout</h1>
                            </div>
                        </Link>
                        </div>
                {/* </div> */}
                </div>
            {/* </div> */}
        </div>
    )
}
