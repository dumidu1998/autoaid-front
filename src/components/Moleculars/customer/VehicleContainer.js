import React from 'react'

export default function VehicleContainer(props) {
    return (
        <div>
            <div className="bg-forth-0 rounded-xl flex items-center p-5 mt-3 shadow-lg">
                    <img src="/imgs/header2.jpg" className="w-24 h-24 rounded-full"/>
                    <div className="ml-12">

                        <h1 className="font-primary font-bold text-white">{props.reg}</h1>
                        <h1 className="font-primary text-sm text-white">Next Service</h1>
                        <p className="ont-primary text-sm text-Secondary-0">{props.time}</p>
                    </div>
            </div>
        </div>
    )
}
