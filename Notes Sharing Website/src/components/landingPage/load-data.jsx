import React from "react";
import LandingPage from "./cards/landing-page";
import Recentdata from "./data/RecentUpdateData";
import dsaData from "./data/dsa-notes";
import "./load-data.css";

function LoadData() {
    return (
        <div className="load-data">
            <LandingPage data={Recentdata} />
            <LandingPage data={dsaData} />
        </div>
    );
}

export default LoadData;
