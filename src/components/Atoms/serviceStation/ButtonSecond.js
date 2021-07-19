import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonSecond(props) {
    return (
        <div>
            <Link to={props.link}>
                <div className="w-24 h-9 rounded-lg bg-blue-700 flex items-center justify-center" >
                    <h1 className="text-lg font-primary font-medium text-white">GO</h1>
                </div>
            </Link>
        </div>
    )
}
