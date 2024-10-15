import React from "react";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <div className="app-header">
          <p className="main-header">
            <b>AGP Report:</b> Continuous Glucose Monitoring
          </p>
        </div>

        <div className="agp-container">
          <div className="flex justify-between items-center">
            <div className="text-gray-500">
              <p className="font-bold">From: 2015-03-19 - 2015-04-02 14 days</p>
              <p>15 minutes glucose readings</p>
            </div>

            <select value="">
              <option value="patient1">Patient 1</option>
              <option value="patient1">Patient 2</option>
              <option value="patient1">Patient 3</option>
              <option value="patient1">Patient 4</option>
              <option value="patient1">Patient 5</option>
            </select>
          </div>

          <div className="flex justify-between space-x-3">
            {/* TIME IN RANGES */}
            <div className="w-[55%]">
              <div className="card">
                <div className="card-header">
                  Time In Ranges
                  <small className="text-sm font-normal ml-2">
                    Goals for Type 1 and Type 2 Diabetes
                  </small>
                </div>
                <div className="card-body">
                  {/* TIME IN RANGE CHART HERE */}
                </div>
              </div>
            </div>

            {/* Glucose METRICS */}
            <div className="space-y-3 w-[45%]">
              {/* TEST PATIENT  */}

              <div className="card">
                <div className="card-header">Glucose Metrics</div>
                <div>{/* GLUCOSE METRICS */}</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">Ambulatory Glucose Profile (AGP)</div>
            <div className="card-body">
              AGP is a summary of glucose values from the report period, with
              median (50%) and other percentiles shown as if they occurred in a
              single day.
              {/* AGP REPORT CHART */}
            </div>
          </div>

          <div className="card">
            <div className="card-header">Daily Glucose Profiles</div>
            <div className="card-body">
              Each day represents a mindnight-to-midnight period.
              {/* Daily Glucose Profiles CHART */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
