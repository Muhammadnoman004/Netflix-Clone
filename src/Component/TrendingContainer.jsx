import React from "react";

export default function TrendingContainer() {
  return (
    <>
      <div className="class__trendingMainDiv">
        <div className="class__trendingChildDiv"></div>
      </div>
      <section className="trending__MainSection">
        <div className="trending">
          <div className="trending__heading">
            <h1>Trending Now</h1>

            <div className="trending__dropdownDiv">
              <div>
                <select name="" id="" className="trending__dropdown">
                  <option value="" className="trending__dropdownOption">
                    Pakistan
                  </option>
                  <option value="" className="trending__dropdownOption">
                    Global
                  </option>
                </select>
              </div>
              <div>
                <select name="" id="" className="trending__dropdown">
                  <option value="" className="trending__dropdownOption">
                    Movies
                  </option>
                  <option value="" className="trending__dropdownOption">
                    TV Shows
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
