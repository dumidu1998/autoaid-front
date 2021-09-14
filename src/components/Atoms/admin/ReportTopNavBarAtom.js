
import React, { useState, useEffect } from 'react';
import ReportTopNavbarBtn from './ReportTopNavbarBtn';


function ReportTopNavBarAtom(props) {
    const [list, setList] = useState([
        { id: 1, value: "Sales 1" },
        { id: 2, value: "Sales 2" },
        { id: 3, value: "Sales 3" },
        { id: 4, value: "Sales 4" },
        { id: 5, value: "Sales 5" },
    ])

    const [highBtn, setHighBtn] = useState(list[0].id);
    // props.setUserType(list[1].id);
    useEffect(() => { props.setUserType(highBtn) }, [highBtn]);
    
    //console.log("CHILD"+highBtn);

    return (
        <div className="grid grid-cols-1 gap-2 my-8 mx-4 place-items-center sm:grid-cols-3 md:grid-cols-5">
            {/* Amodgen ahanna one */}
            {/* <RemmovenavbarAdminbtn  btnName="Service"  /> */}
            {list.map(btn => <ReportTopNavbarBtn setHighBtn={setHighBtn} highBtn={highBtn} key={btn.id} btnName={btn.value} id={btn.id} />)}

        </div>
    );
}

export default ReportTopNavBarAtom;