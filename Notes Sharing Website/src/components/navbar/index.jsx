import React from "react";
import { useEffect } from "react";
import "./styles.css";
import { IoSearchSharp } from "react-icons/io5";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState, useRef } from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const pages = [
    { name: "Home", id: "home" },
    {
        name: "Web Development",
        items: [
            { name: "HTML", id: "html" },
            { name: "CSS", id: "css" },
            { name: "JavaScript", id: "javascript" },
        ],
        // id: "webdevelopment",
    },
    { name: "DSA", id: "dsa" },
    {
        name: "Core Subjects",
        items: [
            { name: "Operating System", id: "operatingsystem" },
            { name: "Computer Graphics", id: "computergraphics" },
        ],
        // id: "core",
    },
    {
        name: "Programming",
        items: [
            { name: "JAVA", id: "java" },
            { name: "Python", id: "python" },
            { name: "JavaScript", id: "javascript" },
        ],
        // id: "programming",
    },
    { name: "Android notes", id: "androidnotes" },
    { name: "ML/AI", id: "ml-ai" },
];

function Navbar() {
    const nav = useNavigate();
    const [input, setInput] = useState("");

    // const handleSeach = (value) => {
    //     setInput(value);
    //     input = "";
    // };

    const [selected, setSelected] = useState(null);

    function handleSelect(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    useEffect(() => {
        document.addEventListener("DOMContentLoaded", function () {
            "use strict";

            var header = document.querySelector(".start-style");
            window.addEventListener("scroll", function () {
                var scroll =
                    window.pageYOffset || document.documentElement.scrollTop;
                if (scroll >= 10) {
                    header.classList.remove("start-style");
                    header.classList.add("scroll-on");
                } else {
                    header.classList.remove("scroll-on");
                    header.classList.add("start-style");
                }
            });

            // Animation
            document.addEventListener("DOMContentLoaded", function () {
                document.body.classList.remove("hero-anime");
            });

            // Menu On Hover
            document.querySelectorAll(".nav-item").forEach(function (item) {
                item.addEventListener("mouseenter", function (e) {
                    if (window.innerWidth > 750) {
                        var _d = e.target.closest(".nav-item");
                        _d.classList.add("show");
                        setTimeout(function () {
                            _d.classList[
                                _d.matches(":hover") ? "add" : "remove"
                            ]("show");
                        }, 1);
                    }
                });
                item.addEventListener("mouseleave", function (e) {
                    if (window.innerWidth > 750) {
                        var _d = e.target.closest(".nav-item");
                        _d.classList.remove("show");
                    }
                });
            });

            // Switch light/dark
            document
                .getElementById("switch")
                .addEventListener("click", function () {
                    if (document.body.classList.contains("dark")) {
                        document.body.classList.remove("dark");
                        document
                            .getElementById("switch")
                            .classList.remove("switched");
                    } else {
                        document.body.classList.add("dark");
                        document
                            .getElementById("switch")
                            .classList.add("switched");
                    }
                });
        });
    }, []);

    return (
        <div className="relative mb-[6%]">
            <div className="navigation-wrap bg-light start-header start-style w-full">
                <nav className="navbar navbar-expand-md navbar-light w-full">
                    <div
                        className="z-[99] flex justify-evenly  items-center"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav py-4 py-md-0 flex">
                            {pages.map((page, index) => (
                                <li
                                    className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 cursor-pointer"
                                    key={index}
                                >
                                    {page.items === undefined ? (
                                        <Link
                                            className="nav-link "
                                            to={
                                                page.id == "home"
                                                    ? "/"
                                                    : page.id === undefined
                                                    ? "#"
                                                    : "/notes/" + page.id
                                            }
                                        >
                                            {page.name}
                                        </Link>
                                    ) : (
                                        <div className="relative">
                                            <button
                                                type="button"
                                                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900"
                                                id="menu-button"
                                                aria-expanded={
                                                    selected === index
                                                }
                                                aria-haspopup="true"
                                                onClick={() =>
                                                    handleSelect(index)
                                                }
                                            >
                                                {page.name}
                                                <svg
                                                    className={`-mr-1 h-5 w-5 text-gray-400 transition-transform ${
                                                        selected === index
                                                            ? "rotate-180"
                                                            : ""
                                                    }`}
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                            {selected === index ? (
                                                <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 w-full">
                                                    {page.items.map(
                                                        (item, innerIndex) => (
                                                            <Link
                                                                to={
                                                                    item.id ===
                                                                    undefined
                                                                        ? "#"
                                                                        : "/notes/" +
                                                                          item.id
                                                                }
                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                key={innerIndex}
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        )
                                                    )}
                                                </div>
                                            ) : null}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <div className="container flex h-4/6 w-fit">
                            <div className="search flex justify-center items-center">
                                <input
                                    className="input"
                                    name="text"
                                    placeholder="Search..."
                                    type="search"
                                />
                                <IoSearchSharp
                                    onClick={(e) => handleSeach(e.target.value)}
                                    size={25}
                                />
                            </div>
                            <Stack
                                spacing={2}
                                direction="row"
                                className="btn-group px-10"
                            >
                                <Link to="/login">
                                    <Button variant="outlined">Login</Button>
                                </Link>
                            </Stack>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
