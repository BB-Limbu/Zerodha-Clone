import React from "react";

function Signup() {
  return (
    <div className="container" id="signHero">
      <div className="row text-center p-5 mb-5">
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
          <h2 className="fs-4">Signup now</h2>
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

      <div className="text-center mt-5 mb-5">
        <h2>Already have a demat account?</h2>
        <p className="text-muted mt-4">
          Move your holdings to Zerodha and we'll cover your transfer costs, up
          to ₹500,{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            learn more
          </a>
          .
        </p>
        <h2 className="fs-2" style={{ marginTop: "10%" }}>
          Investment options with Zerodha demat account
        </h2>
      </div>

      <div className="mt-5">
        <div className="row">
          <div className="col-3">
            <img
              src="./media/images/stocks-acop.svg"
              style={{ marginLeft: "50%" }}
            />

            <br />
            <img
              src="./media/images/ipo-acop.svg"
              style={{ marginLeft: "50%", marginTop: "30%" }}
            />
          </div>
          <div className="col-3">
            <h2>Stocks</h2>
            <p className="text-muted">
              Invest in all exchange-listed securities
            </p>
            <h2 style={{ marginTop: "30%" }}>IPO</h2>
            <p className="text-muted">
              Apply to the latest IPOs instantly via UPI
            </p>
          </div>
          <div className="col-3">
            <img
              src="./media/images/mf-acop.svg"
              style={{ marginLeft: "50%" }}
            />
            <br />
            <img
              src="./media/images/fo-acop.svg"
              style={{ marginLeft: "50%", marginTop: "40%" }}
            />
          </div>
          <div className="col-3">
            <h2>Mutual funds</h2>
            <p className="text-muted">
              Invest in commission-free direct mutual funds
            </p>

            <h2 style={{ marginTop: "30%" }}>Futures & options</h2>
            <p className="text-muted">
              Hedge and mitigate market risk through simplified F&O trading
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className=" mb-5 mt-5 input-group-text rounded-start rounded-end btn btn-primary w-40 py-2 fs-5">
            Explore Investment
          </button>
        </div>
      </div>

      <div
        className=" text-muted"
        style={{ marginTop: "10%", marginBottom: "10%" }}
      >
        <div className="row">
          <h2 className="text-center fs-4">
            Steps to open a demat account with Zerodha
          </h2>
          <div className="col-6 mt-5">
            <img
              src="./media/images/steps-acop.svg"
              style={{ width: "80%", marginLeft: "30px" }}
            />
          </div>
          <div className="col-6 mt-5 mb-5" style={{ lineHeight: "3em" }}>
            <div className="account-open-step">
              <div
                className="acop-step d-inline-flex justify-content-center align-items-center border rounded-circle"
                style={{ width: "30px", height: "30px" }}
              >
                01
              </div>
              <p className="d-inline-block fw-medium ms-3 fs-5">
                Enter the requested details
              </p>
            </div>

            <div className="account-open-step">
              <div
                className="acop-step d-inline-flex justify-content-center align-items-center border rounded-circle"
                style={{ width: "30px", height: "30px" }}
              >
                02
              </div>
              <p className="d-inline-block fw-medium ms-3 fs-5">
                Complete e-sign & verification
              </p>
            </div>

            <div className="account-open-step">
              <div
                className="acop-step d-inline-flex justify-content-center align-items-center border rounded-circle"
                style={{ width: "30px", height: "30px" }}
              >
                03
              </div>
              <p className="d-inline-block fw-medium ms-3 fs-5">
                Start investing!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
