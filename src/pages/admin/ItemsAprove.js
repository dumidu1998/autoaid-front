import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from '../../components/Atoms/Button'
import ButtonRedProps from '../../components/Atoms/stockKeeper/ButtonRedProps'
import AdminSideBar from '../../components/Moleculars/admin/AdminSideBar'
import ItemApprovemolecule from '../../components/Moleculars/admin/ItemApprovemolecule'
import { getCookie } from '../../jsfunctions/cookies'

var config = {
    headers: {
        'Authorization': 'Bearer ' + getCookie('token'),
    }
}

export default function ItemsAprove() {
    const [results, setresults] = useState([])
    const [price, setprice] = useState(0);
    const [changer, setchanger] = useState(false)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/getspecialrequests`, config)
            .then(e => {
                setresults(e.data);
            })

    }, [changer])

    return (
        <div className="">
            <div className="md:ml-40 bg-Background-0 h-full"><AdminSideBar name="Items Aprove" roleName="Admin" /></div>
            <div className=" w-full absolute  bg-Background-0 h-full">
                <div className="md:ml-40">
                    <div className="flex flex-col items-center my-10 mr-24 font-primary ml-20 mt-32" >
                        {results.map(e => (
                            <ItemApprovemolecule e={e} changer={setchanger} />
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}
