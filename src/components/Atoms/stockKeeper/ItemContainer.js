import React from 'react'
import ButtonProps from './ButtonProps'
import ButtonSecond from './ButtonSecond'

export default function ItemContainer(props) {
    return (
        <div>
            <div className=" w-full h-36 shadow-lg bg-white mt-5 rounded-lg flex items-center justify-center">
                <div className="flex flex-row w-10/12 items-center justify-between">
                    <div>
                        <h1 className="my-4 font-bold font-primary text-gray-400">{props.itemNo}</h1>
                        <h1 className="my-4 font-bold font-primary text-gray-400">{props.repair}</h1>
                        
                    </div>
                    <div>
                        <h1 className="font-bold font-primary text-xl text-gray-400">{props.parts}</h1>
                    </div>
                    <div className="">
                        <div className="my-4">
                            <ButtonProps name="Accept" color="bg-green-600" />
                        </div>
                        <div className="my-4">
                            <ButtonProps name="Reject" color="bg-red-600" />
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    )
}
