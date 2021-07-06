import React from 'react'
import ButtonHover from '../Atoms/ButtonHover'
import ButtonSecondary from '../Atoms/ButtonSecondary'
import SideImg from '../Atoms/SideImg'
import LoginForm from '../Moleculars/LoginForm'
import SignUpForm from '../Moleculars/SignUpForm'

export default function LoginRight() {
    return (
        <div className="md:flex w-screen">
           <div className="hidden md:block md:w-1/2 ">
                <SideImg img="/imgs/header2.jpg"/>
            </div>
            <div className="bg-primary-0 w-screen h-screen md:w-1/2 ">
                <div className="bg-white absolute top-1/4 md:top-36 w-screen h-screen md:w-1/2 md:fixed" style={{borderTopLeftRadius:'150px'}}>
                   <h1 className="font-primary text-center md:text-5xl text-4xl text-current font-semibold mt-7 mb-7">Log In</h1> 
                    <div className="md:w-10/12 w-screen mx-auto flex flex-col items-center md:mt-28">

                        <LoginForm/>
                    </div>
                <div className="text-white mt-7 flex items-center justify-center">
                        <div className="m-4">
                            <ButtonHover txt="Log In"/>
                        </div>
                    
                </div>
                <div className="text-center">
                    <h1 className="font-primary font-extralight text-sm">Don't Have an Account <br/><span className="text-blue-800"> Sign Up</span> </h1>
                </div>

                </div>

            </div>
        </div>
    )
}
