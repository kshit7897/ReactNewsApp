import React, { useState } from "react";
// import img1 from "./images/qr-code.png";

const Share = () => {
  const [shareModal, SetshareModal] = useState(false);

  const toggleWindow = () => {
    SetshareModal(!shareModal);
  };
  return (
    <div>
      <h3 className="share-text">
        <i onClick={toggleWindow} class="fa-solid fa-share-from-square"></i>
      </h3>

      {shareModal && (
        <div className="modal">
          <div onClick={toggleWindow} className="overlay">
            <div className="details">
              <i
                onClick={toggleWindow}
                className="fa-regular fa-circle-xmark"
              ></i>
              <img className="qrcode" src="./images/qr-code.png" alt="" />
              <h3 className="whatsapp-text">Scan Whatsapp-Web</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Share;
