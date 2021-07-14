import React from 'react'
import ButtonHover from '../../Atoms/ButtonHover'

export default function TopNav() {
    return (
        <div>
            <div className=" w-screen p-5 shadow-lg md:flex items-center justify-center hidden">
                <div className="w-10/12  flex justify-between items-center">
                    <img src="/imgs/Logo.png"  className="w-40"/>
                    <div>
                        <a className="font-primary font-semibold hover:text-primary-0 mx-10">Home</a>
                        <a className="font-primary font-semibold hover:text-primary-0 mx-10">Profile</a>
                    </div>
                    <div className="text-white">
                        <ButtonHover txt="Contact Us"/>
                    </div>

                </div>
            </div>
        </div>
    )
}
