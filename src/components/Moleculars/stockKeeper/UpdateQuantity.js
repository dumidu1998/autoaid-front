import React from 'react'
import ButtonProps from '../../Atoms/stockKeeper/ButtonProps'

export default function UpdateQuantity(props) {
    return (
        <div>
            <div className=" mt-5 ">
                <div className="flex flex-row w-10/12 items-center justify-between">
                    
                    <h1 className="font-primary  text-md font-semibold">Update Item Quantity</h1>
                    
                </div>
            </div>
            <div className=" w-full h-14 shadow-lg bg-white mt-5 rounded-lg flex items-center justify-center">
                <div className="flex flex-row w-10/12 items-center justify-between">
                    <div className=" w-1/5"><p className="font-bold font-primary text-gray-400 ">{props.itemName}</p></div>
                    <div className=" "><p className="font-bold font-primary  ">Item Quantity</p></div>
                    <div><input type="text" name="name" value={props.quantity} className=" rounded-lg shadow-lg h-10 w-40 float-right border-0" /></div>
                    <div className=" "><p className="font-bold font-primary  ">Item Price</p></div>
                    <div><input type="text" name="name" value={props.price} className=" rounded-lg shadow-lg h-10 w-40 float-right border-0 " /></div>
                    <ButtonProps name="Update" link={props.link} color="bg-blue-700" />

                </div>
            </div>
        </div>
    )
}
