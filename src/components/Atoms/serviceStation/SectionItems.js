import React, { useState, useEffect } from 'react'

export default function SectionItems(props) {
    
    
    const addToList=()=>{
        //add new item to real time list
        props.setrepairList(prevList => ([...prevList, {
                itemName:props.itemName,
                price:props.itemTime*1000/60,
                time:props.itemTime
        }]));
        props.settotalTime(prevTime => prevTime+props.itemTime);
        props.setestimatedPrice(prevPrice=>prevPrice+props.itemTime*1000/60)   
        // console.log(props.repairList);
        // console.log(props.totalTime);
        // console.log(props.itemTime);
        
        
    }

    return (
        <div className="w-full bg-white shadow-2xl  rounded-lg h-16 flex items-center mt-5">
            <div className="flex flex-col  items-start   w-9/12 ml-12">
                <div>
                    {props.itemName}
                </div>
                <div>
                    {props.itemTime} min
                    {/* Need to add styles */}
                    <button className="ml-10 bg-green-600 text-white">Change Time</button>    
                </div>
            </div>
            <div>
                <button onClick={addToList} className="text-white font-primary bg-blue-500 rounded-lg shadow-xl w-16 h-12 ml-5">Add</button>
            </div>
        </div>
    )
}
