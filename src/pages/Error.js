import React from 'react'
import { Link } from 'react-router-dom'
import ButtonHover from '../components/Atoms/ButtonHover'

export default function Error() {
    return (
        <div className="flex items-center justify-center font-primary">
            <div>
                <p className="my-5 font-semibold">Sorry! This page is not Available Please head back to our home Page</p>
            <Link to="/" >
                <ButtonHover txt="Home" />
            </Link>

            </div>
            <img src="/imgs/404.jpg" className="w-1/2"/>
        </div>
    )
}
