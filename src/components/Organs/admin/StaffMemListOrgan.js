import React,{useState,useEffect} from 'react'
import StaffMemListSlide from '../../Moleculars/admin/StaffMemListSlide';
import axios from 'axios';
export default function StaffMemListOrgan() {
    
    const [admin,setadmin] = useState([])

     var submit = () => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/getadmins`)
            .then(function (response) {
                // handle success
                console.log(response.data);
                // alert(response.data);
                setadmin(response.data);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed

            });
    }

    useEffect(() => {submit();}, [])


    return (
        <div className="bg-white p-3 shadow-xl rounded-lg w-auto ">
            {admin.map(t=><StaffMemListSlide idNum={t.id} userName={t.firstName +" "+t.lastname} key={t.id}/>)}
        </div>
    )
}

