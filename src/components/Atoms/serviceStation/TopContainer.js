import React from 'react'
import Addnew from './Addnew'
import ProfileIcon from './ProfileIcon'

export default function TopContainer(props) {
    return (
        <div>
            <div className="w-full h-24 bg-forth-0 rounded-b-3xl flex ">
                <div className=" flex  w-full justify-between items-center">

                    <h1 className=" font-primary text-3xl text-white ml-16">{props.heading1} <span className=" font-primary text-2xl text-white font-light">({props.heading2})</span></h1>
                    <div className="flex items-center ">
                        <div className="mt-10">

                            <Addnew txt={props.addnewbtntext} path={props.path} />

                        </div>
                        <ProfileIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
