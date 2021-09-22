import React from 'react'

export default function RoundContainer(props) {
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <img src={props.img} className=" w-24 h-24 md:w-36 md:h-36 rounded-full shadow-lg"/>
                <h1 className="font-primary font-bold text-lg md:text-xl mt-5 text-center text-current">{props.heading}</h1>
                <h1 className="font-primary font-light w-60 text-sm md:text-md mt-2 text-center text-current">{props.paragraph}</h1>
            </div>
            
        </div>
    )
}
