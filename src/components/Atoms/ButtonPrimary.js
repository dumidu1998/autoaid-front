import { Link } from '@material-ui/core'
import React from 'react'

export default function ButtonPrimary(props) {
    return (
        <div>
            <Link to={props.href}>
                <a>
                    <div className="w-32 flex justify-center py-2 font-primary bg-primary-0 rounded-lg">
                            <h1 className="text-white font-bold tracking-wider">{props.txt}</h1>
                    </div>

                </a>
            </Link>
        </div>
    )
}
