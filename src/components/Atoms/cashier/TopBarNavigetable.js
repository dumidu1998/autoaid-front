import React from 'react'
import BackToHome from '../technician/BackToHome'
import { Link } from 'react-router-dom';

export default function TopBarNavigetable(props) {
    return (
        <div>
        <div className="w-screen h-24 bg-forth-0 rounded-b-3xl flex items-center justify-center">
            <div className=" flex w-9/12 justify-between items-center">
                <Link to={props.link}>
                    <BackToHome />
                </Link>

                <h1 className=" font-primary text-3xl text-white">{props.heading1}</h1>
                <div className="flex items-center justify-center">
                </div>
            </div>
        </div>
    </div >
    )
}
