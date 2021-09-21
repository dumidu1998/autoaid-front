import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getCookie } from '../../../jsfunctions/cookies';
import RightContainerHeader from '../../Atoms/serviceStation/RightContainerHeader'
import DetailsShowing from '../../Moleculars/customer/DetailsShowing'

const showonlyfirst5 = (data) => '*'.repeat(Math.min(data.length - 5, 5)) + data.slice(-5);
var config = {
    headers: {
        'Authorization': 'Bearer ' + getCookie('token'),
    }
}
export default function SummaryRightContainer(props) {
    // const [vehicleDetails, setvehicleDetails] = useState({})
    const [vehicleDetails, setvehicleDetails] = useState({ model: "", engineNo: "", chassisNo: "", vin: "", make: "", vehicleNumber: "" });

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/technician/vehiclebyid/${props.repairid}`, config)
            .then(function (response) {
                // handle success
                setvehicleDetails(response.data);
                console.log(response.data);
                // alert(response.data);

            })
            .catch(function (error) {
                // handle error
                // console.log(error.response.data);
            })

    }, [props.repairid])

    return (
        <div className=" bg-white shadow-lg rounded-lg flex flex-col items-center p-5 mt-10 mb-6 w-11/12">
            <div className="flex flex-col items-center">
                <RightContainerHeader text="Vehicle Details" />
                <div className="flex flex-wrap justify-between my-5 ml-14">
                    <DetailsShowing data={vehicleDetails.vin} dataHeading="VIN No." />
                    <DetailsShowing data={vehicleDetails.chassisNo} dataHeading="Chassis No." />
                    <DetailsShowing data={vehicleDetails.engineNo} dataHeading="Engine No." />
                    <DetailsShowing data={vehicleDetails.model} dataHeading="Vehicle Model" />
                    <DetailsShowing data={vehicleDetails.make} dataHeading="Vehicle type" />
                </div>
            </div>
        </div>
    )
}


