import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
  return (
    <div className="container-fluid bottom-0 footer">
      <div className="row mt-4">
        <div className="col">
          <h4 className="footer-head">ABOUT</h4>
        </div>
        <div className="col">
          <h4 className="footer-head">Contact US</h4>
        </div>
        <div className="col">
          <h4 className="ps-5 footer-head">Social</h4>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>About US</p>
        </div>
        <div className="col">
          <p>Support: support@betconx.com</p>
        </div>
        <div className="col">
          <h2>
            <i className="bi bi-send p-2"></i>
            <i className="bi bi-twitter p-2"></i>
            <i className="bi bi-linkedin p-2"></i>
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>Privacy Policy</p>
        </div>
        <div className="col">
          <p>Queries: info@betconx.com</p>
        </div>
        <div className="col">
          <h2>
            <i class="bi bi-facebook p-2"></i>
            <i class="bi bi-instagram p-2"></i>
            <i class="bi bi-youtube p-2"></i>
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>Terms of Use</p>
        </div>
      </div>
      <p className="col text-xl-center">
        Copyright &#169; 2022 Betconx, All Right Reserved{' '}
      </p>
    </div>
  );
};

export default Footer;
