// import { useEffect } from 'react';
// import {Chart} from 'chart.js';
// import Card from '@material-tailwind/react/Card';
// import CardHeader from '@material-tailwind/react/CardHeader';
// import CardBody from '@material-tailwind/react/CardBody';

// export default function chartsBarchart() {
//     useEffect(() => {
//         let config = {
//             type: 'bar',
//             data: {
//                 labels: [
//                     'January',
//                     'February',
//                     'March',
//                     'April',
//                     'May',
//                     'June',
//                     'July',
//                 ],
//                 datasets: [
//                     {
//                         label: new Date().getFullYear(),
//                         backgroundColor: 'FF7433',
//                         borderColor: 'FF7433',
//                         data: [30, 78, 56, 34, 100, 45, 13],
//                         fill: false,
//                         barThickness: 8,
//                     },
//                     {
//                         label: new Date().getFullYear() - 1,
//                         fill: false,
//                         backgroundColor: '#FFBE33',
//                         borderColor: '#FFBE33',
//                         data: [27, 68, 86, 74, 10, 4, 87],
//                         barThickness: 8,
//                     },
//                 ],
//             },
//             options: {
//                 maintainAspectRatio: false,
//                 responsive: true,
//                 title: {
//                     display: false,
//                     text: 'Orders Chart',
//                 },
//                 tooltips: {
//                     mode: 'index',
//                     intersect: false,
//                 },
//                 hover: {
//                     mode: 'nearest',
//                     intersect: true,
//                 },
//                 legend: {
//                     labels: {
//                         fontColor: 'rgba(17,17,17,.7)',
//                     },
//                     align: 'end',
//                     position: 'bottom',
//                 },
//                 scales: {
//                     xAxes: [
//                         {
//                             display: false,
//                             scaleLabel: {
//                                 display: true,
//                                 labelString: 'Month',
//                             },
//                             gridLines: {
//                                 borderDash: [2],
//                                 borderDashOffset: [2],
//                                 color: 'rgba(33, 37, 41, 0.3)',
//                                 zeroLineColor: 'rgba(33, 37, 41, 0.3)',
//                                 zeroLineBorderDash: [2],
//                                 zeroLineBorderDashOffset: [2],
//                             },
//                         },
//                     ],
//                     yAxes: [
//                         {
//                             display: true,
//                             scaleLabel: {
//                                 display: false,
//                                 labelString: 'Value',
//                             },
//                             gridLines: {
//                                 borderDash: [2],
//                                 drawBorder: false,
//                                 borderDashOffset: [2],
//                                 color: 'rgba(33, 37, 41, 0.2)',
//                                 zeroLineColor: 'rgba(33, 37, 41, 0.15)',
//                                 zeroLineBorderDash: [2],
//                                 zeroLineBorderDashOffset: [2],
//                             },
//                         },
//                     ],
//                 },
//             },
//         };
//         let ctx = document.getElementById('bar-chart').getContext('2d');
//         window.myBar = new Chart(ctx, config);
//     }, []);
//     return (
//         <Card>
//             <CardHeader className="bg-gradient-to-r from-red-400 to-yellow-500 " contentPosition="left">
//                 <h6 className="uppercase text-gray-200 text-xs font-medium font-primary" >
//                     Overview
//                 </h6>
//                 <h2 className="text-white text-2xl font-primary">Sales value</h2>
//             </CardHeader>
//             <CardBody>
//                 <div className="relative h-96 shadow-2xl bg-white rounded-lg p-4">
//                     <canvas id="bar-chart"></canvas>
//                 </div>
//             </CardBody>
//         </Card>
//     );
// }
