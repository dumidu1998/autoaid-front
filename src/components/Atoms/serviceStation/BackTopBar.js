import React from 'react'
import { Link } from 'react-router-dom'
import BackToHome from '../technician/BackToHome'

export default function BackTopBar(props) {
    return (
        <div>
            <div className="w-full h-24 bg-forth-0 rounded-b-3xl flex items-center justify-center">
                <div className=" flex w-9/12 justify-between items-center">
                   <div className="-ml-16">
                        <Link to={props.link}>
                            <BackToHome/>
                        </Link>
                   </div>

                    <h1 className=" font-primary text-3xl text-white">{props.heading1}</h1>
                    <div className="flex items-center justify-center">
                    </div>
                </div>
            </div>
        </div >
    )
}
