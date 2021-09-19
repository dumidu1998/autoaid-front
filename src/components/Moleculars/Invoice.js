import { Tab } from '@headlessui/react'
import React from 'react'

export default function Invoice() {
    return (
        <div className="w-screen flex relative">
            <div className=" flex items-center justify-center bg-gradient-to-br from-Secondary-0 to-primary-0 w-1/3 h-screen">
            </div>
                <div className="w-9/12 flex justify-between absolute left-40 top-24 bg-gray-400">
                    <div>
                        <h1>Invoice To :- </h1>
                        <p>Dumidu Kasun</p>
                        <p>388/53 hospital road</p>
                        <p>Weyangoda</p>
                        <p>005509830</p>
                    </div>
                    <div>
                        <h1>INVOICE</h1>
                        <p>Invoice no :-  12345</p>
                        <p>Date :-  2021/3/3</p>
                    </div>
                </div>
                    <div className="w-screen flex justify-center items-center my-10 bg-blue-400">
                        <table>
                            <tr>
                                <td>a</td>
                                <td>b</td>
                                <td>c</td>
                            </tr>
                            <tr>
                                <td>a</td>
                                <td>b</td>
                                <td>c</td>
                            </tr>
                            <tr>
                                <td>a</td>
                                <td>b</td>
                                <td>c</td>
                            </tr>
                        </table>
                    </div>
        </div>
    )
}
