import React from 'react'
import FormInput from '../../components/Atoms/FormInput'
import RoundContainer from '../../components/Atoms/RoundContainer'
import Addnew from '../../components/Atoms/serviceStation/Addnew'
import NavBar from '../../components/Moleculars/NavBar'
import InventoryModel from '../../components/Moleculars/technician/InventoryModel'

export default function Test() {
    return (
        <div className="flex flex-col min-h-screen">
            
            <div>
                <NavBar/>
            </div>
            <div className="flex-grow mt-24 item">
                hello
            </div>
            <footer>
                social links
            </footer>
        </div>
    )
}
