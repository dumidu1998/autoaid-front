import React from 'react'
import { Link } from 'react-router-dom';
export default function StaffMemListManageBtn(props) {
    return (
        <div>
            <Link to={props.link}>
                < button className="bg-blue-600 w-28 h-10 text-sm font-bold font-primary rounded-md text-white ">Manage</button>
            </Link>
        </div >
    )
}
