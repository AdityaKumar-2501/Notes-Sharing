import React, { useState } from "react";

function PasswordToggle() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div>
      <input
        type={isPasswordVisible ? "text" : "password"}
        placeholder="Enter your password"
      />
      <button onClick={togglePasswordVisibility}>
        {isPasswordVisible ? "Hide" : "Show"} Password
      </button>
    </div>
  );
}

export default PasswordToggle;
