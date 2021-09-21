import React, { useEffect, useState } from "react";
import "../../App.css";
import { Formik, Field, Form } from 'formik';
import ForgetPassEmailBtn from "./admin/ForgetPassEmailBtn";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

function randomString(len, an) {
    an = an && an.toLowerCase();
    var str = "",
        i = 0,
        min = an == "a" ? 10 : 0,
        max = an == "n" ? 10 : 62;
    for (; i++ < len;) {
        var r = Math.random() * (max - min) + min << 0;
        str += String.fromCharCode(r += r > 9 ? r < 36 ? 55 : 61 : 48);
    }
    return str;
}

export default function ForgetPassPopUp(props) {
    const [modal, setModal] = useState(false);
    const [email, setEmail] = useState("block");
    const [code, setCode] = useState("hidden");

    const [readcode, setrealcode] = useState('');

    const [emaill, setemaill] = useState('');
    const [codee, setcodee] = useState('');


    const [newpwd, setnewpwd] = useState('');
    const [cnewpwd, setcnewpwd] = useState('');

    useEffect(() => {
        setrealcode(randomString(6, "n"))
    }, [])

    const onClickSubmit = (e) => {
        e.preventDefault();
        axios.post('https://duminodemailer.herokuapp.com/autoaidresetpwd', {
            email: emaill,
            code: readcode
        }).then(e => {
            setEmail("hidden");
            setCode("block");
        })

    }
    const onClickCode = (e) => {
        e.preventDefault();
        if (newpwd !== cnewpwd) { toast.error('❌ Passwords are Not matching!'); return 0 }
        if (codee === readcode) {
            axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/forgetpwd`, {
                email: emaill,
                newpwd: cnewpwd
            }).then(e => {

                toast.success("Password Changed Successfully!! Please Login Now!");
                toast.success("Please Login Now!");
                setEmail("block");
                setCode("hidden");
                setemaill('');
                setcnewpwd('');
                setnewpwd('');
                setcodee('');

                toggleModal();
            }).catch(e => {
                toast.error('❌ Invalid Code! Try Again!');
            })
        } else {
            toast.error('❌ Invalid Code! Try Again!');
        }

    }

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    let btnStyle = " font-primary hover:underline ";
    btnStyle += props.clickbtnFontColor;

    return (
        <div>
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <button onClick={toggleModal} className={btnStyle}>{props.clickbtnName}</button>

            <div className={email}>
                {modal && (
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content rounded-xl ">
                            <div className="mt-8">
                                <h2 className="font-primary text-lg font-medium">{props.Heading1}<span className="ml-3 text-red-700  text-sm font-primary">(*required)</span></h2>
                            </div>
                            <div className="flex justify-center items-center mt-5 mb-8">
                                <div className="w-10/12 flex  items-center justify-between ">
                                    <div>
                                        <div className="flex flex-col">
                                            <p className="font-primary text-gray-600 text-sm">Please enter the email address that you used to sign up the AutoAid </p>
                                            <div className="flex justify-between items-center mt-3">
                                                <form onSubmit={onClickSubmit}>
                                                    <input type="email" id="email" name="email" placeholder="Jane78@gmail.com" value={emaill} onChange={e => setemaill(e.target.value)} className=" ml-2 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" required />
                                                    <button className="text-white font-primary font-medium bg-blue-600 px-6 py-1 mt-3 ml-4 rounded-lg shadow-xl mr-6">Submit</button>
                                                </form>
                                            </div>
                                            <div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="close-modal -mt-9  -mr-8 w-16 h-16 text-sm" onClick={toggleModal}>
                                <img src="https://img.icons8.com/fluency/96/000000/close-window.png" />
                            </button>
                        </div>
                    </div>
                )}
            </div>




            <div className={code}>
                {modal && (
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content rounded-xl ">
                            <div className="mt-8">
                                <h2 className="font-primary text-lg font-medium">{props.Heading2}</h2>
                            </div>
                            <div className="flex justify-center items-center mt-5 mb-8">
                                <div className="w-10/12 flex  items-center justify-between ">
                                    <div>
                                        <div className="flex flex-col">
                                            <p className="font-primary text-sm  text-blue-700 ">Please enter the code which is sent to the email address you submit</p>
                                            <div className="flex justify-between items-center mt-3 ">
                                                <form onSubmit={onClickCode}>
                                                    <input type="text" id="code1" name="code1" placeholder="Verification Code" className=" ml-2 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" value={codee} onChange={e => setcodee(e.target.value)} required />
                                                    <input type="text" id="code2" name="code2" placeholder="New Password" className=" ml-2 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" pattern="[a-zA-Z0-9]{5,}" title="Password Should at least 5 Characters!" value={newpwd} onChange={e => setnewpwd(e.target.value)} required />
                                                    <input type="text" id="code3" name="code3" placeholder="Confirm New Password" className=" ml-2 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" value={cnewpwd} onChange={e => setcnewpwd(e.target.value)} required />
                                                    <br /><button className="text-white font-primary font-medium bg-green-600 px-6 py-1 mt-3 mx-12  rounded-lg shadow-xl mr-6">Submit</button>

                                                </form>
                                            </div>
                                            <div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="close-modal -mt-9  -mr-8 w-16 h-16 text-sm" onClick={toggleModal}>
                                <img src="https://img.icons8.com/fluency/96/000000/close-window.png" />
                            </button>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
}

