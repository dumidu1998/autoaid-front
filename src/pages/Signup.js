import React from 'react'
import FormInput from '../components/Atoms/FormInput'
import SideImg from '../components/Atoms/SideImg'
import SignUpForm from '../components/Moleculars/SignUpForm'
import ButtonHover from '../components/Atoms/ButtonHover'
import ButtonSecondary from '../components/Atoms/ButtonSecondary'

export default function Signup() {
    return (
        <div className="md:flex w-screen">
        <div className="hidden md:block md:w-1/2 ">
             <SideImg img="/imgs/header2.jpg"/>
         </div>
         <div className="bg-primary-0 w-screen h-screen md:w-1/2 ">
             <div className="bg-white absolute top-1/4 md:top-36 w-screen h-screen md:w-1/2" style={{borderTopLeftRadius:'150px'}}>
                <h1 className="font-primary text-center md:text-5xl text-4xl text-current font-semibold mt-7 mb-7">Sign Up</h1> 
                 <div className="md:w-10/12 w-screen mx-auto flex flex-col items-center overflow-auto h-1/3 lg:h-1/2 shadow-md rounded-lg">

                     <SignUpForm/>
                 </div>
             <div className="text-white mt-7 flex items-center justify-center">
                     <div className="m-4">
                         <ButtonHover txt="Sign Up "/>
                     </div>
                     <div className="m-4">
                         <ButtonSecondary txt= "Already a Customer"/>
                     </div> 
                 
             </div>
             <div className="text-center">
                 <h1 className="font-primary font-extralight text-sm">Already Have an Account <br/><span className="text-blue-800"> Sign in</span> </h1>
             </div>

             </div>

         </div>
     </div>
    )
}
