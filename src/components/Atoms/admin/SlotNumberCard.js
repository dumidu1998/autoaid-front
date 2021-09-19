import React from 'react'
import SlotStatusBtn from './SlotStatusBtn';

export default function SlotNumberCard(props) {
    let style= "w-4/6 h-auto rounded-lg shadow-xl m-4 text-white text-xl sm:text-2xl ";
    style+=props.color;
    return (
        <div className={style}>
           <div className="grid grid-rows-4 place-items-center mt-8 mb-8">
                <div>Slot</div>
                <div>{props.slotNum}</div>
                <div className="text-sm sm:text-base">{props.vNum}</div>
                <div className="text-sm sm:text-base">{props.techName}</div>
           </div>
           <div className="flex  justify-center mb-4">
               <SlotStatusBtn btnName="Status"/>
           </div>
        </div>
    )
}
