import React, { Component } from 'react';
import DashboardSectionVehicleInfo from '../../Atoms/admin/DashboardSectionVehicleInfo';
import DashboardSectionViewInfo from '../../Atoms/admin/DashboardSectionViewInfo';
class DashBoardVehicleInfoCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="flex justify-between items-center bg-white shadow-xl rounded-lg px-9 py-3 mt-3">
                <DashboardSectionViewInfo/>
                <DashboardSectionVehicleInfo/>
            </div>
         );
    }
}
 
export default DashBoardVehicleInfoCard;