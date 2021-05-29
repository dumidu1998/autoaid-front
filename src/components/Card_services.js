import React from 'react'

export default function Card_services(props) {
    return (
        <div>
            <div className="w-44 h-60 bg-gradient-to-br from-primary-0 to-Secondary-0 rounded-md shadow-lg m-5 ">
                <h1 className="flex font-primary text-3xl text-white font-bold justify-center items-center text-center pt-10">{props.service}</h1>
                <h2>{props.details1}</h2>
                <h2>{props.details2}</h2>
                <h2>{props.details3}</h2>
                <h2>{props.details4}</h2>
            </div>
        </div>
    )
}
