import React, { Component } from 'react';
class  TransactionCardPrice extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <span className="text-xl font-medium mr-12">Rs {this.props.price}</span>
            </div>
         );
    }
}
 
export default TransactionCardPrice ;