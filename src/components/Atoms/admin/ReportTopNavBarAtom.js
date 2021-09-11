
import React, { useState, useEffect } from 'react';
import ReportTopNavbarBtn from './ReportTopNavbarBtn';


function ReportTopNavBarAtom(props) {
    const [list, setList] = useState([
        { id: 1, value: "mdmin" },
        { id: 2, value: "Service Advisor" },
        { id: 3, value: "Lead Technician" },
        { id: 4, value: "Cashier" },
        { id: 5, value: "Stock Keeper" },
        { id: 6, value: "Technician" },
    ])

    const [highBtn, setHighBtn] = useState(list[0].id);
    // props.setUserType(list[1].id);
    useEffect(() => { props.setUserType(highBtn) }, [highBtn]);
    
    //console.log("CHILD"+highBtn);

    return (
        <div className="grid grid-cols-3 gap-2 my-8 mx-4 place-items-center ">
            {/* Amodgen ahanna one */}
            {/* <RemmovenavbarAdminbtn  btnName="Service"  /> */}
            {list.map(btn => <ReportTopNavbarBtn setHighBtn={setHighBtn} highBtn={highBtn} key={btn.id} btnName={btn.value} id={btn.id} />)}

        </div>
    );
}

export default ReportTopNavBarAtom;