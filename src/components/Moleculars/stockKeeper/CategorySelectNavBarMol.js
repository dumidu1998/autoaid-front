import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SectionSelectNavbar from '../../Atoms/stockKeeper/SectionSelectNavbar';

export default function CategorySelectNavBarMol() {

    const [list, setList] = useState([
        { categoryId: 0, categoryName: "All" },
        { categoryId: 1, categoryName: "A/C" },
    ])

    const [highBtn, setHighBtn] = useState(list[0].categoryId);
    // useEffect(()=>{props.setsectionName(highBtn) }, [highBtn]);
    // console.log("Child-"+highBtn);
    

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/inventory/categories`)
        .then(res => {
            // setshow("hidden");
            // window.document.getElementById("name")=res.data.itemName;
            setList(res.data);
           console.log(list);
        }
        ).catch(err => {
            console.log(err);
        })
    }, [])
    return (
        <div className=" bg-white p-2 shadow-2xl rounded-lg grid grid-cols-1 mb-2">
            <div className="flex items-center justify-between overflow-auto">
            <SectionSelectNavbar setHighBtn={setHighBtn} highBtn={highBtn} key={0} name={"All"} id={0} />
                {list.map(btn => <SectionSelectNavbar setHighBtn={setHighBtn} highBtn={highBtn} key={btn.categoryId} name={btn.categoryName} id={btn.categoryId} /> )}
            </div>
        </div>
    )
}
