import React, { useEffect, useState } from 'react'
import BottomNav from '../../components/Moleculars/customer/BottomNav'
import Addnew from '../../components/Atoms/serviceStation/Addnew'
import HeadingPRimary from '../../components/Atoms/customer/HeadingPRimary'
import DetailsShowing from '../../components/Moleculars/customer/DetailsShowing'
import SideLink from '../../components/Atoms/customer/SideLink'
import VehicleContainer from '../../components/Moleculars/customer/VehicleContainer'
import StatusViewer from '../../components/Moleculars/customer/StatusViewer'
import axios from 'axios';
import TopNav from '../../components/Moleculars/customer/TopNav'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export default function Index() {
    const [vehicles, setvehicles] = useState([])
    const [expenses, setexpenses] = useState({
        "total": 0,
        "totalMonth": 0,
        "avg": 0,
        "avgRep": 0,
        "activeRe": 0
    })

    var submit = async () => {

        axios.get(`${process.env.REACT_APP_API_BASE_URL}/customer/4`)
            .then(function (response) {
                // handle success
                setvehicles(response.data);
                console.log(vehicles);
                // alert(response.data);

            })
            .catch(function (error) {
                // handle error
                console.log(error.response.data);
            })
            .then(function () {
                // always executed

            });

        await axios.get(`${process.env.REACT_APP_API_BASE_URL}/customer/expenses/4`)
            .then(function (response) {
                // handle success
                setexpenses(response.data);
                console.log(expenses);
                console.log(response.data);
                // alert(response.data);

            })
            .catch(function (error) {
                // handle error
                console.log(error.response.data);
            })
            .then(function () {
                // always executed

            });
    }

    useEffect(() => {
        submit();
    }, [])



    return (
        <div className="mb-44">
            <div className="flex flex-col items-center">
                <TopNav />
                <div className="w-10/12 justify-center">
                    <div className="flex justify-center md:hidden">

                        <Addnew txt="Book Now" />
                    </div>
                    <div className="md:my-10">
                        <StatusViewer />
                    </div>
                    <div className="md:flex justify-center">

                        <div className="md:bg-white md:p-5 md:rounded-lg md:shadow-lg md:w-1/3 md:my-5 md:mx-5">
                            <div className="flex justify-between">
                                <HeadingPRimary heading="Expenses" />
                                <SideLink name="View Details" />
                            </div>
                            <div className="flex flex-wrap justify-between my-5">
                                <DetailsShowing data={expenses.total} dataHeading="Total Expenditure" />
                                <DetailsShowing data={expenses.totalMonth} dataHeading="Expenses in May" />
                                <DetailsShowing data={expenses.avg} dataHeading="Avg. Expenditure/Month" />
                                <DetailsShowing data={expenses.avgRep} dataHeading="Active Repairs" />
                                <DetailsShowing data={expenses.activeRe} dataHeading="Avg. Repairs/ Month" />

                            </div>

                        </div>
                        <div className="flex flex-col justify-center md:bg-white md:p-5 md:rounded-lg md:shadow-lg md:w-1/3 md:my-5 md:mx-5 ">
                            <HeadingPRimary heading="Vehicles" />
                            {vehicles.map((vehicle, index) => {
                                // console.log(course.title)
                                return (
                                    <Link to={"/customer/vehicle"}>
                                        <VehicleContainer reg={vehicle.vehicleNumber} time="200km / 3 Months" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>


                </div>
            </div>
            <BottomNav />
        </div>
    )
}
