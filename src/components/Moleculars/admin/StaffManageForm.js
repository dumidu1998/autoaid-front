import React, { Component } from 'react';
import StaffManageFormTxt from '../../Atoms/admin/StaffManageFormTxt';
class StaffManageForm extends Component {
    state = { 
        txtFeildsColOne:[ {id:1,name:"First Name",height:10},
                   {id:2,name:"Role",height:10},
                   {id:3,name:"Email",height:10},
                   {id:4,name:"Hour Rate",height:10},
                   {id:5,name:"Register Date",height:10},
                   ],
        txtFeildsColTwo:[
                    {id:6,name:"Last Name",height:10},
                    {id:7,name:"Phone Number",height:10},
                    {id:8,name:"Password",height:10},
                    {id:9,name:"Address",height:28},
                   ],
     }
    render() { 
        return ( 
            <div className="w-full shadow-xl ">
                 <div className=" bg-white rounded-2xl flex justify-between items-center -mt-12 py-9 px-12">
                    <div >
                        {this.state.txtFeildsColOne.map(col1=><StaffManageFormTxt height={col1.height} lable={col1.name} key={col1.id}/>)}
                    </div>
                    <div className="ml-3">
                        {this.state.txtFeildsColTwo.map(col2=><StaffManageFormTxt height={col2.height} lable={col2.name} key={col2.id}/>)}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default StaffManageForm;