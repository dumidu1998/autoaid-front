import React, { Component } from 'react';
import DashboardSectionVehicleInfo from '../../Atoms/admin/DashboardSectionVehicleInfo';
import DashboardSectionViewInfo from '../../Atoms/admin/DashboardSectionViewInfo';
export default function DashBoardVehicleInfoCard(props) {


    return (
        <div className="flex justify-between items-center bg-white shadow-xl rounded-lg px-9 py-3 mt-3">
            <DashboardSectionViewInfo repair={props.repair}/>
            <div className="ml-4">
                <span>{props.repair.vehicleNumber}</span>
                <span>{props.vehicleNumber}</span>
            </div>
        </div>
    )

}
