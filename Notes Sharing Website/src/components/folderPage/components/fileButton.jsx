import React from "react";
import "./styles.css";

function GetFileButton({ type }) {
    console.log("TYPE: ", type);
    switch (type) {
        case "doc":
            return DocButton;

        case "application/pdf":
            return PDFButton();

        case "html":
            return HtmlButton;

        default:
            return DefaultButton(type);
    }
}

function DocButton() {
    return (
        <div className="icon blue">
            <span className="doc-icon doc">☰</span>
            <span className="doc-type">DOC</span>
        </div>
    );
}

function HtmlButton() {
    return (
        <div className="icon turquoise">
            <span className="doc-icon code">❮ ❯</span>
            <span className="doc-type">HTML</span>
        </div>
    );
}
function XLSButton() {
    return (
        <div className="icon darkgreen">
            <span className="doc-icon spread">⊟</span>
            <span className="doc-type">XLS</span>
        </div>
    );
}
function ZIPButton() {
    return (
        <div className="icon lightgreen">
            <span className="doc-icon zip">⊡</span>
            <span className="doc-type">ZIP</span>
        </div>
    );
}
function LOLButton() {
    return (
        <div className="icon yellow">
            <span className="doc-icon misc">☺</span>
            <span className="doc-type">LOL</span>
        </div>
    );
}
function PTTButton() {
    return (
        <div className="icon orange">
            <span className="doc-icon ptt">⧉</span>
            <span className="doc-type">PTT</span>
        </div>
    );
}
function PDFButton() {
    return (
        <div className="">
            {/* <span className="doc-icon pdf">☷</span>
            <span className="doc-type">PDF</span> */}
            <img
                src={`https://pro.alchemdigital.com/api/extension-image/pdf`}
                className="w-[150px] h-[150px] my-0"
                alt="icon"
            />
        </div>
    );
}

function DefaultButton(title) {
    console.log(title.split("-").pop());
    return (
        <div className="">
            {/* <span className="doc-icon pdf">☷</span>
            <span className="doc-type">{title.split("-").pop()}</span> */}
            <img
                src={`https://pro.alchemdigital.com/api/extension-image/${title
                    .split("-")
                    .pop()}`}
                className="w-[150px] h-[150px] my-0"
                alt="icon"
            />
        </div>
    );
}

export default GetFileButton;
