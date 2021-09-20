import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';


export default function StatusViewer(props) {
    let format = (n) => `0${n / 60 ^ 0}`.slice(-2) + '.' + ('0' + n % 60).slice(-2) + ' '

    return (
        <div>
            {/* Mobile view */}
            <div className="flex flex-col items-center bg-forth-0 py-5 rounded-lg mb-5 shadow-xl md:hidden relative">
                <h1 className=" font-secondary text-white text-lg">Current Progress</h1>
                <p className="font-primary text-white text-xs my-1">{props.data.vehicleNumber}</p>
                <h1 className="font-primary text-white text-sm font-semibold">Est. Time : {format(props.data.estTime)}hr</h1>
                <img className=" w-44 h-44 rounded-full my-5 border-2 border-primary-0" src="/imgs/Icons/repair.png" />
                <h1 className="font-primary text-white text-sm font-semibold">On Service</h1>
                <Link to={{ pathname: "checklist", state: props.data.repairId }} className="absolute top-2 right-5 font-primary text-xs text-Secondary-0">View Check List</Link>

                {props.data.ongoing.map((it, index) => (
                    <div className="w-1/3 flex my-1 items-center justify-center" key={index}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <p className="font-primary text-white text-xs my-1 ml-6 text-center">{it}</p>
                    </div>
                ))}
            </div>
            {/* web view */}
            <div className="md:flex flex-col items-center bg-forth-0 py-5 rounded-lg mb-5 shadow-xl hidden relative">
                <h1 className=" font-secondary text-white text-lg">Current Progress</h1>
                <p className="font-primary text-white text-xs my-1">{props.data.vehicleNumber}</p>
                <h1 className="font-primary text-white text-sm font-semibold">Est. Time : {format(props.data.estTime)}hr</h1>
                <div className="w-10/12 flex items-center justify-between">
                    <div className="">
                        <img className=" w-44 h-44 rounded-full my-5 border-2 border-primary-0" src="/imgs/Icons/diognize.png" />
                        <h1 className="font-primary text-white text-sm font-semibold text-center">On Queue</h1>

                    </div>
                    <div>
                        <img className=" w-44 h-44 rounded-full my-5 border-2 border-primary-0" src="/imgs/Icons/repair.png" />
                        <h1 className="font-primary text-white text-sm font-semibold text-center">On Service</h1>

                    </div>
                    <div>
                        <img className=" w-44 h-44 rounded-full my-5 border-2 border-primary-0" src="/imgs/Icons/jobdone.png" />
                        <h1 className="font-primary text-white text-sm font-semibold text-center">Done</h1>

                    </div>
                    <Link to={{ pathname: "customer/checklist", state: props.data.repairId }} className="absolute top-2 right-5 font-primary text-xs text-Secondary-0">View Check List</Link>
                </div>
                {props.data.ongoing.map((it, index) => (
                    <div className="w-1/3 flex my-1 items-center justify-center" key={index}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <p className="font-primary text-white text-xs my-1 ml-6 text-center">{it}</p>
                    </div>
                ))}

            </div>

        </div>
    )
}
