import React from "react";
import '../Styles/applayout.css'
import { Link } from "react-router-dom";

export default function Applayout() {
  return (
    <div className="d-flex">

      {/* SIDEBAR */}
      <div className="sidebar p-4 d-none d-xl-block">
        <h4 className="logo mb-4">aps</h4>

        <ul className="list-unstyled">
          <li className="nav-item active"> <i className="bi bi-ui-checks-grid pe-1"></i><Link to="/dashboard">Dashboard</Link></li>
          <li className="nav-item"> <i className="bi bi-clipboard-check"></i>Projects</li>
          <li className="nav-item"><i className="bi bi-reception-4"></i>Scans</li>
          <li className="nav-item" ><i className="fa-thin fa-calendar-minus"></i>Schedule</li>
        </ul>

        <hr />

        <ul className="list-unstyled">
          <li className="nav-item"><i className="fa-regular fa-bell"></i>Notifications</li>
          <li className="nav-item"><i className="bi bi-gear"></i> Settings</li>
          <li className="nav-item"> <i className="bi bi-info-circle-fill"></i> Support</li>
        </ul>
      </div>

     
    </div>
  );
}