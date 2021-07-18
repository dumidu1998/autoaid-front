import React, { Component } from 'react';
import StaffMemListSlide from '../../Moleculars/admin/StaffMemListSlide';
class StaffMemListOrgan extends Component {
    state = { 
        tags:[{id:11001,name:"Sudesh Bandara"},
              {id:11002,name:"Vinhnaga Arachchi"},
              {id:11003,name:"Kusal Perera"},
              {id:11004,name:"Vanidu Hasaranag"}]
     }
    render() { 
        return ( 
            <div className="bg-white p-3 shadow-xl rounded-lg w-96 ">
                {this.state.tags.map(t=><StaffMemListSlide idNum={t.id} userName={t.name} key={t.id}/>)}
            </div>
         );
    }
}
 
export default StaffMemListOrgan;