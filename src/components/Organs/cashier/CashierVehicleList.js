import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';

export default function CashierVehicleList(props) {

    // function customer({vehicle.ve}) {
    //     console.log(e);
    //     axios.put(`${process.env.REACT_APP_API_BASE_URL}/inventory/approveItemRequest/${v}`, config)
    //         .then(res => {
    //             console.log(res.data);
    //             setchanged(!changed);
    //             toast.success(" Approved Successfully");
    //         }
    //         ).catch(err => {
    //             console.log(err);
    //         })
    // }

    return (
        <Card className="mb-12">
            <CardHeader className="bg-gradient-to-r from-red-400 to-yellow-500" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-xl font-primary">Completed Vehicle Details</h2>
                </div>
            </CardHeader>
            <CardBody>
                <div className="overflow-auto max-h-96 ">
                    <table className="items-center w-full bg-transparent border-collapse overflow-auto">
                        <thead className="">
                            <tr>
                            <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold font-primary text-center">
                                    Vehicle Number
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold font-primary text-center">
                                    Contact Number
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold font-primary text-center">
                                    Customer Name
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
                            {props.vehicleList.map(vehicle=>

                            <tr className="font-primary ">
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                    {vehicle.vehicleNumber}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                    {vehicle.vehicleNumber}
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                    {vehicle.repairAddedDate}
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                    <button class=" bg-blue-700 rounded text-white p-2 pl-4 pr-4 ml-2 ">Continue</button>
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

