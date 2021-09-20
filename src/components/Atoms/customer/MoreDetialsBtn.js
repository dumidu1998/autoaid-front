import React from 'react'
import { Link } from 'react-router-dom';
export default function MoreDetialsBtn(props) {
    return (
        <div>
             <Link to="/cashier">
                <button className="bg-blue-600 font-primary text-white font-bold rounded-lg shadow-xl px-6 py-3 ">{props.name}</button>
            </Link>
        </div>
    )
}
