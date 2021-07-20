
import React,{useState}from 'react'
import StaffManageFormTxt from '../../Atoms/admin/StaffManageFormTxt';

export default function StaffManageForm() {
    const [txtFeildsColOne, settxtFeildsColOne] = useState([ {id:1,name:"First Name",height:10,value:"a"},
                       {id:2,name:"Role",height:10,value:"a"},
                       {id:3,name:"Email",height:10,value:"a"},
                       {id:4,name:"User Name",height:10,value:"a"},
                       {id:5,name:"City",height:10,value:"a"},
                       ])
    const [txtFeildsColTwo, settxtFeildsColTwo] = useState([
                            {id:6,name:"Last Name",height:10,value:"a"},
                            {id:7,name:"Phone Number",height:10,value:"a"},
                            {id:8,name:"Password",height:10,value:"a"},
                            {id:9,name:"Address",height:28,value:"a"},
                           ]);
    return (
        
        
      

        <div className="w-full shadow-xl ">
                 <div className=" bg-white rounded-2xl flex justify-between items-center -mt-12 py-9 px-12">
                    <div >
                        {txtFeildsColOne.map(col1=><StaffManageFormTxt height={col1.height} value={col1.value} lable={col1.name} key={col1.id}/>)}
                    </div>
                    <div className="ml-3">
                        {txtFeildsColTwo.map(col2=><StaffManageFormTxt height={col2.height}  value={col2.value} lable={col2.name} key={col2.id}/>)}
                    </div>
                </div>
            </div>
    )
}

 
