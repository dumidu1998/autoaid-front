// import React, { useState } from 'react';
// import DashBoardSectionVehicleHeading from '../../Atoms/admin/DashBoardSectionVehicleHeading';
// class DashBoardVehicleInfoSectionHeadingMolecular extends Component {
//     state = {  }
//     render() { 
        
//         return (  
//             <div className="flex justify-between">
//                 <button><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
//                 </svg></button>
//                 <DashBoardSectionVehicleHeading number={num}/>
//                         <button><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
//         </svg></button>
//             </div>

// const [num, setnum] = useState(5);
// function increment(){
//     setnum(num++);
// }
//         );
//     }
// }
 
// export default DashBoardVehicleInfoSectionHeadingMolecular;

import React,{useState} from 'react'
import DashBoardSectionVehicleHeading from '../../Atoms/admin/DashBoardSectionVehicleHeading';
export default function DashBoardVehicleInfoSectionHeadingMolecular() {

const [num, setnum] = useState(5);
function increment(){
    setnum(num+1);
}
function decrement(){
    setnum(num-1);
}

            
    return (
        <div>
            <div className="flex justify-between">
                <button onClick={()=>decrement()}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg></button>
                <DashBoardSectionVehicleHeading number={num}/>
                        <button onClick={()=>increment()} ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg></button>
            </div>

        </div>
    )
}

