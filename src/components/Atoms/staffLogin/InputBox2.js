import React from 'react'

export default function InputBox2(props) {
    return (
        <div class="my-2">
            <h1 className="font-normal font-primary">{props.lable}</h1>
            <input type="text" placeholder={props.name} className=" rounded-lg shadow-lg h-7 w-36 md:h-10 md:w-52 lg:h-10 xl:w-72 xl:h-12 lg:w-64  float-left"/>
        </div>
    )
}
