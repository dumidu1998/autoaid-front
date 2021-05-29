import React from 'react'
import Button from './Button'
import ButtonOutline from './ButtonOutline'

export default function NavBar() {
    return (
        <div className="w-full bg-third-0 fixed z-50">
            <div className="w-10/12 mx-auto flex justify-between items-center">
                <div>

                    <h1 className="font-primary font-semibold text-3xl text-primary-0">Auto</h1>
                    <h1 className="font-secondary font-bold text-4xl text-Secondary-0">Aid</h1>
                </div>

                <div className="text-white md:flex items-center justify-center hidden">
                    <h1 className="m-4 font-primary text-semibold hover:text-primary-0">Home</h1>
                    <h1 className="m-4 font-primary text-semibold hover:text-primary-0">Pricing</h1>
                    <h1 className="m-4 font-primary text-semibold hover:text-primary-0">About</h1>
                    <div className="m-4">
                        <Button txt="Log in" />
                    </div>
                    <ButtonOutline txt= "Register" />
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
