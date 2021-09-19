import React from 'react'
import MoreDetailsBtn from './MoreDetailsBtn'
import VehicleBtnCol from './VehicleBtnCol'

export default function SearchVihicleRowThree() {
    return (
        <div>
            <div>
                <div className="flex justify-between items-center">
                    <div className="bg-white w-8/12 lg:w-9/12 h-40 rounded-lg shadow-xl xl:ml-10">
                        <div className=" ">
                            <div>
                                <MoreDetailsBtn name="www"/>
                            </div>
                            <div>
                                <MoreDetailsBtn name="www"/>
                            </div>
                        </div>
                    </div>
                   <div>
                       {/* <VehicleBtnCol/> */}
                   </div>
                </div>
            </div>
        </div>
    )
}
