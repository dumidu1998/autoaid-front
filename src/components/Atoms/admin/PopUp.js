import React, { useState } from "react";
import "../../../App.css";
import PopBtnOne from "./PopBtnOne";

export default function PopUp(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  let btnStyle="w-32 h-12 rounded-lg shadow-xl font-primary ";
  btnStyle+=props.clickbtnColor;

  return (
    <div>
      <button onClick={toggleModal} className={btnStyle}>{props.clickbtnName}</button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content rounded-xl bg-red-400">
            <div>
              <h2 className="font-primary text-lg font-medium">{props.Heading1}</h2>
            </div>
            <div className="flex justify-center items-center mt-8 mb-8">
              <div className=" w-full">
                <div>
                    <PopBtnOne popUpBtnOne={props.popUpBtnOne} popUpBtnOneColor={props.popUpBtnOneColor}/>
                </div>
                <div>

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
