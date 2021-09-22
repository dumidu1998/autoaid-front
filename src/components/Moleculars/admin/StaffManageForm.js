
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import StaffManageBtn from '../../Atoms/admin/StaffManageBtn';

export default function StaffManageForm(props) {

    const [initvals, setinitvals] = useState();
    const [addOrUpdate, setaddOrUpdate] = useState('Add');
    const [addBtnStyle, setaddBtnStyle] = useState("bg-green-600 w-48 h-12 rounded-xl text-white text-xl mt-2 mr-8");
    const history = useHistory();

    useEffect(() => {
        setinitvals(props.staffdetails);
        if (props.staffdetails.email !== "") {
            setaddOrUpdate("Update");
            setaddBtnStyle("bg-blue-600 w-32 md:w-40  xl:w-44 h-10 md:h-12 rounded-xl text-white text-lg mr-8");
        } else {
            setaddOrUpdate("Add");
            setaddBtnStyle("bg-green-600 w-32 md:w-40 xl:w-44 h-10   md:h-12 rounded-xl text-white text-lg  -mt-14 mr-8");
        }
    }, [props.staffdetails])

    console.log(props.staffdetails.staffId);


    return (

        <div className="">
            <Formik
                enableReinitialize
                initialValues={initvals}
                onSubmit={async (values, { resetForm }) => {
                    // console.log(values);  
                    await new Promise((r) => setTimeout(r, 500));
                    if (props.staffdetails.email !== "") {
                        axios.post(`${process.env.REACT_APP_API_BASE_URL}/admin/update/staff`, values)
                            .then(function (response) {
                                props.setadded(!props.added);
                                console.log(props.staffdetails);

                                toast.success('Staff Updated');
                                resetForm();
                                history.push("/admin/staff");
                            })
                            .catch(function (error) {
                                console.log("error");
                                
                                console.log(error.response.data);
                                alert("error Occured. Please Check data again");
                            });
                    } else {
                        axios.post(`${process.env.REACT_APP_API_BASE_URL}/admin/addstaff`, values)

                            .then(function (response) {
                                // handle success
                                //onsole.log(response);
                                props.setadded(!props.added);
                                alert("Admin " + response.data.fisrtName + " with id " + response.data.sid + " Added Sucessfully");
                                resetForm();
                                history.push("/admin/staff");
                            })
                            .catch(function (error) {
                                //handle error
                                console.log(error.response.data);
                                alert("error Occured. Please Check data again");
                            })
                            .then(function () {
                                //submit();
                                // always executed

                            });

                    }
                }}
            >

                <Form>
                    <div className="flex flex-col items-center">

                        <div className=" bg-white rounded-2xl shadow-xl  flex  flex-col justify-around items-center -mt-48 py-9 mb-4 w-11/12 md:flex-row lg:-mt-56">

                            <div className="flex flex-col">
                                <div className="mt-5">
                                    <Link to="/admin/staff" >
                                        <StaffManageBtn btnName="New Form" />
                                    </Link>
                                </div>
                                <div className="md:flex justify-between mb-5 mt-4 md:hidden" >
                                    <button className={addBtnStyle} type="submit">{addOrUpdate}</button>
                                    {/* <button className="bg-blue-600 w-48 h-12 rounded-xl text-white text-xl mt-2 mr-8 ml-8" type="">Update </button> */}
                                    {/* <button className="bg-red-600 w-48 h-12 rounded-xl text-white text-xl mt-2 ml-8" type="">Delete </button> */}
                                </div>
                                <Field id="staffId" name="staffId" placeholder="100" className=" hidden" />

                                <label htmlFor="firstName" className="font-primary  text-md font-semibold  mt-6">First Name</label>
                                <Field id="firstName" name="firstName" placeholder="Jane Irish" className=" ml-2 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" />

                                <label htmlFor="userName" className="font-primary  text-md font-semibold  mt-6">User Name</label>
                                <Field id="userName" name="userName" placeholder="Jane" className=" ml-2 rounded-lg shadow-lg w-60 h-10  mt-2 pl-5" />

                                <label htmlFor="email" className="font-primary  text-md font-semibold  mt-6">Email</label>
                                <Field id="email" name="email" placeholder="jane@gmail.com" className=" ml-2 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" />

                                <label htmlFor="contactNum" className="font-primary  text-md font-semibold  mt-6">Contact Number</label>
                                <Field id="contactNum" name="contactNum" placeholder="0772435678" className=" ml-2 rounded-lg shadow-lg w-60 h-10  mt-2 pl-5" />

                                <label htmlFor="city" className="font-primary  text-md font-semibold  mt-6">City </label>
                                <Field id="city" name="city" placeholder="Veyangoda" className=" ml-2 rounded-lg shadow-lg w-60 h-10  mt-2 pl-5" />
                            </div>
                            <div className="flex flex-col">

                                <div className="md:flex justify-between mb-5 hidden md:block" >
                                    <button className={addBtnStyle} type="submit">{addOrUpdate}</button>
                                    {/* <button className="bg-blue-600 w-48 h-12 rounded-xl text-white text-xl mt-2 mr-8 ml-8" type="">Update </button> */}
                                    {/* <button className="bg-red-600 w-48 h-12 rounded-xl text-white text-xl mt-2 ml-8" type="">Delete </button> */}
                                </div>

                                <label htmlFor="lastName" className="font-primary  text-md font-semibold  mt-6">Last Name</label>
                                <Field id="lastName" name="lastName" placeholder="Viniger" className=" ml-2 rounded-lg shadow-lg w-60 h-10  mt-2 pl-5" />

                                <label htmlFor="userType" className="font-primary  text-md font-semibold  mt-6">UserType</label>
                                <Field id="userType" name="userType" className=" ml-2 rounded-lg shadow-lg w-60 h-10  mt-2 pl-5" component="select">
                                    {/* Error happens in if not selected or state changes*/}
                                    <option value="null">Select Type</option>
                                    <option value="ADMIN">Admin</option>
                                    <option value="CASHIER">Cashier</option>
                                    <option value="SERVICE_ADVISOR">Service Advisor</option>
                                    <option value="LEAD_TECHNICIAN">Lead Technician</option>
                                    <option value="STOCK_KEEPER">Stock Keeper</option>
                                    <option value="TECHNICIAN">Technician</option>
                                </Field>

                                <label htmlFor="password" className={addOrUpdate === 'Add' ? "hidden" : "font-primary  text-md font-semibold  mt-6"}>Change Password</label>
                                <Field id="password" type="checkbox" name="password" className={addOrUpdate === 'Add' ? "hidden" : ""} />

                                <label htmlFor="address" className="font-primary  text-md font-semibold  mt-6">Address</label>
                                <Field id="address" name="address" placeholder="16/A Wataddara, Veyangoda" className=" ml-2 rounded-lg shadow-lg w-60 h-32  mt-2 pl-5" />
                            </div>


                        </div>
                        
                       
                    </div>
                </Form>

            </Formik>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover

            />
        </div>

    )
}


