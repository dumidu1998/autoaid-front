import React from 'react'

export default function VehicleBtnCol() {
    return (
        <div>
            <div className="flex flex-col justify-between items-center">
                <div className=" rounded-lg lg:mr-5 xl:mr-12 z-10">
                    <img src="/imgs/car.jpg" className=" rounded-full w-44 h-44 shadow-xl"/>
                </div>
                <div className="flex justify-end lg:mr-5 xl:mr-12">
                    <div className="animate-bounce bg-white w-20 h-20 -mt-2 ">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
