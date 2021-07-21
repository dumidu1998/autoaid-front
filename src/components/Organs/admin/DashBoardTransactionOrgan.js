import React, { Component } from 'react';
import DashBoarTransactionInfoCardMolecular from '../../Moleculars/admin/DashBoarTransactionInfoCardMolecular';
class DashBoardTransactionOrgan extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="mt-2">
                <DashBoarTransactionInfoCardMolecular price={this.props.price} number={this.props.number}/>
            </div>
         );
    }
}
 
export default DashBoardTransactionOrgan;