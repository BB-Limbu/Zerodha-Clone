import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)", }}>
      <div className="container border-top mt-5 mb-4">
        <div className="row mt-5">
          <div className="col-3">
            <img src="media/images/logo.svg" style={{ width: "50%" }} />
            <p> &copy; 2010 - 2026, Zerodha Broking Ltd.All rights reserved</p>
          </div>
          <div className="col-2 " style={{ lineHeight: "2.5" }}>
            <h5>Account</h5>
            <a href="" className="footer_link">
              Open demat account{" "}
            </a>
            <br />
            <a href="" className="footer_link">
              Minor demat account
            </a>
            <br />
            <a href="" className="footer_link">
              NRI demat account
            </a>
            <br />
            <a href="" className="footer_link">
              HUF demat account
            </a>
            <br />
            <a href="" className="footer_link">
              {" "}
              Commodity
            </a>
            <br />
            <a href="" className="footer_link">
              Dematerialisation
            </a>
            <br />
            <a href="" className="footer_link">
              {" "}
              Fund transfer
            </a>
            <br />
            <a href="" className="footer_link">
              MTF
            </a>
          </div>
          <div className="col-3 " style={{ lineHeight: "2.5" }}>
            <h5>Support</h5>
            <a href="" className="footer_link">
              Contact us
            </a>
            <br />
            <a href="" className="footer_link">
              Support portal
            </a>
            <br />
            <a href="" className="footer_link">
              How to file a complaint?
            </a>
            <br />
            <a href="" className="footer_link">
              Status of your complaints
            </a>
            <br />
            <a href="" className="footer_link">
              Bulletin
            </a>
            <br />
            <a href="" className="footer_link">
              Circular
            </a>
            <br />
            <a href="" className="footer_link">
              Z-Connect blog
            </a>
            <br />
            <a href="" className="footer_link">
              Downloads
            </a>
          </div>
          <div className="col-2" style={{ lineHeight: "2.5" }}>
            <h5>Company</h5>
            <a href="" className="footer_link">
              About
            </a>
            <br />
            <a href="" className="footer_link">
              Philosophy
            </a>
            <br />
            <a href="" className="footer_link">
              Press & media
            </a>
            <br />
            <a href="" className="footer_link">
              Careers
            </a>
            <br />
            <a href="" className="footer_link">
              Zerodha Cares (CSR)
            </a>
            <br />
            <a href="" className="footer_link">
              Zerodha.tech
            </a>
            <br />
            <a href="" className="footer_link">
              Open source
            </a>
            <br />
            <a href="" className="footer_link">
              Referral program
            </a>
          </div>
          <div className="col-2 " style={{ lineHeight: "2.5" }}>
            <h5>Quick links</h5>
            <a href="" className="footer_link">
              Upcoming IPOs
            </a>
            <br />
            <a href="" className="footer_link">
              Brokerage charges
            </a>
            <br />
            <a href="" className="footer_link">
              Market holidays
            </a>
            <br />
            <a href="" className="footer_link">
              Economic calendar
            </a>
            <br />
            <a href="" className="footer_link">
              Calculators
            </a>
            <br />
            <a href="" className="footer_link">
              Markets
            </a>
            <br />
            <a href="" className="footer_link">
              Sectors
            </a>
            <br />
            <a href="" className="footer_link">
              Gift Nifty
            </a>
          </div>
        </div>

        <div
          className=" smallprint mt-5  text-muted"
          style={{ fontSize: "12px " }}
        >
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For any complaints pertaining
            to securities broking please write to
            <a href="" style={{ textDecoration: "none" }}>
              complaints@zerodha.com
            </a>
            , for DP related to{" "}
            <a href="" style={{ textDecoration: "none" }}>
              dp@zerodha.com
            </a>
            . Please ensure you carefully read the Risk Disclosure Document as
            prescribed by{" "}
            <a href="" style={{ textDecoration: "none" }}>
              SEBI | ICF
            </a>
          </p>

          <p>
            Procedure to file a complaint on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              SEBI SCORES
            </a>
            : Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances
          </p>

          <p>
            <a href="" style={{ textDecoration: "none" }}>
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </a>
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p>
            India's largest broker based on networth as per NSE.{" "}
            <a href="" style={{ textDecoration: "none" }}>
              NSE broker factsheet
            </a>
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers/depository
            participants. Receive information of your transactions directly from
            Exchange/Depositories on your mobile/email at the end of the day.
            Issued in the interest of investors. KYC is one time exercise while
            dealing in securities markets - once KYC is done through a SEBI
            registered intermediary (broker, DP, Mutual Fund etc.), you need not
            undergo the same process again when you approach another
            intermediary." Dear Investor, if you are subscribing to an IPO,
            there is no need to issue a cheque. Please write the Bank account
            number and sign the IPO application form to authorize your bank to
            make payment in case of allotment. In case of non allotment the
            funds will remain in your bank account. As a business we don't give
            stock tips, and have not authorized anyone to trade on behalf of
            others. If you find anyone claiming to be part of Zerodha and
            offering such services, please create a ticket here.
          </p>

          <p>
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>

          <p>
            Fixed deposit products offered on this platform are third-party
            products (TPP) and are not Exchange traded products. These are
            offered through Blostem Fintech Private Limited. Zerodha Broking
            Limited (SEBI Registration No.: INZ000031633) is acting solely as a
            distributor for these products. Any disputes arising with respect to
            such distribution activity will not have access to SEBI SCORES/ODR,
            Exchange Investor Grievance Redressal Forum, or Arbitration
            mechanism. Fixed deposits are regulated by the Reserve Bank of India
            (RBI).
          </p>
        </div>
        <div className="footer-link">
          <a href="#" className="footer-link">
            NSE{" "}
          </a>
          <a href="#" className="footer-link">
            BSE{" "}
          </a>
          <a href="#" className="footer-link">
            MCX{" "}
          </a>
          <a href="#" className="footer-link">
            MSEI{" "}
          </a>
          <a href="#" className="footer-link">
            Terms & conditions
          </a>
          <a href="#" className="footer-link">
            {" "}
            Policies & procedures
          </a>
          <a href="#" className="footer-link">
            Privacy policy{" "}
          </a>
          <a href="#" className="footer-link">
            Disclosure
          </a>
          <a href="#" className="footer-link">
            {" "}
            For investor's attention
          </a>
          <a href="#" className="footer-link">
            {" "}
            Investor charter Sitemap
          </a>
          <a href="#" className="footer-link">
            {" "}
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
