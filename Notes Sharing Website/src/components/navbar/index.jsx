import * as React from "react";
import "./styles.css";
import { IoSearchSharp } from "react-icons/io5";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState, useRef } from "react";
import logo from "./logo.png";
const pages = [
    "DSA",
    "HTML",
    "CSS",
    "Operating System",
    "Android notes",
    "Computer Graphics",
    "ML/AI",
    "JAVA",
    "Python",
    "JavaScript",
];

function Navbar() {
    const [input, setInput] = useState("");

    // const handleSeach = (value) => {
    //     setInput(value);
    //     input = "";
    // };
    return (
        <div className="navbar">
                <img
                    src={logo}
                    alt="company logo"
                    height="150px"
                    width="150px"
                    id="logo"
                />
            
            <div className="container">
                <div className="pages">
                    {pages.map((page, index) => (
                        <a href="#" key={index}>
                            {page}
                        </a>
                    ))}
                </div>
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <IoSearchSharp
                        onClick={() => handleSeach(e.target.value)}
                        size={25}
                    />
                </div>
                <Stack spacing={2} direction="row" className="btn-group">
                    <Button variant="contained">SignIn</Button>
                    <Button variant="outlined">Login</Button>
                </Stack>
            </div>
        </div>
    );
}

export default Navbar;
