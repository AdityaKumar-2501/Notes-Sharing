import React from "react";
import Navbar from "../navbar";
import LoadData from "../landingPage/load-data";
import UploadSection from "../uploadSection/upload";
import Footer from "../footer/footer";
function upload() {
    return (
        <div>
            <Navbar />
            <UploadSection />
            <Footer />
        </div>
    );
}

export default upload;
