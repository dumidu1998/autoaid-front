import React from 'react'
import DashboardStatusCards from '../../components/Atoms/admin/DashboardStatusCards'

export default function Testing() {
    return (
        <div className="px-3 md:px-8 mt-32">
        <div className="container mx-auto max-w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
                <DashboardStatusCards
                    icon="https://img.icons8.com/pastel-glyph/64/000000/website--v2.png"
                    title="Traffic"
                    amount="350,897"
                    percentage="3.48"
                    percentageColor="green"
                    date="Since last month"
                /> 
                <DashboardStatusCards
                    icon="https://img.icons8.com/ios/50/000000/add-administrator.png"
                    title="New Users"
                    amount="2,356"
                    percentage="3.48"
                    percentageColor="red"
                    date="Since last week"
                />
                <DashboardStatusCards
                    icon="https://img.icons8.com/ios/50/000000/sales-performance.png"
                    title="Sales"
                    amount="924"
                    percentage="1.10"
                    percentageColor="orange"
                    date="Since yesterday"
                />
                <DashboardStatusCards
                    icon="https://img.icons8.com/ios/50/000000/work.png"
                    title="Performance"
                    amount="49,65%"
                    percentage="12"
                    percentageColor="green"
                    date="Since last month"
                />
            </div>
        </div>
    </div>
    )
}
