import React from 'react'
import ButtonSecondary from '../../components/Atoms/ButtonSecondary'
import Addnew from '../../components/Atoms/serviceStation/Addnew'
import ButtonSecond from '../../components/Atoms/serviceStation/ButtonSecond'
import TopNav from '../../components/Moleculars/customer/TopNav'

export default function Profile() {
    return (
        <div className="w-screen font-primary">
            <TopNav/>
            <div className="flex justify-center my-10">
                <div className="w-1/2 h-screen flex flex-col shadow-lg items-center rounded-lg">
                    <div className="w-10/12 my-5 flex justify-between ">
                        <div>
                            <img src="/imgs/user.png" className="w-20"/>
                            <p>Dumidu Kasun</p>
                            <p>Dumi_rox</p>

                        </div>
                        <div className="space-y-5">
                            <div>
                                <p>Address :- </p>
                                <p>388/53 Stage 1 Anuradhapura</p>
                            </div>
                            <div>
                                <p>Phone No 1 :- </p>
                                <p>0775509830</p>
                            </div>
                            <div>
                                <p>Phone No 2 :- </p>
                                <p>0775509830</p>
                            </div>

                        </div>
                        
                    </div>
                    <Addnew txt="Edit Bio" />
                    <ButtonSecondary txt="Change Password" />

                </div>

            </div>
        </div>
    )
}
