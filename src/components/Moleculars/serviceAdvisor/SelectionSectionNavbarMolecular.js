import React, { useState, useEffect } from 'react';
import SelectionSectionNavbar from '../../Atoms/serviceStation/SelectionSectionNavbar';

export default function SelectionSectionNavbarMolecular(props) {

    const [list, setList] = useState([
        { id: 1, value: "General Repair" },
        { id: 2, value: "Wheel Alignment" },
        { id: 3, value: "Service" },
        { id: 4, value: "Express Maintainance" },
        { id: 5, value: "Washing" },
      
    ])

    const [highBtn, setHighBtn] = useState(list[0].id);
    useEffect(()=>{props.setsectionName(highBtn) }, [highBtn]);
    // console.log("Child-"+highBtn);
    
    return (
        <div className=" bg-white p-2 shadow-2xl rounded-lg grid grid-cols-1 mb-4">
            <div className="flex items-center justify-between">
                {list.map(btn => <SelectionSectionNavbar setHighBtn={setHighBtn} highBtn={highBtn} key={btn.id} name={btn.value} id={btn.id} /> )}
            </div>
        </div>
    )
}
