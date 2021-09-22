import React from 'react'
import ButtonHover from '../../Atoms/ButtonHover'
import Addnew from '../../Atoms/serviceStation/Addnew'
import BookModel from './BookModel'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { eraseCookie } from '../../../jsfunctions/cookies';


export default function TopNav() {
    function clearCookies(){
        eraseCookie('username');
        eraseCookie('userId');
        eraseCookie('email');
        eraseCookie('token');
        eraseCookie('userType');
    }
    return (
        <div>
            <div className=" w-screen p-2 shadow-lg md:flex items-center justify-center hidden">
                <div className="w-10/12  flex justify-between items-center">
                    <img src="/imgs/Logo.png"  className="w-40"/>
                    <div>
                        <a href="/customer" className="font-primary font-semibold hover:text-primary-0 mx-10">Home</a>
                        <a href="/customer/profile" className="font-primary font-semibold hover:text-primary-0 mx-10">Profile</a>
                    </div>
                    <div className="text-white flex items-center">
                        <BookModel/>
                        <button onClick={clearCookies} className="bg-primary-0 p-3 rounded-lg text-white"><Link to="/"> Log Out </Link></button>
                    </div>

                </div>
            </div>
            <div className=" w-screen p-1 flex shadow-lg justify-center md:hidden bg-forth-0">
                <img src="/imgs/Logo.png"  className="w-40 mt-2"/>

            </div>
        </div>
    )
}
