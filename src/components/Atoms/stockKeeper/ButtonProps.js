import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonProps(props) {

    let style= "w-24 h-10 rounded-lg flex items-center justify-center ";
    style+=props.color;

    return (
        <div>
            <Link to={props.link}>
                <div className={style} >
                    <h1 className="text-lg font-primary font-medium text-white">{props.name}</h1>
                </div>
            </Link>
        </div>
    )
}
