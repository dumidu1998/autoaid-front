import React, { useEffect, useState } from 'react'
import TopNav from '../../components/Moleculars/customer/TopNav'
import Invoice from '../../components/Moleculars/Invoice'
import { useLocation } from 'react-router'
import axios from 'axios';

export default function InvoiceHistory() {
    const [data, setdata] = useState({ invoiceDate: '123 123', services: [], materials: [], amount: 0 });
    const location = useLocation();
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/invoice/byrepairid/${location.state}`).then(e => {
            setdata(e.data);
            console.log(e.data);
        })
    }, [])
    return (
        <div>
            <TopNav />
            <div className="my-10">
                <Invoice data={data} />

            </div>
        </div>
    )
}
