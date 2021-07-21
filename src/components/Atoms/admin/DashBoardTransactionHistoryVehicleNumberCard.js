import React, { Component } from 'react';
class DashBoardTransactionHistoryVehicleNumberCard extends Component {
    state = {  }
    render() { 
        return (  
            <div className="bg-white shadow-xl rounded-xl p-3 w-64 flex justify-center">
                <span className="font-primary font-light">{this.props.number}</span>
            </div>
        );  
    }
}
 
export default DashBoardTransactionHistoryVehicleNumberCard;