
import AdminSideBar from '../../components/Moleculars/admin/AdminSideBar';
import DashBoardVehicleInfoCard from '../../components/Moleculars/admin/DashBoardVehicleInfoCard';
import DashBoardVehicleInfoSectionHeadingMolecular from '../../components/Moleculars/admin/DashBoardVehicleInfoSectionHeadingMolecular';
import DashBoardSectionDetails from '../../components/Organs/admin/DashBoardSectionDetails';
import DashBoardTransactionOrgan from '../../components/Organs/admin/DashBoardTransactionOrgan';
import Popup from 'reactjs-popup';
import Clock from 'react-live-clock';
import 'reactjs-popup/dist/index.css';

import { useState, useEffect } from 'react';
import DashboardStatusCardsGrid from '../../components/Organs/admin/DashboardStatusCardsGrid';
import SectionHeading from '../../components/Atoms/SectionHeading';
import axios from 'axios';
import { getCookie } from '../../jsfunctions/cookies';


export default function AdminDashboard() {
    const [sectionName, setsectionName] = useState("");
    const [ongoingRepair, setongoingRepair] = useState([]);

    var config = {
        headers: {
            'Authorization': 'Bearer ' + getCookie('token'),
        }
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/section/getongoingvehicles/${sectionName}`, config)
            .then(function (response) {
                console.log(response.data);
                setongoingRepair(response.data);
            })
    }, [sectionName])

    const [transactions, setTransactions] = useState([]);
    const [transactionsTotal, setTransactionsTotoal] = useState(0);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/gettodaytransactions`, config)
            .then(function (response) {
                console.log(response.data);
                setTransactions(response.data);
                response.data.map(transaction => {
                    setTransactionsTotoal(transactionsTotal + transaction.amount)
                })

            })


    }, [])

    return (
        <div className=" ">
            <div className="md:ml-40 bg-Background-0"><AdminSideBar name="DashBoard " roleName="Admin" /></div>
            <div className="w-full absolute  bg-Background-0">
                <div className="md:ml-40">
                    <div className="w-full mt-3 rounded-lg h-96 p-5 sm:-mt-12 xl:-mt-32">
                        <div className=" border-0 h-80 mt-2 flex justify-center items-center">
                            <DashboardStatusCardsGrid />
                        </div>
                    </div>
                    <div className=" hidden  sm:flex justify-center w-full sm:mt-44 md:mt-44 lg:mt-32 xl:mt-16 mb-2">
                        <div className=" w-96 h-20 flex justify-center items-center">
                            <div className="bg-white   rounded-xl shadow-2xl font-primary text-xl p-4 w-96">
                                <Clock timezone={'Asia/Colombo'} format="dddd, Do, MMMM, YYYY  " />
                            </div>
                            <div className="bg-white ml-10  rounded-xl shadow-2xl font-primary text-4xl p-4 w-full">
                                <Clock timezone={'Asia/Colombo'} format="HH:mm:ss" interval={1000} ticking={true} />
                            </div>
                        </div>

                    </div>
                    <div className="">
                        <div className="grid grid-cols-1 mt-80 place-items-center sm:-mt-20 md:-mt-20 md:grid-cols-2">
                            <div className="bg-white px-9 rounded-xl shadow-xl mr-4 w-11/12 ml-6 h-auto py-3 mt-64 mb-9 sm:mt-32">
                                <DashBoardVehicleInfoSectionHeadingMolecular sectionName={sectionName} setsectionName={setsectionName} />
                                <div className="bg-white overflow-auto w-full h-64 mt-6">
                                    {ongoingRepair.map(repair => <DashBoardVehicleInfoCard repair={repair} />)}
                                    <DashBoardVehicleInfoCard vehicleNumber="CAZ-4079" repair=""/>
                                    <DashBoardVehicleInfoCard vehicleNumber="69-56089" repair=""/>
                                   
                                    {/* <DashBoardSectionDetails /> */}
                                </div>
                            </div>
                            <div className="bg-white px-9 rounded-xl shadow-xl ml-2  w-11/12 h-auto overflow-auto py-3  mb-9 sm:mt-32">
                                <div className="font-xl text-lg flex justify-center">Today's Transaction History</div>
                                <div className=" overflow-auto w-full h-64 mt-6">
                                    {transactions.map(transaction =>
                                        <DashBoardTransactionOrgan price={transaction.amount} number={transaction.vehicleNo} />
                                    )}
                                    {/* <DashBoardTransactionOrgan price="3260" number="CAZ-4079" />
                                    <DashBoardTransactionOrgan price="1400" number="ABC-6839" />
                                    <DashBoardTransactionOrgan price="1050" number="45-4502" /> */}

                                    <DashBoardTransactionOrgan price={transactionsTotal} number="TOTAL" />
                                    {/* <DashBoardTransactionOrgan price="3260" number="CAZ-4079"/>
                                                <DashBoardTransactionOrgan price="1400" number="ABC-6839"/>
                                                <DashBoardTransactionOrgan price="1050" number="45-4502"/> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
