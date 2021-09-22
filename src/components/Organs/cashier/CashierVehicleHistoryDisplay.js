import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import { Link } from 'react-router-dom';

export default function CashierVehicleHistoryDisplay(props) {

    
    return (
        <Card className="mb-12">
            <CardHeader className="bg-gradient-to-r from-red-400 to-yellow-500" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-xl font-primary"> Vehicle Details</h2>
                </div>
            </CardHeader>
            <CardBody>
                <div className="overflow-auto max-h-96 ">
                    <table className="items-center w-full bg-transparent border-collapse overflow-auto">
                        <thead className="">
                            <tr>
                                
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold font-primary text-center">
                                    Completed Date
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold font-primary text-center">
                                    Vehicle Number
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold font-primary text-center">
                                    Customer Name
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold font-primary text-center">
                                    Contact Number
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold font-primary text-center">
                                    
                                </th>
                                {/* <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold font-primary text-left">
                                    Completed
                                </th> */}
                                {/* <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold font-primary text-left">
                                    Status
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold font-primary text-left">
                                    Amount
                                </th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {props.repairList.map(repair=>

                            <tr className="font-primary ">
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                    {repair.repairCompletedDate}
                                </td>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                    {repair.vehicleNumber}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                    {repair.name}
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                    {repair.contactNo}
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                <Link to={{ pathname: "/cashier/invoiceView", state: repair.repairId }}>
                                         <button className=" bg-blue-700 rounded text-white p-2 pl-4 pr-4 ml-2 ">
                                        View
                                        </button> 
                                        </Link>
                                </td>
                                {/* <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {vehicle.amount}
                                </td> */}
                                {/* <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {vehicle.status}
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {vehicle.amount}
                                </td> */}
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
}

