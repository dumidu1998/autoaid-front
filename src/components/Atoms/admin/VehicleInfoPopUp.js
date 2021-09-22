import React, { useState } from "react";
import "../../../App.css";
import PopBtnOne from "./PopBtnOne";
import PopBtnTwo from "./PopBtnTwo";

export default function VehicleInfoPopUp(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  let btnStyle="bg-blue-600 transform hover:scale-110 w-24 h-10 text-sm  font-primary rounded-md text-white sm:w-32";
  btnStyle+=props.clickbtnColor;

  return (
    <div>
      <button onClick={toggleModal} className={btnStyle}>{props.clickbtnName}</button>

      {modal && (
        <div className="modal font-primary ">
          <div onClick={toggleModal} className="overlay "></div>
          <div className="modal-content rounded-xl bg-red-400">
            <div className="mt-8 ">
              <h2 className="font-primary text-lg font-medium">{props.Heading1}</h2>
            </div>
            <div className=" bg-Background-0 rounded-lg mb-3 font-primary font-md">
            <div className="flex flex-col justify-center items-center p-8">
              <div className="flex space-x-3">
                  <div className="bg-white shadow-xl rounded-xl w-64 h-12 flex justify-center items-center mt-3 p-3">
                    Vin: <span className="text-green-700 ml-2">{props.vin}</span>
                  </div>
                  <div className="bg-white shadow-xl rounded-xl w-64 h-12 flex justify-center items-center mt-3 p-3">
                    Repair Stat: <span className="text-green-700 ml-2">{props.repairStatus}</span>
                  </div>

              </div>
              <div className="flex space-x-3">
                <div className="bg-white shadow-xl rounded-xl w-64 h-12 flex justify-center items-center mt-3 p-3">
                  Customer: <span className="text-green-700 ml-2">{props.customerName}</span>
                </div>
                <div className="bg-white shadow-xl rounded-xl w-64 h-12 flex justify-center items-center mt-3 p-3">
                  Contact: <span className="text-green-700 ml-2">{props.contactNo}</span>
                </div>

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
