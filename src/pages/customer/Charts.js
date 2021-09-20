import axios from 'axios'
import React,{useEffect} from 'react'
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
            gggg
        </div>
    )
}
