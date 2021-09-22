import React from 'react'
import Card_services from '../Atoms/Card_services'
// import ss from '/imgs/Icons/Servicewash.png';
export default function Header_Grid() {
    return (
        <div>
            <div className="flex flex-col md:flex-row w-10/12 mx-auto items-center justify-center">
                <Card_services service="Washing " img={"/imgs/Icons/Servicewash.png"} />
                <Card_services service="General Repairs" img="/imgs/Icons/services.png" />
                <Card_services service=" Wheel Allignment" img="/imgs/Icons/Wheelalignment.png" />
                <Card_services service="Express Maintanance" img="/imgs/Icons/HighTech.png" />
            </div>
        </div>
    )
}
