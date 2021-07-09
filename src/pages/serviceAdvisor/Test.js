import React from 'react'
import RoundContainer from '../../components/Atoms/RoundContainer'
import Heading from '../../components/Atoms/staffLogin/Heading'
import InputBox1 from '../../components/Atoms/staffLogin/InputBox1'
import InputBox2 from '../../components/Atoms/staffLogin/InputBox2'
import Button from '../../components/Atoms/staffLogin/Button'

export default function Test() {
    return (
        <div className="flex items-center justify-center bg-Secondary-0 h-screen ">
            <div className="w-6/12  bg-forth-0 h-96 rounded-lg shadow-lg flex flex-col items-center justify-center text-white relative ">
                
                    <Heading/>
                    <InputBox1 lable=" Username"/>
                    <InputBox2 lable=" Passward"/>
                    <Button/>
                
            </div>
        </div>
    )
}
