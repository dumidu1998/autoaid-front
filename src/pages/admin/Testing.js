// import { Dialog, Transition } from '@headlessui/react'
// import { Fragment, useState } from 'react'

// export default function Testing() {
//   let [isOpen, setIsOpen] = useState(true)

//   function closeModal() {
//     setIsOpen(false)
//   }

//   function openModal() {
//     setIsOpen(true)
//   }

//   return (
//     <>
//       <div className="fixed inset-0 flex items-center justify-center">
//         <button
//           type="button"
//           onClick={openModal}
//           className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
//         >
//           Open dialog
//         </button>
//       </div>

//       <Transition appear show={isOpen} as={Fragment}>
//         <Dialog
//           as="div"
//           className="fixed inset-0 z-10 overflow-y-auto"
//           onClose={closeModal}
//         >
//           <div className="min-h-screen px-4 text-center">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <Dialog.Overlay className="fixed inset-0" />
//             </Transition.Child>

//             {/* This element is to trick the browser into centering the modal contents. */}
//             <span
//               className="inline-block h-screen align-middle"
//               aria-hidden="true"
//             >
//               &#8203;
//             </span>
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 scale-95"
//               enterTo="opacity-100 scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 scale-100"
//               leaveTo="opacity-0 scale-95"
//             >
//               <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
//                 <Dialog.Title
//                   as="h3"
//                   className="text-lg font-medium leading-6 text-gray-900"
//                 >
//                   Payment successful
//                 </Dialog.Title>
//                 <div className="mt-2">
//                   <p className="text-sm text-gray-500">
//                     Your payment has been successfully submitted. We’ve sent
//                     your an email with all of the details of your order.
//                   </p>
//                 </div>

//                 <div className="mt-4">
//                   <button
//                     type="button"
//                     className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
//                     onClick={closeModal}
//                   >
//                     Got it, thanks!
//                   </button>
//                 </div>
//               </div>
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition>
//     </>
//   )
// }

// import React from "react";

// const Tabs = ({ color }) => {
//   const [openTab, setOpenTab] = React.useState(1);
//   return (
//     <>
//       <div className="flex flex-wrap">
//         <div className="w-full">
//           <ul
//             className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
//             role="tablist"
//           >
//             <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
//               <a
//                 className={
//                   "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
//                   (openTab === 1
//                     ? "text-white bg-" + color + "-600"
//                     : "text-" + color + "-600 bg-white")
//                 }
//                 onClick={e => {
//                   e.preventDefault();
//                   setOpenTab(1);
//                 }}
//                 data-toggle="tab"
//                 href="#link1"
//                 role="tablist"
//               >
//                 <i className="fas fa-space-shuttle text-base mr-1"></i> Profile
//               </a>
//             </li>
//             <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
//               <a
//                 className={
//                   "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
//                   (openTab === 2
//                     ? "text-white bg-" + color + "-600"
//                     : "text-" + color + "-600 bg-white")
//                 }
//                 onClick={e => {
//                   e.preventDefault();
//                   setOpenTab(2);
//                 }}
//                 data-toggle="tab"
//                 href="#link2"
//                 role="tablist"
//               >
//                 <i className="fas fa-cog text-base mr-1"></i>  Settings
//               </a>
//             </li>
//             <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
//               <a
//                 className={
//                   "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
//                   (openTab === 3
//                     ? "text-white bg-" + color + "-600"
//                     : "text-" + color + "-600 bg-white")
//                 }
//                 onClick={e => {
//                   e.preventDefault();
//                   setOpenTab(3);
//                 }}
//                 data-toggle="tab"
//                 href="#link3"
//                 role="tablist"
//               >
//                 <i className="fas fa-briefcase text-base mr-1"></i>  Options
//               </a>
//             </li>
//           </ul>
//           <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
//             <div className="px-4 py-5 flex-auto">
//               <div className="tab-content tab-space">
//                 <div className={openTab === 1 ? "block" : "hidden"} id="link1">
//                   <p>
//                     Collaboratively administrate empowered markets via
//                     plug-and-play networks. Dynamically procrastinate B2C users
//                     after installed base benefits.
//                     <br />
//                     <br /> Dramatically visualize customer directed convergence
//                     without revolutionary ROI.
//                   </p>
//                 </div>
//                 <div className={openTab === 2 ? "block" : "hidden"} id="link2">
//                   <p>
//                     Completely synergize resource taxing relationships via
//                     premier niche markets. Professionally cultivate one-to-one
//                     customer service with robust ideas.
//                     <br />
//                     <br />
//                     Dynamically innovate resource-leveling customer service for
//                     state of the art customer service.
//                   </p>
//                 </div>
//                 <div className={openTab === 3 ? "block" : "hidden"} id="link3">
//                   <p>
//                     Efficiently unleash cross-media information without
//                     cross-media value. Quickly maximize timely deliverables for
//                     real-time schemas.
//                     <br />
//                     <br /> Dramatically maintain clicks-and-mortar solutions
//                     without functional solutions.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default function TabsRender() {
//   return (
//     <>
//       return <Tabs color="pink" />;
//     </>
//   );
// }


// import ModalCard from "./ModalCard";
// import React from "react";
// import { Button, Grid, TextField } from "@material-ui/core";
// import Popup from "reactjs-popup";
// import PopUp from "../../components/Atoms/admin/PopUp";


// export default function Testing() {
//   const [result, setResult] = React.useState();
//   const [title, setTitle] = React.useState("My Modal Title");

//   const onClick = async () => {
//     let result = await ModalCard.show({ title });
//     setResult(result);
//   };
//   const handleChange = (event) => {
//     setTitle(event.target.value);
//   };

//   return (
//     <div className="App">
//       <Grid container direction="column" justify="center" alignItems="center">
//         <TextField
//           id="standard-basic"
//           label="Modal Title"
//           value={title}
//           onChange={handleChange}
//         />
//         <br />
//         <Button variant="contained" onClick={onClick} color="primary">
//           Open Material-UI moda
//         </Button>
//       </Grid>
//       <br />
//       Custom Alert Card result is:
//       {result == null ? "empty" : result ? "Yes" : "No"}
//       <PopUp/>
//     </div>
//   );
// }
 import React from 'react'
import PopUp from '../../components/Atoms/admin/PopUp'
 
 export default function Testing() {
   return (
     <div className="flex justify-center items-center h-screen w-full">
       <PopUp 
          clickbtnName="click" 
          clickbtnColor="bg-Secondary-0" 
          Heading1="Are you sure ?" 
          popUpBtnOne="Yes" 
          popUpBtnOneColor="bg-red-600"
          popUpBtnTwo="No" 
          popUpBtnTwoColor="bg-green-600"/>
     </div>
   )
 }
 