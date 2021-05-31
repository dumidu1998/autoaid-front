import React from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import ButtonHover from '../Atoms/ButtonHover';
import ButtonOutline from '../Atoms/ButtonOutline';

export default function SlideShow() {
    return (
        <div>
            <div className="slide-container w-screen">
                <Fade>
                    <div className="each-fade">
                    <div className="image-container relative">
                        <div className="w-full h-screen bg-black absolute opacity-70 top-0 z-20"></div>

                        <img src="/imgs/header1.jpg"  className="w-full h-screen" />
                        <div className="z-50 absolute bottom-1/4 right-1/2 text-white">
                            <ButtonHover txt="Book Now"/>

                        </div>
                        <div className="z-50 absolute bottom-1/4 left-1/2 ml-3 text-white">
                            <ButtonOutline txt="Register"/>
                        </div>
                    

                        <h1 className="absolute top-1/3 left-24 text-white z-50 font-primary text-6xl ">Get Your Service Done Today!!</h1>

                    </div>
                    
                    </div>
                    <div className="each-fade">
                    <div className="image-container relative">
                        <img src="/imgs/header2.jpg"  className="w-full h-screen"/>
                        <div className="w-full h-screen bg-black absolute opacity-70 top-0 z-20"></div>
                        <div className="z-50 absolute bottom-1/4 right-1/2 text-white">
                            <ButtonHover txt="Book Now"/>
                        </div>
                        <div className="z-50 absolute bottom-1/4 left-1/2 ml-3 text-white">
                            <ButtonOutline txt="Register"/>
                        </div>


                        <h1 className="absolute top-1/2 left-24 text-white z-50 font-primary text-6xl ">We Are the Best</h1>

                    </div>
                    
                    </div>
                    <div className="each-fade">
                    <div className="image-container relative">
                        <img src="/imgs/header3.jpg"  className="w-full h-screen"/>
                         <div className="w-full h-screen bg-black absolute opacity-70 top-0 z-20"></div>
                         <div className="z-50 absolute bottom-1/4 right-1/2 text-white">
                            <ButtonHover txt="Book Now"/>

                        </div>
                        <div className="z-50 absolute bottom-1/4 left-1/2 ml-3 text-white">
                            <ButtonOutline txt="Register"/>
                        </div>

                        <h1 className="absolute top-1/4 left-24 text-white z-50 font-primary text-6xl ">Come Today And Witeness Best Service</h1>

                    </div>
                    
                    </div>
                </Fade>
                
            </div>

            
        </div>
    )
}
