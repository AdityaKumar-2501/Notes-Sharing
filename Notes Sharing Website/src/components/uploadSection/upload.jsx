import React from "react";
import "./styles.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function UploadSection() {
    return (
        <div className="upload-container">
            <div className="section">
                <h2>Want to Contribute ! </h2>
                <Stack spacing={2} direction="row">
                    <Link to="/upload" className="upload-container">
                        <Button variant="contained" color="error">
                            Upload Notes
                        </Button>
                    </Link>
                </Stack>
            </div>
        </div>
    );
}

export default UploadSection;
