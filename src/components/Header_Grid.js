import React from 'react'
import Card_services from './Card_services'

export default function Header_Grid() {
    return (
        <div>
            <div className="flex flex-col md:flex-row w-10/12 mx-auto items-center justify-center">
                <Card_services service="Service "/>
                <Card_services service="General Repairs"/>
                <Card_services service=" Wheel Allignment"/>
                <Card_services service="High tech"/>
            </div>
        </div>
    )
}
