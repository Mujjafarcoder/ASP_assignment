import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../db.json'

export default function Headpart2() {

    const [data, setData] = useState([]);


    const navigate=useNavigate();

   useEffect(() => {
    fetch("/db.json")
        .then(res => res.json())
        .then(value => {
            setData(value.scans);
        })
}, [])

 

    return (
        <div className='container-fluid py-3'>

         
            <div className='row text-center text-md-start gy-2 mb-4 '>
                <div className='col-12 col-md text-dark'>
                    Org: <strong>Project X</strong>
                </div>
                <div className='col-12 col-md text-dark'>
                    Owner: <strong>Namangiri</strong>
                </div>
                <div className='col-6 col-md text-dark'>
                    Total Scans: <strong>1000</strong>
                </div>
                <div className='col-6 col-md text-dark'>
                    Rescan: <strong>100</strong>
                </div>
                <div className='col-6 col-md text-dark'>
                    Failed: <strong>100</strong>
                </div>
                <div className='col-6 col-md text-dark'>
                    10 min ago
                </div>
            </div>

       
            <div className='row row-cols-2 row-cols-md-4 g-3  mb-4'>
                <div className=' col float-start'>
                    <div className='card shadow-sm border-0'>
                        <div className='card-body'>
                            <p className='text-secondary mb-1'>Critical Severity</p>
                            <h4>86</h4>
                        </div>
                    </div>
                </div>

                <div className=' col float-start'>
                    <div className='card shadow-sm border-0'>
                        <div className='card-body'>
                            <p className='text-secondary mb-1'>High Severity</p>
                            <h4>16</h4>
                        </div>
                    </div>
                </div>

                <div className=' col float-start'>
                    <div className='card shadow-sm border-0'>
                        <div className='card-body'>
                            <p className='text-secondary mb-1'>Medium Severity</p>
                            <h4>26</h4>
                        </div>
                    </div>
                </div>

                <div className=' col float-start'>
                    <div className='card shadow-sm border-0'>
                        <div className='card-body'>
                            <p className='text-secondary mb-1'>Low Severity</p>
                            <h4>16</h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search & Buttons */}
            <div className='row align-items-center mb-3 g-3'>
                <div className='col-12 col-lg-8'>
                    <input
                        placeholder='Search scan by name or type'
                        className='form-control form-control-lg'
                    />
                </div>

                <div className='col-12 col-lg-4 text-lg-end'>
                    <button className='btn btn-outline-dark me-2 mb-2 mb-lg-0'>Filter</button>
                    <button className='btn btn-outline-dark me-2 mb-2 mb-lg-0'>Column</button>
                    <button className='btn btn-success'>New Scan</button>
                </div>
            </div>

            {/* Table Section */}
            <div className='row'>
                <div className='col-12'>
                    <div className='table-responsive'>
                        <table className="table table-bordered table-hover align-middle">
                            <thead className='table-light'>
                                <tr>
                                    <th>Scan Name</th>
                                    <th>Type</th>
                                    <th>Status</th>
                                    <th>Progress</th>
                                    <th>Vulnerabilities</th>
                                    <th>Last Scan</th>
                                </tr>
                            </thead>

                            <tbody>
                                {data.map((item) => (
                                    <tr key={item.id}  onClick={() => navigate(`/scandetails/${item.id}`)}>
                                        <td>{item.scanName}</td>
                                        <td>{item.type}</td>
                                        <td>
                                            <span className={`badge 
                                                ${item.status === "Completed" ? "bg-success" :
                                                  item.status === "Failed" ? "bg-danger" :
                                                  "bg-warning text-dark"}`}>
                                                {item.status}
                                            </span>
                                        </td>

                                        <td style={{ minWidth: "120px" }}>
                                            <div className="progress">
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: `${item.progress}%` }}
                                                >
                                                    {item.progress}%
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            <span className="badge bg-danger me-1">
                                                {item.vulnerabilities?.critical}
                                            </span>
                                            <span className="badge bg-warning text-dark me-1">
                                                {item.vulnerabilities?.high}
                                            </span>
                                            <span className="badge bg-info text-dark me-1">
                                                {item.vulnerabilities?.medium}
                                            </span>
                                            <span className="badge bg-success">
                                                {item.vulnerabilities?.low}
                                            </span>
                                        </td>

                                        <td>{item.lastScan}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}