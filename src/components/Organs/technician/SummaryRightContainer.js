import React from 'react'
import RightContainerHeader from '../../Atoms/serviceStation/RightContainerHeader'
import DetailsShowing from '../../Moleculars/customer/DetailsShowing'

export default function SummaryRightContainer() {
    return (
        <div className="w-1/3 h-1/2 bg-white shadow-lg rounded-lg flex flex-col items-center p-5 my-10">
            <div className="flex flex-col items-center">
                <RightContainerHeader text="Vehicle Details"/>
                <div className="flex flex-wrap justify-between my-5">
                                <DetailsShowing data="Rs. 5125.00" dataHeading="Total Expenditure" />
                                <DetailsShowing data="Rs. 2500.00" dataHeading="Expenses in May" />
                                <DetailsShowing data="Rs. 1500.00" dataHeading="Avg. Expenditure/Month" />
                                <DetailsShowing data="1" dataHeading="Active Repairs" />
                                <DetailsShowing data="2" dataHeading="Avg. Repairs/ Month" />

                </div>
            </div>
        </div>
    )
}
