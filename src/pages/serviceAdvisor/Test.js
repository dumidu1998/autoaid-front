import React from 'react'
import RoundContainer from '../../components/Atoms/RoundContainer'

export default function Test() {
    return (
        <div className="flex items-center justify-center bg-Secondary-0 h-screen ">
            <div className="w-9/12  bg-forth-0 h-48 rounded-lg shadow-lg flex flex-col items-center text-white relative ">
                <h1 className="font-secondary">hello</h1>
                <h1 className="font-secondary">hello world</h1>
                <h1 className="font-secondary">hello hello world</h1>

                <div className="w-9/12 flex absolute -bottom-12 left-2">
                    <RoundContainer img="/imgs/icons/repair.png"/>
                    <RoundContainer img="/imgs/icons/repair.png"/>
                    <RoundContainer img="/imgs/icons/repair.png"/>
                </div>
            </div>
        </div>
    )
}
