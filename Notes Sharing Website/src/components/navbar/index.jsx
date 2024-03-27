import React from "react";
import { useEffect } from "react";
import "./styles.css";
import { IoSearchSharp } from "react-icons/io5";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState, useRef } from "react";
import logo from "./logo.png";

import { useNavigate } from "react-router-dom";

const pages = [
  { name: "DSA", id: "dsa" },
  { name: "HTML", id: "html" },
  { name: "CSS", id: "css" },
  { name: "Operating System", id: "operatingsystem" },
  { name: "Android notes", id: "androidnotes" },
  { name: "Computer Graphics", id: "computergraphics" },
  { name: "ML/AI", id: "ml-ai" },
  { name: "JAVA", id: "java" },
  { name: "Python", id: "python" },
  { name: "JavaScript", id: "javascript" },
];


function Navbar() {
  const nav = useNavigate();
  const [input, setInput] = useState("");

  // const handleSeach = (value) => {
  //     setInput(value);
  //     input = "";
  // };

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      "use strict";

      var header = document.querySelector(".start-style");
      window.addEventListener("scroll", function () {
        var scroll = window.pageYOffset || document.documentElement.scrollTop;
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
              _d.classList[_d.matches(":hover") ? "add" : "remove"]("show");
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
      document.getElementById("switch").addEventListener("click", function () {
        if (document.body.classList.contains("dark")) {
          document.body.classList.remove("dark");
          document.getElementById("switch").classList.remove("switched");
        } else {
          document.body.classList.add("dark");
          document.getElementById("switch").classList.add("switched");
        }
      });
    });
  }, []);

  return (
    <div className="relative mb-[6%]">
      <div class="navigation-wrap bg-light start-header start-style w-full">
        <nav class="navbar navbar-expand-md navbar-light w-full">
          <div
            class="z-[99] flex justify-evenly  items-center"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav py-4 py-md-0 flex">
              {pages.map((page, index) => (
                <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 cursor-pointer" key={index}>
                  <a class="nav-link " href={"/notes/" + page.id} >
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="container flex h-4/6 w-fit">
              <div className="search flex justify-center items-center">
                <input class="input" name="text" placeholder="Search..." type="search" />
                <IoSearchSharp
                  onClick={() => handleSeach(e.target.value)}
                  size={25}
                />
              </div>
              <Stack spacing={2} direction="row" className="btn-group px-10">
                {/* <Button variant="contained">SignIn</Button> */}
                <Button variant="outlined">Login</Button>
              </Stack>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
