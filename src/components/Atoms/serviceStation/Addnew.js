import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Addnew(props) {
    return (
        <div>
            <Link to={props.path}>
            <div className="cursor-pointer w-40 h-14 rounded-lg shadow-lg bg-gradient-to-br from-primary-0 to-Secondary-0 flex items-center justify-center">
                <h1 className="text-white font-bold text-xl">{props.txt}</h1>    
            </div>
            </Link>
            
        </div>
    )
}
