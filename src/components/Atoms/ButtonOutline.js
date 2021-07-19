import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonOutline(props) {
    return (
        <div>
            <Link to={props.link}>
            
                <div className="w-32 h-10 border-2 border-primary-0 rounded-md flex items-center justify-center cursor-pointer relative">
                    <div className="w-2 h-2 bg-Secondary-0 animate-ping rounded-full absolute -top-1 -right-1"></div>
                    <h1 className=" font-primary">{props.txt}</h1>
                </div>
            </Link>

            
        </div>
    )
}
