import React,{useState} from "react";
import "./styles.css";
import Navbar from "../navbar";
import PasswordToggle from "./passwordToggle";

function SignUp() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    // Function to handle password change
    const handlePasswordChange = (value) => {
        setPassword(value);
        // Check if passwords match whenever password changes
        setPasswordsMatch(value === confirmPassword);
    };

    // Function to handle confirm password change
    const handleConfirmPasswordChange = (value) => {
        setConfirmPassword(value);
        // Check if passwords match whenever confirm password changes
        setPasswordsMatch(value === password);
    };

     // Function to handle form submission
     const handleSubmit = (e) => {
        e.preventDefault();
        // Check if passwords match before submitting the form
        if (password === confirmPassword) {
            // Passwords match, you can proceed with form submission
            console.log("Passwords match, proceed with form submission");
        } else {
            // Passwords do not match
            console.log("Passwords do not match");
        
            return (<div className="text-red-600">Passwords do not match</div>)
        }
    };


    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <Navbar />
            <form className="form" onSubmit={handleSubmit}>
                <div className="flex-column">
                    <label>Username </label>
                </div>
                <div className="inputForm">
                    <svg
                        height="20"
                        viewBox="0 0 32 32"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="Layer_3" data-name="Layer 3">
                            <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                        </g>
                    </svg>
                    <input
                        type="text"
                        className="input-Login"
                        placeholder="Enter your Username"
                        required
                    />
                </div>

                <div className="flex-column">
                    <label>Email </label>
                </div>
                <div className="inputForm">
                    <svg
                        fill="none"
                        viewBox="0 0 25 25"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="bg-white"
                    >
                        <path
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            stroke-width="1.5"
                            stroke="#141B34"
                            d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5"
                        ></path>
                        <path
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            stroke="#141B34"
                            d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"
                        ></path>
                    </svg>
                    <input
                        type="text"
                        className="input-Login"
                        placeholder="Enter your Email"
                        required
                    />
                </div>

                <div className="flex-column">
                    <label>Password </label>
                </div>
                <PasswordToggle onChange={handlePasswordChange} />

                <div className="flex-column">
                    <label>Confirm Password </label>
                </div>
                <PasswordToggle onChange={handleConfirmPasswordChange} />

                <button className="button-submit">Sign Up</button>

                <p className="p line">Or With</p>

                <div className="flex-row justify-center">
                    <button className="login-btn google w-[50%]">
                        <svg
                            version="1.1"
                            width="20"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 512 512"
                            style={{ enableBackground: "new 0 0 512 512" }}
                            xmlSpace="preserve"
                        >
                            <path
                                style={{ fill: "#FBBB00" }}
                                d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
	c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
	C103.821,274.792,107.225,292.797,113.47,309.408z"
                            ></path>
                            <path
                                style={{ fill: "#518EF8" }}
                                d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
	c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
	c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
                            ></path>
                            <path
                                style={{ fill: "#28B446" }}
                                d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
	c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
	c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
                            ></path>
                            <path
                                style={{ fill: "#F14336" }}
                                d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
	c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
	C318.115,0,375.068,22.126,419.404,58.936z"
                            ></path>
                        </svg>
                        Google
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
