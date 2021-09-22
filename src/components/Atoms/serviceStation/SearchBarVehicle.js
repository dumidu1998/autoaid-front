import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function SearchBarVehicle(props) {

    const [searchItem, setsearchItem] = useState('');

    function getVehicle(){
        if(searchItem==''){
            props.setresetTable(!props.resetTable)
        }else{
            // console.log(searchItem);
            if(props.vehicleList.some(vehicle=>vehicle.vehicleNumber==searchItem)){
                toast.success("✔  Vehicle Found")
                props.setvehicleList([props.vehicleList.find(vehicle=>vehicle.vehicleNumber==searchItem)]);
                
            }else{
                toast.error('❌ Vehicle Is Not in the List');
                // console.log("Not Have");
                
            }
                        
        }
    }
    return (
        <div className="w-full flex justify-center mt-8 ">
            <div class="bg-white shadow p-4 flex sm:w-9/12 md:w-10/12  lg:w-11/12 max-w-3xl rounded-lg">
                <input onChange={(e)=>setsearchItem(e.target.value)} class=" focus:ring-white focus:border-transparent focus-border-none rounded w-full  p-2 font-primary py-2 px-13 border-0 border-b-2" type="text" placeholder="Vehicle Number (PC-4078)" />
                <button onClick={getVehicle} class="  bg-gradient-to-r from-red-400 to-yellow-500 rounded text-white p-2 pl-4 pr-4 ml-2 w-20 md:w-32 lg:w-40 xl:w-56">
                <p class=" font-primary font-semibold lg:text-lg">Search</p>
                </button>
            </div>
        </div>
    )
}
