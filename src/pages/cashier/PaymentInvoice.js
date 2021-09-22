import React, { useEffect, useState } from 'react'
import ButtonRedProps from '../../components/Atoms/stockKeeper/ButtonRedProps'
import CashierSideBar from '../../components/Moleculars/cashier/CashierSideBar'
import InvoiceCashier from '../../components/Moleculars/InvoiceCashier'
import { useLocation } from 'react-router'
import axios from 'axios';
import { getCookie } from '../../jsfunctions/cookies'

var config={
    header:{
        'Authorization': 'Bearer ' + getCookie('token'),
    }
}
export default function PaymentInvoice() {

    const [data, setdata] = useState({ invoiceDate: '123 123', services: [], materials: [], amount: 0 });
    const location = useLocation();

    useEffect(() => {
        console.log("use effect pay");
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/cashier/cashierGetRepairInvoice/${location.state}`,config).then(e => {
            setdata(e.data);
            console.log(e.data);
        })
    }, [])

    return (
        <div className="">
            <div className="md:ml-40 "><CashierSideBar name="DashBoard" roleName="Cashier"/></div>
            <div className=" w-full bg-Background-0 absolute  py-5">
                <div className="md:ml-40 ">
                    {/* <div className="font-primary text-xl font-medium ml-6 mt-8 md:text-2xl lg:text-3xl xl:text-4xl">Sections</div> */}
                    <div className="my-10 flex flex-col items-center space-y-7">

                        <InvoiceCashier data={data}/>
                        

                        <ButtonRedProps name="Paid" />
                    </div>
                </div>
            </div>
        </div>
    )
}
