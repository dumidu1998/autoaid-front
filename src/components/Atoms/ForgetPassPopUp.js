import React, { useState } from "react";
import "../../App.css";
import { Formik, Field, Form } from 'formik';
import ForgetPassEmailBtn from "./admin/ForgetPassEmailBtn";



export default function ForgetPassPopUp(props) {
    const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  let btnStyle=" font-primary ";
  btnStyle+=props.clickbtnFontColor;

  return (
    <div>
      <button onClick={toggleModal} className={btnStyle}>{props.clickbtnName}</button>

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
                    <Formik>
                        <Form>
                            <div className="flex flex-col">
                                <p>Please enter the email address that you used to sign up the AutoAid </p>
                                <div className="flex justify-between items-center mt-3">
                                    <Field id="email" name="email" placeholder="Jane78@gmail.com" className=" ml-2 mt-2 rounded-lg shadow-lg w-60 h-10 pl-5" />
                                    <ForgetPassEmailBtn name="submit" link="/fpass"/>
                                </div>
                                <div>
                                    
                                </div>
                            </div>
                        </Form>
                    </Formik>
                   
                </div>
              </div>
            </div>
            <button className="close-modal -mt-9  -mr-8 w-16 h-16 text-sm" onClick={toggleModal}>
              <img src="https://img.icons8.com/fluency/96/000000/close-window.png"/>
            </button>
          </div>
        </div>
      )}
      
    </div>
  );
}

