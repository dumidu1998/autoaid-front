import React from 'react'
import SectionHeading from '../Atoms/SectionHeading'

export default function LandingSection2() {
    return (
        <div className="w-screen bg-third-0 pt-52 md:pb-48 pb-20 flex items-center justify-center" id="start">
            <div className="w-10/12 md:w-1/3 mx-auto text-white ">
                <SectionHeading heading1="Why you " heading2=" Us" span=" Choose" caption1="We are the best Repair center in the  city we provide most " caption2="promissing and best quality service" />
                <div className="flex items-center justify-center md:justify-between mt-10">
                    <div className="text-primary-0 m-10">

                        <svg xmlns="http://www.w3.org/2000/svg" class="md:h-16 md:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h1 className="text-white text-center mt-5 font-primary font-light">Time Efficient</h1>
                    </div>
                    <div className="text-primary-0 m-10">
                        <svg xmlns="http://www.w3.org/2000/svg" class="md:h-16 md:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <h1 className="text-white text-center  mt-5 font-primary font-light">Money Saving</h1>
                    </div>
                    <div className="text-primary-0 m-10">
                        <svg xmlns="http://www.w3.org/2000/svg" class="md:h-16 md:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                        </svg>
                        <h1 className="text-white text-center mt-5 font-primary font-light ">Can Track <br/> progess easily</h1>

                    </div>

                </div>
            </div>

            
        </div>
    )
}
