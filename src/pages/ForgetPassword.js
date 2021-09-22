import React from 'react'
import ForgetPassPopUp from '../components/Atoms/ForgetPassPopUp'

export default function ForgetPassword() {
    return (
        <div className="flex justify-center items-center mt-20">
            <ForgetPassPopUp Heading1="Registered Email" 
                clickbtnName="Forget Password" 
                clickbtnFontColor="text-blue-500"
                Heading2="Check your Email" 
                clickbtnName="Forget Password" 
                clickbtnFontColor="text-blue-500"/>
        </div>
    )
}
