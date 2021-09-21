import React from 'react'
import SubSectionHeading from '../../components/Atoms/serviceStation/SubSectionHeading'
import TopNav from '../../components/Moleculars/customer/TopNav'

export default function CheckListPage() {
    return (
        <div className="flex flex-col items-center font-primary">
            <TopNav/>
            <div className="md:w-1/2 w-full rounded-md shadow-lg h-screen my-5 flex flex-col items-center ">
                <h1 className="font-semibold text-2xl  tracking-wider my-10">Vehicle Items Check List</h1>
                <table className="table-auto w-3/4  text-center bg-red-400">
                    <tr>
                        <td>Service Type</td>
                        <td>Millage</td>
                    </tr>
                    <tr>
                        <td>Repair</td>
                        <td>12345 km</td>
                    </tr>
                </table>
                <table className="table-auto w-3/4  text-center bg-red-400 my-10">
                    <tr>
                        <td>img</td>
                        <td>front</td>
                    </tr>
                    <tr>
                        <td>img</td>
                        <td>rear km</td>
                    </tr>
                </table>
                <table className="table-auto w-3/4  text-center bg-red-400 my-10">
                    <tr>
                        <td>img</td>
                        <td>front</td>
                    </tr>
                    <tr>
                        <td>img</td>
                        <td>rear km</td>
                    </tr>
                </table>

                <div className="w-3/4">
                    <h1 className="font-semibold text-lg  tracking-wide">Description</h1>
                    <p className=" text-sm tracking-wide">jdbisufsiuf ebfiuebfs sjbfisjebksjdf sbskjfbksjbf </p>
                </div>
                <div className="w-3/4 my-5">
                    <h1 className="font-semibold text-lg  tracking-wide">Items In the Vehicle</h1>
                    <p className=" text-sm tracking-wide"> Documents</p>
                    <p className=" text-sm tracking-wide"> Spare Wheel</p>
                </div>
                <table className="table-auto w-3/4  text-center my-10">
                    <tr>
                        <td>Carpet Count</td>
                        <td>Seat Covers</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>6</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}