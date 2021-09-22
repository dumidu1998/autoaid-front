import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Atoms/Button'
import ButtonOutline from '../Atoms/ButtonOutline'
import ButtonPrimary from '../Atoms/ButtonPrimary'

export default function NavBar() {
    return (
        <div className="w-screen bg-forth-0 fixed z-50">
            <div className="w-10/12 mx-auto flex justify-between items-center">
                <div className="flex items-center justify-center">

                    <img className=" w-44 mt-2" src="/imgs/Logo.png" />
                </div>

                <div className="text-white md:flex items-center justify-center hidden ">
                    
                    <div className="m-4">
                        <Link to="/login">
                            
                            <ButtonPrimary txt="Log in" href="/login" />

                        </Link>
                    </div>
                    <ButtonOutline txt="Register" link="/signup" />
                </div>

                <div className="md:hidden text-white ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>

                </div>
            </div>
        </div>
    )
}
