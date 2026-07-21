import React from "react";

function Signup() {
  return (
    <div className="container" id="signHero">
      <div className="row text-center p-5">
        <h2 className="mt-5">Open a free demat and trading account online</h2>
        <p className="mt-3 text-muted fs-4">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>
      <div className="row">
        <div className="col">
          <img src="./media/images/account_open.svg" />
        </div>
        <div className="col">
          <h2>Signup now</h2>
          <p className="text-muted mt-3 ">Or track your existing application</p>
          <div className="d-flex mt-4">
            <span className="input-group-text rounded-start-0 rounded-end-0 border w-5 gap-2">
              <img
                src="https://flagcdn.com/w40/in.png"
                alt="India"
                width="28"
              />
              +91
            </span>

            <input
              type="text"
              style={{ width: "50%" }}
              placeholder="Enter your mobile number"
            />
          </div>
          <button className="mt-5 input-group-text rounded-start-0 rounded-end-0 btn btn-primary w-50 py-2 fs-5">
            Get OTP
          </button>
          <p className="text-muted mt-5 fs-6">
            By proceeding, you agree to the Zerodha{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              terms
            </a>{" "}
            &{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              privacy policy
            </a>
          </p>
          <p className="text-muted fs-6">
            Looking to open NRI account?{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Click here
            </a>
          </p>
        </div>
      </div>
      
      <div className="text-center mt-5">
        <h2>Already have a demat account?</h2>
        <p className="text-muted mt-4">Move your holdings to Zerodha and we'll cover your transfer costs, up to ₹500, learn more.</p>
        <h2  className="fs-2" style={{marginTop:"10%"}}>Investment options with Zerodha demat account</h2>
      </div>

      <div className="row">
        <div className="col-4"></div>
        <div className="col-4"></div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default Signup;
