import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function Error() {
    return (
        <section classNameName="page_404">
            <h1 className="errorheading">404 Error Page</h1>
            <section className="error-container">
                <span className="four">
                    <span className="screen-reader-text">4</span>
                </span>
                <span className="zero">
                    <span className="screen-reader-text">0</span>
                </span>
                <span className="four">
                    <span className="screen-reader-text">4</span>
                </span>
            </section>
            <div className="link-container">
                <Link to="/" className="more-link">
                    Visit Home Page
                </Link>
            </div>
        </section>
    );
}

export default Error;
