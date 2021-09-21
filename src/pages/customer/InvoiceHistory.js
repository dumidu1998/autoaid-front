import React from 'react'
import TopNav from '../../components/Moleculars/customer/TopNav'
import Invoice from '../../components/Moleculars/Invoice'

export default function InvoiceHistory() {
    return (
        <div>
            <TopNav/>
            <div className="my-10">
                <Invoice/>

            </div>
        </div>
    )
}
