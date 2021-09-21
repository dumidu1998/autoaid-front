import React from 'react'

export default function PopBtnOne(props) {
    let btnStyle="font-primary w-16 h-10 bg-blue-400 rounded-lg shadow-xl text-white ";
    btnStyle+=props.popUpBtnOneColor;
    return (
        <div>
            <button className={btnStyle}>{props.popUpBtnOne}</button>
        </div>
    )
}
