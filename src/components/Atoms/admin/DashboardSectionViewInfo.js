import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import React, { Component } from 'react';
class DashboardSectionViewInfo extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <Popup trigger={ < button className="bg-blue-600 w-28 h-10 text-sm font-bold font-primary rounded-md text-white ">Vehicle Info</button>} position="right center">
                    <div className="w-full h-64 bg-red-700">Popup content here !!</div>
                </Popup>
                
            </div> 
        );
    }
}
 
export default DashboardSectionViewInfo ;