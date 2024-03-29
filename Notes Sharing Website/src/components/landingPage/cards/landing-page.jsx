import React from "react";
import "./styles.css";

function LandingPage({ data = {} }) {
    return (
        <div className="recent-container">
            <h2>{data[0].heading}</h2>
            <div className="horizontal-line"></div>
            <div className="content">
                {data && data.length
                    ? data.slice(1).map((item, index) => (
                          <a href="#" key={index}>
                              {item.topic}
                          </a>
                      ))
                    : null}
            </div>
            <button className="btn">Click here to load More</button>
        </div>
    );
}

export default LandingPage;
