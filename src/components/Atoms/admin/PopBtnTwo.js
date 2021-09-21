import React from 'react'

export default function PopBtnTwo(props) {
    let btnStyle="font-primary w-16 h-10 bg-blue-400 rounded-lg shadow-xl text-white ";
    btnStyle+=props.popUpBtnTwoColor;
    return (
        <div>
            <button className={btnStyle}>{props.popUpBtnTwo}</button>
        </div>
    )
}
