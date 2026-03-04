  import React, { useState } from 'react'
  import '../Styles/applayout.css'
   import '../index.css'

  export default function Headpart() {

function toggleTheme() {

  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark")
    document.body.classList.add("light")
  } 
  else {
    document.body.classList.remove("light")
    document.body.classList.add("dark")
  }

}

   

    return (
      <div className='container-fluid py-3 border-bottom'>
        <div className='row align-items-center gy-3'>

          {/* Left Section - Breadcrumb */}
          <div className='col-12 col-lg-6 text-center text-lg-start'>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item fw-bold">
                  <i className="fa-regular fa-house me-1"></i>
                  Scan
                </li>
                <li className="breadcrumb-item">Private Assets</li>
                <li className="breadcrumb-item active text-primary" aria-current="page">
                  New Scans
                </li>
              </ol>
            </nav>
          </div>

          {/* Right Section - Buttons */}
          <div className='col-12 col-lg-6 text-center text-lg-end'>
            <button className='btn btn-outline-dark me-2 mb-2 mb-lg-0'>
              Export Report
            </button>
            <button className='btn btn-outline-danger'>
              Stop Scan
            </button>
       <button 
            onClick={toggleTheme} 
            className={`btn btn-sm ms-2 ${
              document.body.classList.contains("dark")
                ? "btn-outline-light"
                : "btn-outline-dark"
            }`}
          >
            <i className={`bi ${
              document.body.classList.contains("dark") ? "bi-sun" : "bi-moon"
            }`}></i>
      </button>  
     </div>

        </div>
      </div>
    )
  }