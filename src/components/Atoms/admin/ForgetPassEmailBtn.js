import React from 'react'
import { Link } from 'react-router-dom';
export default function ForgetPassEmailBtn(props) {
    return (
        <div>
            <Link to={props.link}>
            <button className="text-white font-primary font-medium bg-blue-600 px-6 py-1 mt-3  rounded-lg shadow-xl mr-6">{props.name}</button>
            </Link>
        </div>
    )
}
