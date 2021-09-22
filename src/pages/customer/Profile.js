import { React, useState, Fragment, useEffect } from 'react'
import ButtonSecondary from '../../components/Atoms/ButtonSecondary'
import Addnew from '../../components/Atoms/serviceStation/Addnew'
import ButtonSecond from '../../components/Atoms/serviceStation/ButtonSecond'
import TopNav from '../../components/Moleculars/customer/TopNav'
import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios'
import { getCookie } from '../../jsfunctions/cookies'



export default function Profile() {
    let [isOpenp, setIsOpenp] = useState(false)
    let [isOpenbio, setIsOpenbio] = useState(false)
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [contactno, setcontactno] = useState('');
    const [address, setaddress] = useState('');
    const [city, setcity] = useState('');
    const [password, setpassword] = useState('');
    const [newpassword, setnewpassword] = useState('');
    const [rcpwd, setrcpwd] = useState('');

    const userId = getCookie('userId');
    const userName=getCookie('username');
     
    var config = {
        headers: {
            'Authorization': 'Bearer ' + getCookie('token'),
        }
    }
    useEffect(() => {
        console.log(userId + " " + userName);
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/customer/getuserDetails`, {
            "userId": userId,
            "userName": userName
        }, config)
            .then((res) => {
                console.log(res.data);
                setfirstname(res.data.firstName);
                setlastname(res.data.lastName);
                setcontactno(res.data.contactNo);
                setemail(res.data.email);
                setcity(res.data.city);
                setaddress(res.data.address);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    function closeModalp() {
        setIsOpenp(false)
    }

    function openModalp() {
        setIsOpenp(true)
    }
    function closeModalBio() {
        setIsOpenbio(false)
    }

    function openModalBio() {
        setIsOpenbio(true)
    }
    return (
        <div className="w-screen font-primary">
            <TopNav />
            <div className="flex justify-center my-10">
                <div className="md:w-1/2 flex flex-col shadow-lg items-center rounded-lg">
                    <div className="w-10/12 my-5 flex justify-between ">
                        <div>
                            <img src="/imgs/user.png" className="w-20" />
                            <p>{firstname + ' ' + lastname}</p>
                            <p>{userName}</p>

                        </div>
                        <div className="space-y-5">
                            <div>
                                <p>Address :- </p>
                                <p>{address + ", " + city}</p>
                            </div>
                            <div>
                                <p>Contact No :- </p>
                                <p>{contactno}</p>
                            </div>
                            <div>
                                <p>Email:- </p>
                                <p>{email}</p>
                            </div>

                        </div>

                    </div>
                    {/* Change password */}

                    <div className=" flex items-center justify-center">
                        <button
                            type="button"
                            onClick={openModalp}
                            className="px-4 py-2 text-sm font-medium text-white bg-primary-0 rounded-md bg-opacity-100 hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                        >
                            Change Password
                        </button>
                    </div>

                    <Transition appear show={isOpenp} as={Fragment}>
                        <Dialog
                            as="div"
                            className="fixed inset-0 z-10 overflow-y-auto"
                            onClose={closeModalp}
                        >
                            <div className="min-h-screen px-4 text-center">
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
                                {/* <span
                                    className="inline-block h-screen align-middle"
                                    aria-hidden="true"
                                    >
                                    &#8203;
                                    </span> */}
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900"
                                        >
                                            Change Password
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                If You want to change password please enter enter the current password and proceed
                                        </p>
                                        </div>
                                        <form>
                                            <p className="font-semibold text-sm my-3">Current Password</p>
                                            <input type="password" value={password} onChange={e => setpassword(e.target.value)} />
                                            <br />
                                            <p className="font-semibold text-sm my-3">New Password</p>
                                            <input type="password" value={newpassword} onChange={e => setnewpassword(e.target.value)} />
                                            <p className="font-semibold text-sm my-3">Confirm Password</p>
                                            <input type="password" value={rcpwd} onChange={e => setrcpwd(e.target.value)} />
                                        </form>

                                        <div className="mt-4">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                                onClick={closeModalp}
                                            >
                                                Change Password
                                        </button>
                                        </div>
                                    </div>
                                </Transition.Child>
                            </div>
                        </Dialog>
                    </Transition>

                    {/* change bio */}


                    <div className=" flex items-center justify-center my-5">
                        <button
                            type="button"
                            onClick={openModalBio}
                            className="px-4 py-2 text-sm font-medium text-white bg-Secondary-0 rounded-md bg-opacity-100 hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                        >
                            Change Bio
                        </button>
                    </div>

                    <Transition appear show={isOpenbio} as={Fragment}>
                        <Dialog
                            as="div"
                            className="fixed inset-0 z-10 overflow-y-auto"
                            onClose={closeModalBio}
                        >
                            <div className="min-h-screen px-4 text-center flex items-center justify-center">
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
                                <span
                                    className="inline-block h-screen align-middle"
                                    aria-hidden="true"
                                >
                                    &#8203;
                                    </span>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <div className=" flex flex-col items-center w-1/2 p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900"
                                        >
                                            Change Bio
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                If You want to change password please enter enter the current password and proceed
                                        </p>
                                        </div>
                                        <form>
                                            <div className="flex justify-evenly space-x-3">
                                                <div>
                                                    <p className="font-semibold text-sm my-3">First Name</p>
                                                    <input type="text" value={firstname} onChange={e => setfirstname(e.target.value)} />

                                                </div>
                                                <div>
                                                    <p className="font-semibold text-sm my-3">Last Name</p>
                                                    <input type="text" value={lastname} onChange={e => setlastname(e.target.value)} />

                                                </div>

                                            </div>
                                            <br />
                                            <div className="flex justify-evenly space-x-3">
                                                <div>
                                                    <p className="font-semibold text-sm my-3">Address Line 1</p>
                                                    <input type="text" value={address} onChange={e => setaddress(e.target.value)} />

                                                </div>
                                                <div>
                                                    <p className="font-semibold text-sm my-3">City</p>
                                                    <input type="text" value={city} onChange={e => setcity(e.target.value)} />

                                                </div>

                                            </div>
                                            <div className="flex justify-evenly space-x-3">
                                                <div>
                                                    <p className="font-semibold text-sm my-3">Phone No 1</p>
                                                    <input type="tel" pattern="^((?:\+94|94)|0)(\d{9})$" value={contactno} onChange={e => setcontactno(e.target.value)} />

                                                </div>
                                            </div>
                                        </form>

                                        <div className="mt-4">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                                onClick={closeModalBio}
                                            >
                                                Update Details
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
    )
}
