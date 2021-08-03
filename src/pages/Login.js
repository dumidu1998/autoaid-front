import React, { useEffect, useState } from 'react'
import ButtonHover from '../components/Atoms/ButtonHover'
import SideImg from '../components/Atoms/SideImg'
import LoginForm from '../components/Moleculars/LoginForm'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Switch } from '@headlessui/react';

export default function Login() {

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    var submit = () => {
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/user/login`, {
            "email": username,
            "userName": username,
            "password": password,
        })
            .then(function (response) {
                // handle success
                console.log(response.data.userType);
                toast.success('Login Sucessfull!', { onClose: () => window.location.href = "customer" });
                let Redirect = response.data.userType;

                switch (Redirect) {
                    case 'ADMIN':
                        window.location.href = "/admin";
                        break;
                    case 'CUSTOMER':
                        window.location.href = "/customer";
                        break;
                    case 'TECHNICIAN':
                        window.location.href = "/technician/dashboard";
                        break;

                }

            })
            .catch(function (error) {
                // handle error
                toast.error('❌ ' + error.response.data);
            })
            .then(function () {
                // always executed

            });
    }

    return (
        <div className="md:flex w-screen">
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
            <div className="hidden md:block md:w-1/2 ">
                <SideImg img="/imgs/header2.jpg" />
            </div>
            <div className="bg-primary-0 w-screen h-screen md:w-1/2 ">
                <div className="bg-white absolute top-1/4 md:top-36 w-screen h-screen md:w-1/2 md:fixed" style={{ borderTopLeftRadius: '150px' }}>
                    <h1 className="font-primary text-center md:text-5xl text-4xl text-current font-semibold mt-7 mb-7">Log In</h1>
                    <div className="md:w-10/12 w-screen mx-auto flex flex-col items-center md:mt-28">

                        <LoginForm username={username} onChangeusername={setusername} password={password} onChangepassword={setpassword} />
                    </div>
                    <div className="text-white mt-7 flex items-center justify-center">
                        <div className="m-4">
                            <ButtonHover txt="Log In" clickaction={submit} />
                        </div>

                    </div>
                    <div className="text-center">
                        <h1 className="font-primary font-extralight text-sm">Don't Have an Account <br /><span className="text-blue-800"> Sign Up</span> </h1>
                    </div>

                </div>

            </div>
        </div>
    )
}
