import React from 'react'
import Header_Grid from '../Moleculars/Header_Grid'
import SlideShow from '../Moleculars/SlideShow'
import ButtonHover from '../Atoms/ButtonHover'

export default function Header() {
    return (
        <div>
            <div>
                <SlideShow/>


            </div>
            <div className="relative flex  items-center justify-center bg-third-0 md:bg-transparent">


                <div  className="md:absolute md:-bottom-32 z-40" >
                    <Header_Grid/>

                </div>
            </div>
        </div>
    )
}
