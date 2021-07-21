import React, { Component } from 'react';
import DashBoardTransactionHistoryVehicleNumberCard from '../../Atoms/admin/DashBoardTransactionHistoryVehicleNumberCard';
import TransactionCardPrice from '../../Atoms/admin/TransactionCardPrice';
class DashBoarTransactionInfoCardMolecular extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="flex justify-between items-center">
                <DashBoardTransactionHistoryVehicleNumberCard number={this.props.number}/>
                <TransactionCardPrice price={this.props.price}/>
            </div>
         );
    }
}
 
export default DashBoarTransactionInfoCardMolecular;