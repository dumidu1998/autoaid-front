import React from 'react'

export default function InputBox1(props) {
    return (
        <div>
            <h1 className="font-normal font-primary">{props.lable}</h1>
            <input type="text" placeholder="Name" className=" rounded-lg shadow-lg h-10 w-60 float-right">{props.Name}</input>
        </div>
    )
}
