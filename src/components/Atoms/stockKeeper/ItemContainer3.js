import React from 'react'
import PopupItemDetails from '../../Moleculars/stockKeeper/PopupItemDetails'
import ButtonProps from './ButtonProps'

export default function ItemContainer3(props) {

    
    return (
        <div>
            <div className=" w-full h-14 shadow-lg bg-white mt-5 rounded-lg flex items-center justify-center">
                <div className="flex flex-row w-10/12 items-center justify-between">
                    <div className=" w-1/5"><p className="font-bold font-primary text-gray-400 ">{props.itemName}</p></div>
                    <div><p className="font-normal font-primary ">{props.quantity}</p></div>
                    <div><PopupItemDetails  itemNo={props.itemNo}/></div>
                    {/* <ButtonProps name="Details" link={props.link} color="bg-blue-700"/> */}

                </div>
            </div>
            
        </div>
    )
}
