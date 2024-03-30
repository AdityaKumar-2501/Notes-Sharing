import React from "react";
import "./button.css";
import { useNavigate } from "react-router-dom";

function BackButton() {
    const navigate = useNavigate();
    return (
        <div className="mx-[11%] my-6">
            <button class="back-Btn" onClick={() => navigate(-1)}>
                <div class="svgWrapper">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 42 42"
                        className="svgIcon"
                    >
                        <path
                            stroke-width="5"
                            stroke="#fff"
                            d="M20 6L10 21L20 36"
                        ></path>
                    </svg>

                    <div className="backbutton-text pb-[4px]">Back</div>
                </div>
            </button>
        </div>
    );
}

export default BackButton;
