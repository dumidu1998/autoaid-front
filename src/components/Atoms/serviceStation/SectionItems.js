import React from 'react'

export default function SectionItems(props) {
    return (
        <div className="w-full bg-white shadow-2xl  rounded-lg h-16 flex items-center mt-5">
            <div className="flex flex-col  items-start   w-9/12 ml-12">
                <div>
                    {props.itemName}
                </div>
                <div>
                    {props.itemTime}    
                </div>
            </div>
            <div>
                <button className="text-white font-primary bg-blue-500 rounded-lg shadow-xl w-16 h-12 ml-5">Add</button>
            </div>
        </div>
    )
}
