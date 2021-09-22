import React from 'react'
import Button from '../Atoms/Button'
import ButtonPrimary from '../Atoms/ButtonPrimary'
import SectionHeading from '../Atoms/SectionHeading'

export default function LandingSection5() {
    return (
        <div className="mt-10 w-10/12 mx-auto">
            <SectionHeading heading1="How to place an " span="Appointment "/>
            <div className="flex flex-col md:flex-row items-center ">
                <div className="md:w-1/2">
                    <img src="/imgs/header3.jpg"/>

                </div>
                <div className="md:w-1/2">
                    <div className="w-10/12 mx-auto flex flex-col items-center justify-center">
                        <div>

                            <h1 className="font-primary font-bold text-xl md:text-2xl mt-5 text-center">Now you can place appointments online</h1>
                            <h1 className="font-primary font-light text-md md:text-lg mt-2 text-center"> Now Its much easier to place appointment with us its just a click away. you just need to signup for the system</h1>
                            <ul className=" list-outside text-black mt-7">
                                <li className="font-primary font-normal text-lg mt-7">1. Sign up to the system</li>
                                <li className="font-primary font-normal text-lg mt-7">2. Select a Date</li>
                                <li className="font-primary font-normal text-lg mt-7">3. Select a time slot</li>
                                <li className="font-primary font-normal text-lg mt-7">4. Place your Appointment</li>

                            </ul>
                        </div>
                        <div className="text-white mt-10">
                            <ButtonPrimary txt="Book Now"/>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
