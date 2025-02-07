import { useState } from "react";

export default function PasswordField({ label, value, onChange, placeholder, errorMessage }) {
    const [showPassword, setShowPassword] = useState(false);

    return (
    <div className="form-group">
        <label>{label}</label>
        <div className="inp">
        <i className="ri-lock-line lock"></i>
        <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
        <i
            className={`fa-regular ${showPassword ? "fa-eye" : "fa-eye-slash"} eye`}
            onClick={() => setShowPassword(!showPassword)}
        ></i>
        </div>
        {errorMessage && <span className="error-msg">{errorMessage}</span>}
    </div>
    );
}
