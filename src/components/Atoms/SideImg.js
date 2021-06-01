import React from 'react'

export default function SideImg(props) {
    return ( 
        <div>
            <div className="shadow-2xl h-screen relative">
                <img src={props.img} className=" object-cover h-screen" />
                <div className="bg-black opacity-40 absolute top-0 w-full h-screen"></div>
            </div>
            
        </div>
    )
}
