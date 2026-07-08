import React from "react";

function Universe() {
  return (
    <div className="container" >
      <div className="row text-center mt-5">
        <h2 style={{marginTop:"5%"}}>The Zerodha Universe</h2>
        <p className="text-muted mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          < a href = ""><img src="media/images/zerodhafundhouse.png"  style={{width:"40%"}} /> </a>
          <p className="text-small text-muted mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
         <a href ="#"><img src="media/images/sensibull-logo.svg" style={{width:"60%"}}/></a>
          <p className="text-small text-muted mt-3">
            TOptions trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <a href = "#"><img src="media/images/tijori.svg"  style={{width:"40%"}}/></a>
          <p className="text-small text-muted mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <a href ="#"><img src="media/images/streakLogo.png" style={{ width: "40%" }} /></a>
          <p className="text-small text-muted mt-3">
            TSystematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <a href ="#"><img src="media/images/smallcaseLogo.png" /></a>
          <p className="text-small text-muted mt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <a href ="#"><img src="media/images/dittoLogo.png" style={{width:"40%"}} /></a>
          <p className="text-small text-muted mt-3 ">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button class = 'p-2 btn btn-primary fs-5 mb-4 mt-5' style = {{width: "15%", margin: "0 auto"}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
