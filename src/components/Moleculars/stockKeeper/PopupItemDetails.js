import { Dialog, Transition, Listbox } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import TechniciansDropDown from '../technician/TechniciansDropDown'
import Calendar, { MonthView } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import { getCookie } from './../../../jsfunctions/cookies'
import SlotDropDown from '../customer/SlotsDropDown';
import AdvisorDown from '../customer/AdvisorDown';
import VehicleDropDown from '../customer/VehicleDropDown';
import { ToastContainer, toast } from 'react-toastify';
import { Formik, Field, Form } from 'formik';
import DropdownMol from './DropdownMol';


var userId = getCookie('userId');
export default function PopupItemDetails(props) {
	let [isOpen, setIsOpen] = useState(false);
	const [value, onChange] = useState([]);
	const [error, setError] = useState(false);
    const [output, setoutput] = useState({ itemName: "", itemNo: "", stock: "", price: "", reorderLevel: "", categoryId: "", catName: ""});
    const [itemCategory, setitemCategory] = useState([]);
    const [selectedItemCategory, setSelectedItemCategory] = useState();
    const [show, setshow] = useState("hidden");
    const [selectedItem, setselectedItem] = useState(0);
    // const id = (props.itemNo);

	function closeModal() {
		setIsOpen(false)
	}

	function openModal() {
		setIsOpen(true)
	}

	var config = {
		headers: {
			'Authorization': 'Bearer ' + getCookie('token'),
		}
	}

	function submit() {
        console.log("Submit");
	}
useEffect(() => {
	getdetails();
	
}, [props.itemNo])

    function getdetails() {
        
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/inventory/itembyid/${props.itemNo}`)
            .then(res => {
                // setshow("hidden");
                // window.document.getElementById("name")=res.data.itemName;
                setoutput(res.data);
                console.log(output);
            }
            ).catch(err => {
                console.log(err);
            })
    }

	return (
		<>
			<div className="">
				<button
					type="button"
					onClick={getdetails} 
                    onClick={openModal}
					className="p-2 rounded-lg shadow-lg bg-gradient-to-br bg-blue-700 m-3 flex items-center justify-center text-white font-semibold text-xl">
					Update Details
				</button>
			</div>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 w-screen z-40 overflow-y-auto flex items-center justify-center backdrop-filter backdrop-blur-lg"
					onClose={closeModal}
				>
					<div className="min-h-screen w-1/3 px-4">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0" />
						</Transition.Child>
						{/* This element is to trick the browser into centering the modal contents. */}
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<div className="flex flex-col w-full  p-5 my-10 overflow-hidden text-center items-center transition-all transform bg-white shadow-xl rounded-2xl ">
								<Dialog.Title
									as="h3"
									className="text-2xl font-bold leading-6 text-primary-0 font-primary text-center"
								>
									Item Details of {output.itemName}
								</Dialog.Title>
								<div className="my-5 text-left">
                                    
                                    <Formik
                                        enableReinitialize
                                        initialValues={output}
                                        onSubmit={async (values) => {
											console.log(output);
											axios.put(`${process.env.REACT_APP_API_BASE_URL}/inventory/item`, values, config)
												.then((res) => {
													console.log(res.data);
																		
													toast.success(res.data.itemName + " Updated Successfully");
												}).catch((err) => {
													console.log(err);
												})
                                            
                                            //    alert(JSON.stringify(values, null, 2));
                                        }}
                                    >

                                        <Form>

                                            <div className="lg:flex mt-5">

                                                <div className="flex flex-col items-center ">
                                                    <div className="flex flex-row">
                                                        <div className="flex flex-col mr-12 ml-4 w-1/2 ">

                                                            <label htmlFor="itemNo" className="font-primary  text-md font-semibold  mt-3 z-10">Item Number</label>
                                                            <Field id="itemNo" name="itemNo" placeholder="" disabled className=" ml-5 rounded-lg shadow-lg w-60 h-10  mt-2 pl-5" />
                                                            
                                                            <label htmlFor="itemName" className="font-primary  text-md font-semibold  mt-3 z-10">Item Name</label>
                                                            <Field id="itemName" name="itemName" placeholder="" disabled className=" ml-5 rounded-lg shadow-lg w-60 h-10  mt-2 pl-5" />

                                                            <label htmlFor="stock" className="font-primary  text-md font-semibold  mt-3">Stock</label>
                                                            <Field id="stock" name="stock" placeholder="" disabled className=" ml-5 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" />

															<label htmlFor="catName" className="font-primary  text-md font-semibold  mt-3 z-10">Category</label>
                                                            <Field id="catName" name="catName" placeholder="" disabled className=" ml-5 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5"/>
															{/* <div className=" ml-5 rounded-lg shadow-lg ">
                                                                <DropdownMol data={itemCategory} set={setSelectedItemCategory} />
                                                            </div> */}

                                                            <label htmlFor="price" className="font-primary  text-md font-semibold  mt-3">Selling Price</label>
                                                            <Field id="price" name="price" placeholder="Enter Buying Price" className=" ml-5 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" />

                                                            <label htmlFor="reorderLevel" className="font-primary  text-md font-semibold  mt-3">Reorder Level</label>
                                                            <Field id="reorderLevel" name="reorderLevel" placeholder="Enter Reorder Level" className=" ml-5 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5"/>
                                                            
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            {/* <div className="flex items-center justify-center " >
                                                <div className="w-min h-10 rounded-lg flex items-center justify-center p-4 bg-green-700 mt-6 ">
                                                    <button className="text-lg font-primary font-medium text-white" type="submit">Add</button>
                                                </div>
                                                <div className="mx-4">
                                            <div className="w-auto h-10 rounded-lg flex items-center justify-center p-4 bg-green-700" >
                                                    <h1 className="text-lg font-primary font-medium text-white">Add</h1>
                                                </div>
                                                </div>
                                            </div> */}
											<div className=" flex justify-center mt-10 mb-5">
												<button
													type="button"
													className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
													onClick={submit}
													// disabled={(!error) ? false : true}
												>
													Update Details
												</button>
											</div>


                                        </Form>

                                    </Formik>
                                    
								</div>
								{/* {error} */}
								
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
            <ToastContainer
                        position="bottom-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover

                    />
		</>
	)
}