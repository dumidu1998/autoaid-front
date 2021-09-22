// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
// import { Dialog, Transition } from '@headlessui/react'
// import { Fragment, useState } from 'react'

// export default function DashboardSectionViewInfo(props) {
//   let [isOpen, setIsOpen] = useState(true)

//   function closeModal() {
//     setIsOpen(false)
//   }

//   function openModal() {
//     setIsOpen(true)
//   }

//   return (
//     <div>
//       <Popup trigger={< button className="bg-blue-600 transform hover:scale-110 w-24 h-10 text-sm font-bold font-primary rounded-md text-white sm:w-32">Vehicle Info</button>} position="bottom">
//         <div className=" bg-Background-0">
//           <div className="flex flex-col ">
//             {/* <div className="bg-white shadow-xl rounded-xl w-48 h-16 flex justify-center items-center mt-1 ">
//               <button type="button" onClick={openModal} className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">Open dialog</button>
//             </div> */}
//             <div className="bg-white shadow-xl rounded-xl w-48 h-16 flex justify-center items-center mt-3 ">
//               Vin: {props.repair.vin}
//             </div>
//             <div className="bg-white shadow-xl rounded-xl w-48 h-16 flex justify-center items-center mt-3 ">
//               Repair Stat: {props.repair.repairStatus}
//             </div>
//             <div className="bg-white shadow-xl rounded-xl w-48 h-16 flex justify-center items-center mt-3 ">
//               Customer: {props.repair.customerName}
//             </div>
//             <div className="bg-white shadow-xl rounded-xl w-48 h-16 flex justify-center items-center mt-3 ">
//               Contact: {props.repair.contactNo}
//             </div>
//           </div>
//         </div>
//       </Popup>
//     </div>
//   )
// }



import React from 'react'
import PopUp from './PopUp'
import VehicleInfoPopUp from './VehicleInfoPopUp'
 
 export default function DashboardSectionViewInfo(props) {
   return (
     <div>
       <VehicleInfoPopUp 
          clickbtnName="Vehicle Info" 
          clickbtnColor="bg-Secondary-0" 
          Heading1="" 
          popUpBtnOne="Yes" 
          popUpBtnOneColor="bg-red-600"
          popUpBtnTwo="No" 
          popUpBtnTwoColor="bg-green-600"
          vin={props.repair.vin}
          repairStatus={props.repair.repairStatus}
          customerName={props.repair.customerName}
          contactNo={props.repair.contactNo}
          />
     </div>
   )
 }
 