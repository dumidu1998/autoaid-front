import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getCookie } from '../../../jsfunctions/cookies'
import DashboardStatusCards from '../../Atoms/admin/DashboardStatusCards'

var config = {
    headers: {
        'Authorization': 'Bearer ' + getCookie('token'),
    }
}
export default function DashboardStatusCardsGrid() { ///////////wada krne nttm hard code ktnn metnin
    const [data, setdata] = useState({ usergrow: 100, repairgrow: 150, newUsers: 150, newRepairs: 150, sales: 150, emps: 520 })
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/getstatistics`, config).then(res => {
            setdata(res.data);
        })
    }, [])

    return (
        <div className="px-3 mt-96 sm:mt-32 md:px-8 md:mt-32">
            <div className="container mx-auto max-w-full relative">
                <div className="grid grid-cols-1 mb-4 mt-64 w-auto md:mt-32 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 lg:mt-12 xl:mt-32">
                    <DashboardStatusCards
                        icon="https://img.icons8.com/pastel-glyph/64/000000/website--v2.png"
                        title="User Growth Rate"
                        amount={data.newUsers}
                        // percentage={data.usergrow} //users growth rate
                        percentage="-20.5"
                        percentageColor="red"
                        date="Since last month"
                        show="block"
                    />
                    <DashboardStatusCards
                        icon="https://img.icons8.com/ios/50/000000/sales-performance.png"
                        title="Total Sales so far"
                        // amount={data.sales}
                        amount="876"
                        show="hidden"
                        // percentage="1.10"
                        // percentageColor="orange"
                        // date="Since yesterday"
                    />
                    <DashboardStatusCards
                        icon="https://img.icons8.com/ios/50/000000/work.png"
                        title="Total Employee"
                        amount={data.emps} //total employees
                        show="hidden"
                        // percentage="12"
                        // percentageColor="green"
                        // date="Since last month"
                    />
                    <DashboardStatusCards
                        icon="https://img.icons8.com/ios/50/000000/add-administrator.png"
                        title="Repaire Groth Rate"
                        // amount={data.newRepairs}
                        amount="364"
                        // percentage={data.repairgrow} //repair growth rate
                        percentage="12"
                        percentageColor="green"
                        date="Since last week"
                        show="block"
                    />
                </div>
            </div>
        </div>
    )
}
