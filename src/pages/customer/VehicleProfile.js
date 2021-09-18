import React, { useEffect, useState } from 'react'
import UploadVehicleImg from '../../components/Moleculars/customer/UploadVehicleImg'
import DetailsShowing from '../../components/Moleculars/customer/DetailsShowing'
import HeadingPRimary from '../../components/Atoms/customer/HeadingPRimary'
import SideLink from '../../components/Atoms/customer/SideLink'
import BottomNav from '../../components/Moleculars/customer/BottomNav'
import TopNav from '../../components/Moleculars/customer/TopNav'
import { useParams } from 'react-router'
import { getCookie } from '../../jsfunctions/cookies'
import axios from 'axios'

var config = {
    headers: {
        'Authorization': 'Bearer ' + getCookie('token'),
    }
}
var d = new Date();
export default function VehicleProfile() {
    const { vid } = useParams();
    const [vehicleDetails, setvehicleDetails] = useState({ model: "12312", engineNo: "12312", chassisNo: "12312", vin: "12312", make: "" });
    const [vehicleSummary, setvehicleSummary] = useState({
        "total": 0.0,
        "totalMonth": 0.0,
        "avg": 0.0,
        "avgRep": 0.0,
        "activeRe": 0
    });
    const [vehicleHistory, setvehicleHistory] = useState({});
    const showonlyfirst5 = (data) => '*'.repeat(Math.min(data.length - 5, 5)) + data.slice(-5);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/customer/vehicledetails/${vid}`, config)
            .then((res) => {
                setvehicleDetails(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .then(() => {
                axios.get(`${process.env.REACT_APP_API_BASE_URL}/customer/vehicleexpenses/${vid}`, config)
                    .then((res) => {
                        setvehicleSummary(res.data);
                        console.log(res.data.total.toLocaleString("en", { useGrouping: false, minimumFractionDigits: 2 }));
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            });
    }, [vid])

    return (
        <div className="mb-20">
            <TopNav />
            <UploadVehicleImg />
            <div className="md:flex md:justify-center ">
                <div className="flex items-center justify-center my-5">
                    <div className="w-10/12 md:bg-white md:p-5 md:rounded-lg md:shadow-lg md:w-10/12 md:my-5 md:mx-5">
                        <div className="flex justify-between">
                            <HeadingPRimary heading="Expenses" />
                            <SideLink name="View Details" />
                        </div>
                        <div className="flex flex-wrap justify-between my-5">
                            <DetailsShowing data={`Rs.${vehicleSummary.total.toLocaleString("en", { useGrouping: false, minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} dataHeading="Total Expenditure" />
                            <DetailsShowing data={`Rs.${vehicleSummary.totalMonth.toLocaleString("en", { useGrouping: false, minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} dataHeading={`Expenses in ${d.toLocaleString('default', { month: 'long' })}`} />
                            <DetailsShowing data={`Rs.${vehicleSummary.avg.toLocaleString("en", { useGrouping: false, maximumFractionDigits: 2 })}`} dataHeading="Avg. Expenditure/Month" />
                            <DetailsShowing data={`Rs.${vehicleSummary.avgRep.toLocaleString("en", { useGrouping: false, minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} dataHeading="Active Repairs" />
                            <DetailsShowing data={`Rs.${vehicleSummary.activeRe.toLocaleString("en", { useGrouping: false, minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} dataHeading="Avg. Repairs/ Month" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center my-5">
                    <div className="w-10/12 md:bg-white md:p-5 md:rounded-lg md:shadow-lg md:w-10/12 md:my-5 md:mx-5">
                        <div className="flex justify-between">
                            <HeadingPRimary heading="Vehicle " heading2="Details" />
                        </div>
                        <div className="flex flex-wrap  justify-between my-5">
                            <DetailsShowing data={showonlyfirst5(vehicleDetails.vin)} dataHeading="VIN No." />
                            <DetailsShowing data={showonlyfirst5(vehicleDetails.chassisNo)} dataHeading="Chassis No." />
                            <DetailsShowing data={showonlyfirst5(vehicleDetails.engineNo)} dataHeading="Engine No." />
                            <DetailsShowing data={showonlyfirst5(vehicleDetails.model)} dataHeading="Vehicle Model" />
                            <DetailsShowing data={vehicleDetails.make} dataHeading="Vehicle type" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center my-5 md:w-full">
                <div className="w-10/12 md:bg-white md:p-5 md:rounded-lg md:shadow-lg md:w-1/3 md:my-5 md:mx-5">
                    <div className="flex justify-between">
                        <HeadingPRimary heading="Repair " heading2="History" />
                    </div>
                    <table className="w-full table-auto">
                        <tbody>
                            <tr className="border">
                                <td className="p-2">2021.05.05</td>
                                <td >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </td>
                            </tr>
                            <tr className="border">
                                <td className="p-2">2021.05.05</td>
                                <td >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <BottomNav />
        </div>
    )
}
