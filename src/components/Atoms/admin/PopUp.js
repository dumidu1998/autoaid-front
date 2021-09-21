import React, { useState } from "react";
import "./PopUp.css";

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
            <h2 className="font-primary text-lg font-medium">{props.Heading1}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores?
            </p>
            <button className="close-modal -mt-9  -mr-8 w-20 h-20 text-sm" onClick={toggleModal}>
              <img src="https://img.icons8.com/fluency/96/000000/close-window.png"/>
            </button>
          </div>
        </div>
      )}
      
    </div>
  );
}
