import React, { useState, useEffect } from 'react'
import ReportTopNavBarAtom from '../../Atoms/admin/ReportTopNavBarAtom'

export default function ReportTopNavbar(props) {
    const [userType, setUserType] = useState(1);
    return (
        <div className="bg-white shadow-xl rounded-lg w-full ">
            <ReportTopNavBarAtom setUserType={setUserType} userType={userType} />
        </div>
    )
}
