import {React,useState,Fragment} from 'react'
import AdminSideBar from '../../components/Moleculars/admin/AdminSideBar'
import { Dialog, Transition, Listbox } from '@headlessui/react'


export default function CustomerDetails() {
    let [isOpen, setIsOpen] = useState(false);
	function closeModal() {
		setIsOpen(false)
	}
	function openModal() {
		setIsOpen(true)
	}

    return (
        <div className="bg-Background-0 h-screen font-primary">
            <div className="md:ml-40 bg-Background-0"><AdminSideBar name="Customer Details " roleName="Admin" /></div>

            <div className="flex flex-col ml-40 items-center justify-center my-10 border-1">
                <input type="text" className="w-1/3 h-20 border-0 rounded-lg shadow-md" placeholder="Search" />
                <table className="table-auto w-1/2 text-center my-10 bg-white">
                    <tbody>
                        <tr className="bg-gray-300">
                            <th>Customer Name</th>
                            <th>Vehicle VIN</th>
                            <th> Tel No.</th>
                            <th> Email</th>
                            <th> Vehicle Details</th>
                        </tr>
                        <tr className=" border  border-gray-300">
                            <td className=" border  border-gray-300">Dumidu Kasun</td>
                            <td className=" border  border-gray-300">123456789</td>
                            <td className=" border  border-gray-300">0778337616</td>
                            <td className=" border  border-gray-300">Dumidu@gmail.com</td>
                            <td className=" border  border-gray-300"><button type="button"
					            onClick={openModal} className="w-32 h-12 rounded-lg text-white font-lg bg-primary-0">View Vehicles</button>
                                
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
									Vehicle Details
								</Dialog.Title>
								<div className="my-5 text-left">
									<div className="w-full p-10 bg-Background-0 flex flex-col items-center justify-center rounded-lg shadow-lg text-white ">
                                        <h1 className="font-bold text-lg">CAM-9044</h1>
										<h1 className="font-bold text-lg">Nissan Xtrail</h1>
                                        <h3 className="font-bold text-lg">VIN<span className="text-sm ml-4 font-light">123456789</span> </h3>
									</div>
								</div>
								
								<div className="mt-4 mb-5">
									<button
										type="button"
										className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
									>
										Close
									</button>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
                                </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}
