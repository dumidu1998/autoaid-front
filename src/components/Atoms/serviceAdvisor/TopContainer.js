import React from 'react'
import Addnew from './Addnew'
import ProfileIcon from './ProfileIcon'

export default function TopContainer() {
    return (
        <div>
            <div className="w-full h-24 bg-forth-0 rounded-b-3xl flex items-center justify-center">
                <div className=" flex w-9/12 justify-between items-center">

                    <h1 className=" font-primary text-3xl text-white">Dashboard <span className=" font-primary text-2xl text-white font-light">(Service Advisor)</span></h1>
                    <div className="flex items-center justify-center">
                        <Addnew/>
                        <ProfileIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}
