import React from 'react'
import HeadingPRimary from '../../Atoms/customer/HeadingPRimary'
import SideLink from '../../Atoms/customer/SideLink'

export default function UploadVehicleImg(props) {
    return (
        <div className="flex justify-center my-5">
            <div className="w-9/12 flex justify-between items-center md:w-1/3">
                <div className="flex flex-col items-center">
                    <img src="/imgs/header2.jpg" className="w-32 h-32 rounded-full" />
                    <SideLink name="Upload image" />
                </div>
                <HeadingPRimary heading={props.Vno} />

            </div>


        </div>
    )
}
