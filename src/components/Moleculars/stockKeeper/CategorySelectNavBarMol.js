import React, { useState, useEffect } from 'react';
import SectionSelectNavbar from '../../Atoms/stockKeeper/SectionSelectNavbar';

export default function CategorySelectNavBarMol() {

    const [list, setList] = useState([
        { id: 0, value: "All" },
        { id: 1, value: "A/C" },
        { id: 2, value: "Brakes" },
        { id: 3, value: "Clutch" },
        { id: 4, value: "Suspension" },
        { id: 5, value: "Body" },
        { id: 6, value: "Body" },
        { id: 7, value: "Body" },
        { id: 8, value: "Body" },
        { id: 9, value: "Body" },
        { id: 10, value: "Body" },
        { id: 11, value: "All" },
        { id: 12, value: "A/C" },
        { id: 13, value: "Brakes" },
        { id: 14, value: "Clutch" },
        { id: 15, value: "Suspension" },
        { id: 16, value: "Body" },
        { id: 17, value: "Body" },
        { id: 18, value: "Body" },
        { id: 19, value: "Body" },
        { id: 20, value: "Body" },
        { id: 21, value: "Body" },


      
    ])

    const [highBtn, setHighBtn] = useState(list[0].id);
    // useEffect(()=>{props.setsectionName(highBtn) }, [highBtn]);
    // console.log("Child-"+highBtn);
    
    return (
        <div className=" bg-white p-2 shadow-2xl rounded-lg grid grid-cols-1 mb-2">
            <div className="flex items-center justify-between overflow-auto">
                {list.map(btn => <SectionSelectNavbar setHighBtn={setHighBtn} highBtn={highBtn} key={btn.id} name={btn.value} id={btn.id} /> )}
            </div>
        </div>
    )
}
