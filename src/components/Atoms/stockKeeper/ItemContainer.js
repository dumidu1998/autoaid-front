import React from 'react'
import ButtonProps from './ButtonProps'
import ButtonSecond from './ButtonSecond'

export default function ItemContainer(props) {

    // function approve(id) {
        
    //     axios.get(`${process.env.REACT_APP_API_BASE_URL}/inventory/approveItemRequest/${id.target.value}`)
    //         .then(res => {
    //             setresult(res.data);
    //             console.log(res.data);
    //         }
    //         ).catch(err => {
    //             console.log(err);
    //             setresult([]);
    //         })
    // }

    return (
        <div>
            <div className=" w-full h-36 shadow-lg bg-white mt-5 rounded-lg flex items-center justify-center">
                <div className="flex flex-row w-10/12 items-center justify-between">
                    <div>
                        <h1 className="my-4 font-bold font-primary text-lg text-black">{props.itemNo}</h1>
                        <h1 className="my-4 font-bold font-primary text-gray-400">{props.vehicle}</h1>
                        
                    </div>
                    <div>
                        <h1 className="font-bold font-primary text-2xl text-black">{props.parts}</h1>
                    </div>
                    <div className="">
                        <div className="my-4">
                            <ButtonProps name="Accept" color="bg-green-600" />
                        </div>
                        <div className="my-4">
                            <ButtonProps name="Reject" color="bg-red-600" />
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    )
}
