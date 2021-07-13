import React, { Component } from 'react';
class StaffNavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="flex place-items-center justify-center bg-white w-full ml-3 mr-3 shadow-2xl rounded-xl h-16">
                <div className="flex items-center justify-center h-8 bg-gray-900 p-3 pb-4 rounded-xl"><div className="text-white  font-semibold">Admin</div></div>
                <div className="ml-4  font-semibold">Service Advisor</div>
                <div className="ml-4  font-semibold">Technician</div>
                <div className="ml-4  font-semibold">Cashier</div>
                <div className="ml-4 mr-2 font-semibold">Stock Keeper</div>
            </div>
         );
    }
}
 
export default StaffNavBar;