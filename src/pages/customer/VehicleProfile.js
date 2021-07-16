import React from 'react'
import UploadVehicleImg from '../../components/Moleculars/customer/UploadVehicleImg'
import DetailsShowing from '../../components/Moleculars/customer/DetailsShowing'
import HeadingPRimary from '../../components/Atoms/customer/HeadingPRimary'
import SideLink from '../../components/Atoms/customer/SideLink'
import BottomNav from '../../components/Moleculars/customer/BottomNav'

export default function VehicleProfile() {
    return (
        <div className="mb-20">
            

            <UploadVehicleImg />
            <div className="flex items-center justify-center my-5">

                <div className="w-10/12 md:bg-white md:p-5 md:rounded-lg md:shadow-lg md:w-1/3 md:my-5 md:mx-5">
                    <div className="flex justify-between">
                        <HeadingPRimary heading="Expenses" />
                        <SideLink name="View Details"/>
                    </div>
                    <div className="flex flex-wrap justify-between my-5">
                        <DetailsShowing data="Rs. 5125.00" dataHeading="Total Expenditure"/>
                        <DetailsShowing data="Rs. 2500.00" dataHeading="Expenses in May"/>
                        <DetailsShowing data="Rs. 1500.00" dataHeading="Avg. Expenditure/Month"/>
                        <DetailsShowing data="1" dataHeading="Active Repairs"/>
                        <DetailsShowing data="2" dataHeading="Avg. Repairs/ Month"/>

                    </div>

                </div>
            </div>

            <div className="flex items-center justify-center my-5">

                <div className="w-10/12 md:bg-white md:p-5 md:rounded-lg md:shadow-lg md:w-1/3 md:my-5 md:mx-5">
                    <div className="flex justify-between">
                        <HeadingPRimary heading="Vehicle Details" />
                    </div>
                    <div className="flex flex-wrap  justify-between my-5">
                        <DetailsShowing data="********1234" dataHeading="VIN No."/>
                        <DetailsShowing data="*****frd45" dataHeading="Chasis No."/>
                        <DetailsShowing data="*****54676" dataHeading="Engine No."/>
                        <DetailsShowing data="X-trail" dataHeading="Vehicle Model"/>
                        <DetailsShowing data="CAR (hy-brid)" dataHeading="Vehicle type"/>

                    </div>

                </div>
            </div>

             <div className="flex items-center justify-center my-5">

                <div className="w-10/12 md:bg-white md:p-5 md:rounded-lg md:shadow-lg md:w-1/3 md:my-5 md:mx-5">
                    <div className="flex justify-between">
                        <HeadingPRimary heading="Repair History" />
                    </div>
                    <table className="w-full">
                        <tr className="border">
                            <td className="p-2">2021.05.05</td>
                            <td >6</td>

                        </tr>
                        
                    </table>

                </div>
            </div>
            <BottomNav/>
        </div>
    )
}
