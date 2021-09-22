import axios from 'axios'
import React,{useEffect} from 'react'
import TopNav from '../../components/Moleculars/customer/TopNav'
import DoughnutChart from '../../components/Moleculars/DoughnutChart'
import BarChart from '../../components/Moleculars/BarChart'
import { getCookie } from '../../jsfunctions/cookies'

export default function Charts() {

    var config = {
        headers: {
            'Authorization': 'Bearer ' + getCookie('token'),
        }
    }

    useEffect(() => {
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/customer/getcharts/2`
        // , config
        )
            .then(function (response) {
                console.log(response.data);
                // setsectionDetails(response.data);
            })
    }, [])

    return (
        <div>
            <TopNav/>
            <div className="flex justify-evenly items-center my-10">
                <div className=" w-80 h-80 bg-white p-5 rounded-lg shadow-lg">
                    <DoughnutChart/>
               </div>
               <div className="w-80 h-80 bg-white p-5 rounded-lg shadow-lg">
                    <BarChart/>

               </div>

            </div>
        </div>
    )
}
