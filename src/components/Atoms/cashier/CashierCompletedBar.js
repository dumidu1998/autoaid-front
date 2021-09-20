import React from 'react'
import CompletedBtn from './CompletedBtn'

export default function CashierCompletedBar(props) {
    return (
        <div>
            <div className="w-full bg-white rounded-lg shadow-xl flex items-center justify-between px-6 sm:px-8 md:px-10 lg:px-12 py-5">
                <div>
                    <p className="font-primary text-lg text-gray-700">{props.one}</p>
                </div>
                <div>
                    <p className="font-primary text-lg text-gray-700">{props.two}</p>
                </div>
                <div>
                    <CompletedBtn name={props.name}/>
                </div>
            </div>
        </div>
    )
}
