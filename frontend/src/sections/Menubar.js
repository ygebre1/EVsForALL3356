import React from 'react';
import logo from '../images/EVS FOR ALL.png';

function Menubar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid">
        <a className="navbar-brand" href="\">
        <img src={logo} alt="EVs for All Website" style={{ width: '25%', height: 'auto' }}/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="\">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/FindCars">Find Cars</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/stations">Find Charging Stations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="\" tabIndex="-1" aria-disabled="true">Information</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menubar;
