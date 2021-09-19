import React, { useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify';

export default function SectionItems(props) {
    const [timeDisabled, settimeDisabled] = useState(true);
    // const [newTime, setnewTime] = useState();

    function setTime(){
        settimeDisabled(false);
    }

    const addToList = () => {
        //add new item to real time list
        const repairExist = props.repairList.filter(item => item.itemName == props.subCat.subCatName);
        // console.log("exists");
        // console.log(repairExist);

        if (repairExist=='') {
            props.setrepairList(prevList => ([...prevList, {
                subCatId:props.subCat.subCatId,
                itemName: props.subCat.subCatName,
                price: (props.subCat.time * 1000 / 60).toFixed(2),
                time: props.subCat.time
            }]));
            props.settotalTime(prevTime => prevTime + props.subCat.time);
            props.setestimatedPrice(prevPrice => prevPrice + props.subCat.time * 1000 / 60);
        }else{
            // console.log("repair added already");
            toast.error('❌ repair already added');
        }


    }

    return (
        <div className="w-full bg-white shadow-2xl  rounded-lg h-24 flex items-center justify-center mt-5">
            <div className="flex flex-col  items-start   w-9/12 ml-12">
                <div className="font-primary ">
                    {props.subCat.subCatName}
                </div>
                <div className="flex items-center justify-center mt-2 mb-2">
                    {/* Need Styles */}
                    <input className=" bg-white w-20 rounded-lg h-8 border-1" type="number" value={(timeDisabled==true?props.subCat.time:null)} onChange={event => props.subCat.time=(Number(event.target.value))} disabled={timeDisabled}/>
                      <span className="ml-2 text-xs">min</span>
                    {/* Need to add styles */}
                    <button onClick={setTime} className="ml-10 bg-red-600 text-white w-32 p-2 rounded-lg">Change Time</button>
                </div>
            </div>
            <div>
                <button onClick={addToList} className="text-white font-primary bg-blue-500 rounded-lg shadow-xl w-24 h-12 mr-6">Add</button>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover

            />
        </div>
    )
}
