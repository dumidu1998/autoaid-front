import React from 'react'
import Header_Grid from './Header_Grid'
import SlideShow from './SlideShow'

export default function Header() {
    return (
        <div>
            <div className="relative md:flex items-center justify-center">
                {/* <SlideShow/> */}
                <img src="/imgs/header1.jpg " className="w-full h-screen z-20"/>
                <div className="w-full h-screen bg-black absolute opacity-40 top-0 z-20"></div>

                <div  className="md:absolute md:-bottom-32 z-40" >
                    <Header_Grid/>

                </div>
            </div>
        </div>
    )
}
