import { Dialog, Transition, Listbox } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import TechniciansDropDown from '../technician/TechniciansDropDown'
import Calendar, { MonthView } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import { getCookie } from './../../../jsfunctions/cookies'
import SlotDropDown from './SlotsDropDown';
import AdvisorDown from './AdvisorDown';
import VehicleDropDown from './VehicleDropDown';

const people = [
	{ name: 'Wade Cooper' },
	{ name: 'Arlene Mccoy' },
	{ name: 'Devon Webb' },
	{ name: 'Tom Cook' },
	{ name: 'Tanya Fox' },
	{ name: 'Hellen Schmidt' },
]
var userId = getCookie('userId');
export default function MyModal() {
	let [isOpen, setIsOpen] = useState(false);
	const [value, onChange] = useState(new Date());
	const [slots, setSlots] = useState([]);
	const [advisors, setAdvisors] = useState([{ firstName: 'Select the Date and', lastname: 'Time' }]);
	const [selected, setSelected] = useState(people[0]);
	const [selecteddate, setSelecteddate] = useState();
	const [selectedtimeSlot, setselectedtimeSlot] = useState({ appointmentSlotId: 0, slotTime: "Select a Time" });
	const [selectedadvisor, setselectedadvisor] = useState();
	const [vehicles, setvehicles] = useState([])
	const [selectedvehicle, setselectedvehicle] = useState({ vehicleNumber: "Select your Vehicle" });
	const [error, setError] = useState(false);
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

	function click(e) {
		setError(false);
		var selectedDate = e.toISOString().split('T')[0];
		setSelecteddate(selectedDate);
		axios.get(`${process.env.REACT_APP_API_BASE_URL}/appointment/getslotsfromdate/${selectedDate}`, config)
			.then((res) => {
				setSlots(res.data);
			})
			.catch((err) => {
				setSlots([]);
				setError(err.response.data);
			});
	}

	useEffect(() => {
		setError(false);
		var e = new Date();
		var selectedDate = e.toISOString().split('T')[0];
		setSelecteddate(selectedDate);
		axios.get(`${process.env.REACT_APP_API_BASE_URL}/appointment/getslotsfromdate/${selectedDate}`, config)
			.then((res) => {
				setSlots(res.data);
			})
			.catch((err) => {
				setSlots([]);
				setError(err.response.data);
				console.log(err);
			});
		axios.get(`${process.env.REACT_APP_API_BASE_URL}/customer/vehiclesbyuserid/${userId}`, config)
			.then(function (response) {
				// handle success
				setvehicles(response.data);

			})
			.catch(function (error) {
				// handle error
				console.log(error.response.data);
			})

	}, [])

	useEffect(() => {
		if (selectedtimeSlot.appointmentSlotId == undefined || selecteddate == undefined) return;
		setError(false);
		axios.get(`${process.env.REACT_APP_API_BASE_URL}/appointment/getadvisorfromdateandslot/${selecteddate}/${selectedtimeSlot.appointmentSlotId}`, config)
			.then((res) => {
				setAdvisors(res.data);
			})
			.catch((err) => {
				setError(err.response.data);
			});
	}, [selectedtimeSlot])

	function submit() {
		console.log(selecteddate);
		console.log(selectedtimeSlot);
		console.log(selectedadvisor);
		console.log(selectedvehicle);
		var datatosend = {
			date: selecteddate,
			slotId: selectedtimeSlot.appointmentSlotId,
			staffId: selectedadvisor.id,
			vehicleId: selectedvehicle.vehicleId
		}
		console.log(datatosend);
		axios.post(`${process.env.REACT_APP_API_BASE_URL}/appointment/addappointment`, datatosend, config)
			.then((res) => {
				alert("Appointment Placed Sucessfully!!");
				closeModal();
			})
			.catch((err) => {
				alert("Error Occured! Try Again!");
			});
	}

	return (
		<>
			<div className="">
				<button
					type="button"
					onClick={openModal}
					className="w-40 h-14 rounded-lg shadow-lg bg-gradient-to-br from-primary-0 to-Secondary-0 m-5 flex items-center justify-center text-white font-bold text-xl">
					Book Now
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
									Book Now
								</Dialog.Title>
								<div className="my-5 text-left">
									<div >
										<form>
											<div className="mt-5">
												<div>
													<Calendar
														onChange={onChange}
														value={value}
														onClickDay={click}
														minDate={new Date()}
														className="shadow-lg border-0 rounded-lg border-white"
													/>
												</div>
											</div>
											<div className="mt-5">
												<h1 className="font-primary  text-md font-semibold"> Time</h1>
												<SlotDropDown data={slots} set={setselectedtimeSlot} />
												{/* <input type="time" name="name" className=" rounded-lg shadow-lg h-10 w-60" /> */}
											</div>
											<div className="mt-5">
												<h1 className="font-primary  text-md font-semibold "> Vehicle No</h1>
												<VehicleDropDown data={vehicles} set={setselectedvehicle} />
												{/* <TechniciansDropDown /> */}
											</div>
											<div className="mt-5">
												<h1 className="font-primary  text-md font-semibold"> Service Advisor</h1>
												<AdvisorDown data={advisors} set={setselectedadvisor} />
											</div>
										</form>
									</div>
								</div>
								{error}
								<div className="mt-4 mb-5">
									<button
										type="button"
										className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
										onClick={submit}
										disabled={(!error && selectedtimeSlot.slotTime != "Select a Time" && selectedvehicle.vehicleNumber != "Select your Vehicle") ? false : true}
									>
										Book Now
									</button>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}