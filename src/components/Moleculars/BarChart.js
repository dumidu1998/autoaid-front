import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { getCookie } from '../../jsfunctions/cookies';


var config = {
    headers: {
        'Authorization': 'Bearer ' + getCookie('token'),
    }
}
var months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export default function BarChart() {

    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/customer/getcharts/${getCookie('userId')}`
            // , config
        )
            .then(function (response) {
                console.log(response.data);
                setdata(response.data);
            })
    }, [])

    return (
        <div>
            <Bar
                data={{
                    labels: data.map(a => months[a[1]]),
                    datasets: [{
                        label: '# expenses',
                        data: data.map(a => a[0]),
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                }}
                width={500}
                height={320}
                options={{ maintainAspectRatio: false }} />
        </div>
    )
}
