
import React from 'react'
import ServiceHistoryCards from '../../components/Atoms/ServiceHistoryCards'
import TopContainerVNo from '../../components/Atoms/technician/TopContainerVNo' 
import VehicleDetailsCardInfo from '../../components/Atoms/VehicleDetailsCardInfo'
import VehicleDetailsCardInfoText from '../../components/Atoms/VehicleDetailsCardInfoText'
import ServiceHistoryNavBar from '../../components/Moleculars/serviceAdvisor/ServiceHistoryNavBar'
import SideNav from '../../components/Moleculars/serviceAdvisor/sideNav'

export default function ServiceHistory() {
    return (
        <div className=" bg-Background-0">
        <div className="flex flex-row">
            <div className="">
                <SideNav />
            </div>
            <div className="w-full flex flex-col">
                <TopContainerVNo heading1="KT-0246" link="/serviceadvisor"/>
                <div className="flex justify-between w-full">
                    <div className="w-3/6 bg-white shadow-xl rounded-lg mt-12 ml-6 p-8">
                        <div className="font-primary text-xl">Service History</div>
                        <div className="  p-1 rounded-lg mt-4 w-full">
                            <ServiceHistoryNavBar/>
                        </div>
                        <div>
                           <ServiceHistoryCards name="Engine Pistone change" price="2500"/>
                           <ServiceHistoryCards name="Radiator Effect" price="3000"/>
                           <ServiceHistoryCards name="Noice in the Engine" price="9500"/>
                        </div>
                    </div>
                    <div className="w-2/6 bg-white shadow-xl rounded-lg mt-12  mr-32 p-8 px-16">
                        <div className="font-primary text-2xl font-medium flex justify-center items-center m-12">Vehicle Details</div>
                        <div className="mt-6 mb-4 flex justify-between items-center">
                           <VehicleDetailsCardInfo color="text-red-600 mt-2 font-bold" heading="VIN No." info="1234"/>
                           <VehicleDetailsCardInfo color="text-black mt-2 font-bold" heading="Chassis No." info="345FG"/>
                        </div>
                        <div className="mt-6 mb-4 flex justify-between items-center">
                           <VehicleDetailsCardInfo color="text-black mt-2 font-bold" heading="Engine No." info="3456"/>
                           <VehicleDetailsCardInfoText heading="Vehicle Model" info="X-trail"/>
                        </div>
                        <div className="mt-6">
                           <VehicleDetailsCardInfoText heading="Vehicle Type" info="CAR(hy-brid)"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
</div>  
    )
}
