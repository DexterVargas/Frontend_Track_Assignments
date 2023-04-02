import React from "react";
import logo from '../assets/images/footer-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/stylesheets/style.css";

function Footer() {
  return (
    <footer className="text-center text-white bottom">
        <div className="container p-2 footer-logo-container"><img className="footer-logo" src={logo} alt="footer-logo"/>{'  '}Rockstar FE!</div>
        <div className="text-center p-2">
            V88 Batch-4 FE Track, ©️ 2023 Copyright:{' '}
            <a className="text-white" href="https://www.linkedin.com/in/dexter-vargas-801b96241/">Let's connect!🤝</a>
        </div>
    </footer>
  );
}
export default Footer;