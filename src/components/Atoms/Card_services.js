import React from 'react'
import ReactFloaterJs from 'react-floaterjs'

export default function Card_services(props) {
    return (
        <div>
            <ReactFloaterJs>

                <div className=" w-56 h-60 bg-forth-0  rounded-md  hover:shadow-lg m-5 flex flex-col items-center ">
                    <h1 className="flex font-primary text-3xl text-white font-bold justify-center items-center text-center pt-10">{props.service}</h1>
                    <img src={props.img} className="w-20 absolute bottom-10" />
                    <h2>{props.details1}</h2>
                    <h2>{props.details2}</h2>
                    <h2>{props.details3}</h2>
                    <h2>{props.details4}</h2>
                </div>
            </ReactFloaterJs>
        </div>
    )
}
