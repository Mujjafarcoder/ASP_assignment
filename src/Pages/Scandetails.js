import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Headpart from "../Components/Headpart";
import Applayout from "../Components/Applayout";

export default function Scandetails() {

  const { id } = useParams();

  const [scan, setScan] = useState(null);
  const [organization, setOrganization] = useState(null);
  const [activeTab, setActiveTab] = useState("activity");

useEffect(() => {

  fetch("/db.json")
    .then(res => res.json())
    .then(data => {
      const scanData = data.scans.find(s => s.id === Number(id));
      setScan(scanData);
      setOrganization(data.organization);
    });

}, [id]);

  
  if (!scan) {
    return <div className="p-4">Loading...</div>;
  }


  const steps = ["Spidering", "Mapping", "Testing", "Validating", "Reporting"];

  const currentStep =
    scan.progress < 20 ? 0 :
    scan.progress < 40 ? 1 :
    scan.progress < 60 ? 2 :
    scan.progress < 80 ? 3 : 4;

  const activityLogs = [
    "[09:00:00] Starting reconnaissance",
    "[09:01:00] Target is online",
    "[09:02:00] Apache server detected",
    "[09:03:00] Testing authentication endpoints",
    "[09:06:00] Vulnerability detected"
  ];

  return (
    <div className="container-fluid p-4">

 

<div className="row">
<div className=" col-xl-2">
      <Applayout/>
</div>
<div className=" col-xl-10">
     <Headpart/>
   {organization && (
        <div className="mb-4 mt-3 text-muted small">
          <strong>Organization:</strong> {organization.name} |
          <strong> Owner:</strong> {organization.owner} |
          <strong> Total Scans:</strong> {organization.totalScans} |
          <strong> Updated:</strong> {organization.lastUpdated}
        </div>
      )}

    
      <div className="card shadow-sm p-4 mb-4">
        <div className="row align-items-center">

          <div className="col-md-3 text-center">
            <div
              className="border rounded-circle d-flex flex-column justify-content-center align-items-center"
              style={{ width: "120px", height: "120px", margin: "auto" }}
            >
              <h4>{scan.progress}%</h4>
              <small>{scan.status}</small>
            </div>
          </div>

          <div className="col-md-9">

            <div className="d-flex justify-content-between mb-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`text-center ${
                    index === currentStep
                      ? "text-success fw-bold"
                      : "text-muted"
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>

            <div className="row text-muted small">
              <div className="col-md-3">
                Scan Name <br />
                <strong>{scan.scanName}</strong>
              </div>

              <div className="col-md-3">
                Scan Type <br />
                <strong>{scan.type}</strong>
              </div>

              <div className="col-md-3">
                Status <br />
                <strong>{scan.status}</strong>
              </div>

              <div className="col-md-3">
                Last Scan <br />
                <strong>{scan.lastScan}</strong>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div className="row">


        <div className="col-md-7">
          <div className="card shadow-sm">

            <div className="card-header d-flex justify-content-between">
              <span>Live Scan Console</span>
              <span className="badge bg-success">{scan.status}</span>
            </div>

            <div className="card-body">

              <div className="mb-3">
                <button
                  className={"btn btn-sm me-2 "}
                  onClick={() => setActiveTab("activity")}
                >
                  Activity Log
                </button>

                <button
                  className={"btn btn-sm "}
                  onClick={() => setActiveTab("verification")}
                >
                  Verification Loops
                </button>
              </div>

              <div
                style={{
                  background: "#111",
                  color: "#0f0",
                  height: "300px",
                  overflowY: "auto",
                  padding: "15px",
                  fontFamily: "monospace",
                  fontSize: "14px"
                }}
              >
                {activeTab === "activity"
                  ? activityLogs.map((log, index) => (
                      <div key={index}>{log}</div>
                    ))
                  : "No verification loops available."}
              </div>

            </div>
          </div>
        </div>

       
        <div className="col-md-5">
          <div className="card shadow-sm">
            <div className="card-header">Vulnerabilities</div>
            <div className="card-body">

              <span className="badge bg-danger me-2">
                Critical: {scan.vulnerabilities?.critical}
              </span>

              <span className="badge bg-warning text-dark me-2">
                High: {scan.vulnerabilities?.high}
              </span>

              <span className="badge bg-info text-dark me-2">
                Medium: {scan.vulnerabilities?.medium}
              </span>

              <span className="badge bg-success">
                Low: {scan.vulnerabilities?.low}
              </span>

            </div>
          </div>
        </div>

      </div>

</div>
</div>
     
    </div>
  );
}