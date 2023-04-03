import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/stylesheets/style.css";

function Footer() {
  return (
    <footer className="text-center text-dark fixed-bottom">
        <div className="container p-1 footer-logo-container"><span className='handwriting'>Dexter Vargas</span></div>
        <div className="text-center p-1">
            V88 Batch-4 FE Track, ©️ 2023 Copyright:{' '}
            <a className="text-dark" href="https://www.linkedin.com/in/dexter-vargas-801b96241/">Let's connect!🤝</a>
        </div>
        
    </footer>
  );
}
export default Footer;