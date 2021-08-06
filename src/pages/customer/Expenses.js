import React from 'react'
import BarChart from '../../components/Moleculars/BarChart'
import TopNav from '../../components/Moleculars/customer/TopNav'
import DoughnutChart from '../../components/Moleculars/DoughnutChart'

export default function Expenses() {
    return (
        <div className="flex flex-col items-center">
            <TopNav/>

            <div className="flex w-10/12 justify-around items-center mt-20">
                <BarChart/>
                <DoughnutChart/>
                
            </div>
        </div>
    )
}
