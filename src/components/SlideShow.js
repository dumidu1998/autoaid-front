import React from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

export default function SlideShow() {
    return (
        <div>
            <div className="slide-container">
                <Fade>
                    <div className="each-fade">
                    <div className="image-container">
                        <img src="/imgs/header1.jpg"  className="w-full h-screen" />
                    </div>
                    
                    </div>
                    <div className="each-fade">
                    <div className="image-container">
                        <img src="/imgs/header2.jpg"  className="w-full h-screen"/>
                    </div>
                    
                    </div>
                    <div className="each-fade">
                    <div className="image-container">
                        <img src="/imgs/header3.jpg"  className="w-full h-screen"/>
                    </div>
                    
                    </div>
                </Fade>
                
            </div>

            
        </div>
    )
}
