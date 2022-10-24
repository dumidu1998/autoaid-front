import React, { Component } from 'react';
import DashBoarTransactionInfoCardMolecular from '../../Moleculars/admin/DashBoarTransactionInfoCardMolecular';
class DashBoardTransactionOrgan extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="mt-2">
                <DashBoarTransactionInfoCardMolecular price="3040" number="KM-4028"/>
                <DashBoarTransactionInfoCardMolecular price="12500" number="KM-4028"/>
                <DashBoarTransactionInfoCardMolecular price="7450" number="KM-4028"/>
                <div className="mt-5">
                    <DashBoarTransactionInfoCardMolecular price="22990" number="Total"/>
                </div>
             
            </div>
         );
    }
}
 
export default DashBoardTransactionOrgan;