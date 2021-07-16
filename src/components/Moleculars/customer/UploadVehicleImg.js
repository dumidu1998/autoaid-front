import React from 'react'
import HeadingPRimary from '../../Atoms/customer/HeadingPRimary'
import SideLink from '../../Atoms/customer/SideLink'

export default function UploadVehicleImg() {
    return (
        <div className="flex justify-center">
            <div className="w-8/12 flex justify-between items-center">
                <div className="flex flex-col items-center">
                    <img src="/imgs/header2.jpg" className="w-32 h-32 rounded-full"/>
                    <SideLink name="Upload image"/>
                </div>
                <HeadingPRimary heading="CAM-9044"/>
                
            </div>
            
            
        </div>
    )
}
