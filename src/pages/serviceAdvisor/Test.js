import React from 'react'
import FormInput from '../../components/Atoms/FormInput'
import RoundContainer from '../../components/Atoms/RoundContainer'
import Addnew from '../../components/Atoms/serviceStation/Addnew'

export default function Test() {
    return (
        <div className="bg-Secondary-0 h-screen flex items-center justify-center">
            <div className="bg-primary-0 h-72 w-1/2 flex flex-col item-center justify-center">
                <h1 className="font-primary font-bold text-lg mt-10">
                    Log in
                </h1>
                <input type="text" placeholder="name" className=" w-24" />
                <FormInput />
                <Addnew />
            </div>

        </div>
    )
}
