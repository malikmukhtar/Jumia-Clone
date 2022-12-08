import React from "react";
import "../Style/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div style={{ display: "flex" }}>
        <a href="/" rel="noopener noreferrer">
          Developers <a>|</a>
        </a>{" "}
        <a
          href="https://github.com/malikmukhtar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Malik <a>|</a>
        </a>{" "}
        {" "}
        <a
          href="https://github.com/farukade"
          target="_blank"
          rel="noopener noreferrer"
        >
          Faruk <a>|</a>
        </a>{" "}
        {" "}
        <a
          href="https://github.com/tylerjusfly"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tyler
        </a>
      </div>
      <div className="footer_setions">
        <div className="sections">
          <h6>LET US HELP YOU</h6>
          <p>Stay Safe</p>
          <p>Help Center</p>
          <p>Payment Methods</p>
        </div>

        <div className="sections">
          <h6>ABOUT JUMIA NIGERIA</h6>
          <p>About us</p>
          <p>Jumia Careers</p>
          <p>IPR Protection Policy</p>
        </div>

        <div className="sections">
          <h6>MAKE MONEY WITH US</h6>
          <p>Sell on Jumia</p>
          <p>Become a Sales Consultant</p>
          <p>Become a Logistics Service Partner</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
