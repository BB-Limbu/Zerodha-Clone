import React from "react";

function Awards() {
  return (
    <div className="contianer mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Largest Stock broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha client contribute to over 15% of all volumes in
            India daily by Trading and Investing
          </p>
          <div className="row">
            <div className="col-6">
                <ul>
            <li>
              <p>Features and options</p>
            </li>
            <li>
              <p>Commdodity derivatives</p>
            </li>
            <li>
                <p>Currency derivatives</p>
            </li>
          </ul>
            </div>
            <div className="col-6">
                <ul>
            <li>
              <p>Stocks and IPOs</p>
            </li>
            <li>
              <p>Direct Matual funds</p>
            </li>
            <li>
                <p>Bonds and Govt. Securities</p>
            </li>
          </ul>
            </div>
          </div>
          <img src = '/media/images\pressLogos.png' style ={{width: "90%"}} />
          
        </div>
      </div>
    </div>
  );
}

export default Awards;
