import React from 'react'
import Card_services from '../Atoms/Card_services'

export default function Header_Grid() {
    return (
        <div>
            <div className="flex flex-col md:flex-row w-10/12 mx-auto items-center justify-center">
                <Card_services service="Service " img="/imgs/icons/Servicewash.png"/>
                <Card_services service="General Repairs" img="/imgs/icons/services.png"/>
                <Card_services service=" Wheel Allignment" img="/imgs/icons/Wheelalignment.png"/>
                <Card_services service="High tech" img="/imgs/icons/HighTech.png"/>
            </div>
        </div>
    )
}
