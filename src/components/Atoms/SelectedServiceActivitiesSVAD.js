import React, { useState } from 'react'

export default function SelectedServiceActivitiesSVAD(props) {
    
    
    function removeItem(){
        props.setrepairList(prevList=>prevList.filter(item => item.itemName !== props.addedRepair.itemName));
        props.totalTime[1](props.totalTime[0]-props.addedRepair.time);
        props.estimatedPrice[1](props.estimatedPrice[0]-props.addedRepair.price);    
    }
    return (
        <div className="flex flex-col mt-4">
            <div className="flex  justify-between items-center ">
                <div className="font-primary text-black font-medium ">
                    {props.addedRepair.itemName}
                </div>
                <div className="font-primary text-black font-medium ">
                    Rs. {props.addedRepair.price}
                </div>
            </div>
            <div className="text-gray-500 flex justify-start mt-2 ">  
                {props.addedRepair.time} min
                <button onClick={removeItem} className="text-red-600 ml-11"> ❌remove</button>
            </div>
        </div>
    )
}
