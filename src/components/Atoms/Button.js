import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Button(props) {
    return (
        <div>
            <Link to={props.link}>
                <div className="w-24 h-10 bg-green-600 text-white text-lg rounded-md flex items-center justify-center hover:shadow-lg">
                    <h1 className=" font-primary">{props.txt}</h1>
                </div>
            </Link>
        </div>
    )
}
