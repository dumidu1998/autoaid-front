import React from 'react'
import Addnew from '../../components/Atoms/serviceStation/Addnew'
import AddnewWithIcon from '../../components/Atoms/serviceStation/AddnewWithIcon'
import BlueBgBtn from '../../components/Atoms/serviceStation/BlueBgBtn'
import PauseBtn from '../../components/Atoms/serviceStation/PauseBtn'
import TopContainerVNo from '../../components/Atoms/technician/TopContainerVNo'
import ProgressMainContainer from '../../components/Organs/technician/ProgressMainContainer'
import SummaryMainContainer from '../../components/Organs/technician/SummaryMainContainer'
import SummaryRightContainer from '../../components/Organs/technician/SummaryRightContainer'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { Dialog, Transition, Listbox } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import Button from '../../components/Atoms/Button'
import axios from "axios";
import { getCookie } from '../../jsfunctions/cookies'
import { ToastContainer, toast } from 'react-toastify';


var config = {
	headers: {
		'Authorization': 'Bearer ' + getCookie('token'),
	}
}

export default function ServiceProgress() {
	const location = useLocation();
	const userId = getCookie('userId');
	// console.log(location.state.repair.repairId);
	// console.log(location.state.sectionName);
	function closeModal() {
		setIsOpen(false)
	}

	function openModal() {
		setIsOpen(true)
	}

	const [search, setsearch] = useState('')
	const [result, setresult] = useState([])
	const [show, setshow] = useState('hidden');
	const [selectedId, setSelectedId] = useState(0);
	const [selectedItem, setSelectedItem] = useState({ itemName: '' });
	const [selectedqty, setselectedqty] = useState(1);

	function getitems(e) {
		setsearch(e.target.value);
		console.log(e.target.value);
		e.target.value == '' ? setshow('hidden') : setshow('block');
		setspecialstat(false);
		if (e.target.value == '') return 0
		axios.get(`${process.env.REACT_APP_API_BASE_URL}/inventory/searchitembyname/${e.target.value}`, config).then(e => {
			setresult(e.data);
			// setshow('block')
		})
	}

	function showdetails(e) {
		setSelectedId(e.target.id);
		setshow('hidden');
		console.log(e.target.id);
		axios.get(`${process.env.REACT_APP_API_BASE_URL}/inventory/itembyid/${e.target.id}`)
			.then(res => {
				setSelectedItem(res.data);
			})
	}

	let [isOpen, setIsOpen] = useState(false);
	const [disabled, setdisabled] = useState(true);

	useEffect(() => {
		selectedqty == 0 ? setdisabled(true) : setdisabled(false);
	}, [selectedqty])

	function submit(e) {
		e.preventDefault();
		if (selectedItem.itemName != '' && specialstat) {

			if (selectedqty == 0) {
				toast.error('❌ Enter Valid Quantity');
				return 0;
			}
			if (selectedId == 0) {
				toast.error('❌ Please Select an Item');
				return 0;
			}
			///
			axios.post(`${process.env.REACT_APP_API_BASE_URL}/technician/createItemRequest`, {
				repairId: location.state.repair.repairId,
				itemNo: selectedId,
				quantity: selectedqty,
				userId: userId
			}, config)
				.then(res => {
					toast.success('Request Sent Successfully');
					setIsOpen(false);
					setselectedqty(1);
					setSelectedItem({ itemName: '' });
					setSelectedId(0);
					setsearch('');
				}).catch(err => { console.log(err) })
			///
		} else if (selectedItem.itemName == '' && specialstat == true) {
			axios.post(`${process.env.REACT_APP_API_BASE_URL}/technician/createspecialitem`, {
				repairId: location.state.repair.repairId,
				itemName: specialName,
				quantity: specialqty,
				userId: userId
			}, config)
				.then(res => {
					toast.success('Request Sent Successfully');
					setIsOpen(false);
					setselectedqty(1);
					setSelectedItem({ itemName: '' });
					setSelectedId(0);
					setsearch('');
					setspecialstat(false);
				}).catch(err => { })
		}
	}

	const [specialstat, setspecialstat] = useState(false);
	const [specialName, setspecialName] = useState('');
	const [specialqty, setspecialqty] = useState('');

	const [special, setspecial] = useState(<table className="w-10/12">
		<tbody>
			<tr>
				<th>
					Item Name
				</th>
				<th>
					Requesting Quantity
				</th>
			</tr>
			<tr>
				<td><input type="text" className="rounded-lg shadow-lg" min="1" value={specialName} onChange={e => setspecialName(e.target.value)} /></td>
				<td><input type="number" className="rounded-lg shadow-lg" min="1" value={specialqty} onChange={e => setspecialqty(e.target.value)} /></td>
			</tr>
		</tbody>
	</table>);

	function showSpecial() {
		setSelectedItem({ itemName: '' });
		setspecialstat(true)
	}

	return (

		<div className="relative bg-Background-0 h-full lg:h-screen">
			<ToastContainer
				position="bottom-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<div className="flex flex-col items-center ">
				<TopContainerVNo heading1="KT-0246" link="dashboard" />
				<div className="flex  flex-col lg:flex-row w-11/12 justify-center items-center">
					<div>
						<ProgressMainContainer repair={location.state.repair} sectionName={location.state.sectionName} />
					</div>
					<div className="flex flex-col items-center">
						<SummaryRightContainer repairid={location.state.repair.repairId} />
						{/* <PauseBtn txt={"Pause"} /> */}
						<div className="flex ">
							{/* <AddnewWithIcon txt={"Add New"} /> */}
							<div className="">
								<button
									type="button"
									onClick={openModal}
									className="w-64 h-16 rounded-lg shadow-lg bg-primary-0  m-5 flex items-center justify-center text-white font-bold text-xl">
									Request Items
								</button>
							</div>

							<Transition appear show={isOpen} as={Fragment}>
								<Dialog
									as="div"
									className="fixed inset-0 w-screen z-40 overflow-y-auto flex items-center justify-center backdrop-filter backdrop-blur-lg"
									onClose={closeModal}
								>
									<div className="min-h-screen w-10/12 px-4">
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
													Request New Item
												</Dialog.Title>
												<div className="my-5 text-left">
													<div >
														<input type="text" className=" w-96 h-12 rounded-md shadow-md" placeholder="Search for Item" value={search} onChange={getitems} />
														<div className="bg-white block ">
															<ul class={`bg-white border border-gray-100 w-full mt-12 overflow-y-scroll h-auto max-h-60 z-100  ${show}`} >
																{result.map(item => (
																	<li class="pl-1 z-50 pr-2 py-1 border-b-2 bg-white border-gray-100 relative cursor-pointer hover:bg-yellow-50  hover:text-gray-900" onClick={showdetails} id={item.itemNo}
																	>
																		{item.itemName}
																	</li>

																))}
																{(result.length == 0) ? (<div>Item Not found. <button className=" px-3 py-2 float-right bg-Secondary-0 rounded-lg text-white font-bold" onClick={showSpecial}>Request Speical Item</button></div>) : ("")}
															</ul>
														</div>
													</div>
												</div>

												{selectedItem.itemName == "" ?
													specialstat ? <table className="w-10/12">
														<tbody>
															<tr>
																<th>
																	Item Name
																</th>
																<th>
																	Requesting Quantity
																</th>
															</tr>
															<tr>
																<td><input type="text" className="rounded-lg shadow-lg" min="1" value={specialName} onChange={e => setspecialName(e.target.value)} /></td>
																<td><input type="number" className="rounded-lg shadow-lg" min="1" value={specialqty} onChange={e => setspecialqty(e.target.value)} /></td>
															</tr>
														</tbody>
													</table> : '' :
													<table className="w-10/12">
														<tbody>
															<tr>
																<th>
																	Item Name
																</th>
																<th>
																	Available Quantity
																</th>
																<th>
																	Qty.
																</th>
															</tr>
															<tr>
																<td>{selectedItem.itemName}</td>
																<td className="">{selectedItem.stock}</td>
																<td><input type="number" className="rounded-lg shadow-lg" min="1" max={selectedItem.stock} value={selectedqty} onChange={e => setselectedqty(e.target.value)} /></td>
															</tr>
														</tbody>
													</table>
												}

												<div className="mt-4 mb-5">
													<button
														onClick={submit}
														disabled={disabled}
														type="button"
														className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
													>
														Request Now
													</button>
												</div>
											</div>
										</Transition.Child>
									</div>
								</Dialog>
							</Transition>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}
