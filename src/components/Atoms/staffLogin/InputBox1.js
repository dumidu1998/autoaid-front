import React from 'react'

export default function InputBox1(props) {
    return (
        <div class="my-2">
            <h1 className="font-normal font-primary">{props.lable}</h1>
            <input type="text" placeholder="Name" className=" rounded-lg shadow-lg h-10 sm:w-10 float-left">{props.Name}</input>
        </div>
    )
}
