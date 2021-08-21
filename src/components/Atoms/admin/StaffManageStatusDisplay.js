import React, { Component } from 'react';


function StaffManageStatusDisplay(props){
        return ( 
            <div className="h-12 p-3 flex items-center mr-2">
                <span className={props.status=="ACTIVATED"? "w-3 h-3 rounded-full bg-green-500 mr-5": "w-3 h-3 rounded-full bg-primary-0 mr-5"}></span><div className="font-primary">{props.status}</div>
            </div>
         );
    }
 
export default StaffManageStatusDisplay;