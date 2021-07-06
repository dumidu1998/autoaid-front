import React from 'react'
import FormInput from '../Atoms/FormInput'

export default function LoginForm() {
    return (
        <div>
            <div className="flex flex-col items-center">
                    <div className="">
                        <FormInput lable=" User Name / Email"/>

                    </div>
                     <div className="mt-7">
                        <FormInput lable="Password"/>

                    </div>
            </div>
            
        </div>
    )
}
