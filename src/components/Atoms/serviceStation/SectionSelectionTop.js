import React from 'react'

export default function SectionSelectionTop(props) {
    return (
        <div>
            <div className="w-screen    h-24 bg-forth-0 rounded-b-3xl flex items-center justify-center">
                {/* <div className=" flex w-9/12 justify-center  items-center"> */}
                    <h1 className=" font-primary text-3xl text-white mr-44">{props.heading1}</h1>
                {/* </div> */}
            </div>
        </div >
    )
}
