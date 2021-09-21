import React from 'react'
import ButtonRedProps from '../../components/Atoms/stockKeeper/ButtonRedProps'
import CashierSideBar from '../../components/Moleculars/cashier/CashierSideBar'
import Invoice from '../../components/Moleculars/Invoice'

export default function PaymentInvoice() {
    return (
        <div className="">
            <div className="md:ml-40 "><CashierSideBar name="DashBoard" roleName="Cashier"/></div>
            <div className=" w-full bg-Background-0 absolute  py-5">
                <div className="md:ml-40 ">
                    {/* <div className="font-primary text-xl font-medium ml-6 mt-8 md:text-2xl lg:text-3xl xl:text-4xl">Sections</div> */}
                    <div className="my-10 flex flex-col items-center space-y-7">
                        <Invoice/>
                        <ButtonRedProps name="Paid" />
                    </div>
                </div>
            </div>
        </div>
    )
}
