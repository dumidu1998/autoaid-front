import React, { useState, useEffect } from 'react';
import SectionSelectNavbar from '../../Atoms/stockKeeper/SectionSelectNavbar';

export default function CategorySelectNavBarMol() {

    const [list, setList] = useState([
        { id: 1, value: "Engine" },
        { id: 2, value: "Brakes" },
        { id: 3, value: "Clutch" },
        { id: 4, value: "Suspension" },
        { id: 5, value: "Body" },
      
    ])

    const [highBtn, setHighBtn] = useState(list[0].id);
    // useEffect(()=>{props.setsectionName(highBtn) }, [highBtn]);
    // console.log("Child-"+highBtn);
    
    return (
        <div className=" bg-white p-2 shadow-2xl rounded-lg grid grid-cols-1 mb-4">
            <div className="flex items-center justify-between">
                {list.map(btn => <SectionSelectNavbar setHighBtn={setHighBtn} highBtn={highBtn} key={btn.id} name={btn.value} id={btn.id} /> )}
            </div>
        </div>
    )
}
