// import React, { Component } from 'react';
// class DashBoardSectionVehicleHeading extends Component {
//     state = {  }
//     render() { 
//         return ( 
//             <div>
//                 <div className="font-primary text-xl ">Section #</div>
//             </div>
//          );
//     }
// }
 
// export default DashBoardSectionVehicleHeading;

import React from 'react'

export default function DashBoardSectionVehicleHeading(props) {
    return (
        <div>
        <div className="font-primary text-xl ">Section #{props.number}</div>
    </div>
    )
}
