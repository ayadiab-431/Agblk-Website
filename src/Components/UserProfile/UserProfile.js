import { useState, useEffect } from "react";
import Header from '../../Components/Header/Header.js';
import './MarketerProfile.css';
import Button from "../../Components/Button/Button";
import PasswordField from "../../Components/PasswordField/PasswordField.js";
import Subscribe from "../../Components/Subscribe/Subscribe.js";
import Footer from "../../Components/Footer/Footer.js"; 
import { useNavigate } from "react-router-dom";

export default function MyProfile() {
    const navigate = useNavigate()
    // get user data from local storage
    const [userData, setUserData] = useState(() => {
        return JSON.parse(localStorage.getItem("userData")) || {name: "", email: ""}
    })
    const [name, setName] = useState(userData.name || "My Name")  // change here after api
    const [currentPassword, setCurrentPassword] = useState(userData.password || "")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errors, setErrors] = useState({})
    // Delete Account Button
const handleDeleteAccount = async () => {
    // Window appears to confirm deletion
    const confirmDelete = window.confirm("هل أنت متأكد من حذف الحساب؟");
    if (!confirmDelete) return;

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${userData.id}`, {
        method: "DELETE",
        });

        if (response.ok) {
        localStorage.removeItem("userData");
        localStorage.removeItem("token"); 

        navigate("/login");
        } else {
        alert("فشل حذف الحساب");
    }
    } catch (error) {
        console.error("خطأ أثناء حذف الحساب", error);
        alert("حدث خطأ أثناء حذف الحساب");
    }
    };
    return (
    <div className="profile-wrapper">
        <div className="card">
            <div className="my-profile" id="my-acc">
                <h5>حسابي
                <Button to='/' className="delete-acc" title="حذف الحساب" onClick={handleDeleteAccount}/>
                </h5>
                <div className="profile-content">
                <div className="inf">
                    <div className="email-content">
                    <label>البريد الإلكتروني</label>
                    <p>{userData.email || "لا توجد بيانات"}</p>
                </div>
                <div className="login-inf">
                    <label>تم تسجيل الدخول بواسطة</label>
                    <p>البريد الإلكتروني</p>
                </div>
                <form className="update-name" onSubmit={(e) => e.preventDefault()}>
                    <p>تحديث الحساب</p>
                    <div className="form-group">
                        <label htmlFor='name-inp'>الاسم</label>
                        <div className="inp">
                            <i className="fa-regular fa-user"></i>
                            <input type="text" className="form-control" id="name-inp"
                                    name="name" placeholder="الاسم" value={name}
                                    onChange={(e) => setName(e.target.value)}></input>
                        </div>
                        {errors.name && <span className="error-msg">{errors.name}</span>}
                        </div>
                        <div className="form-btn">
                        <Button to='/profile' className="update-acc" title="تحديث حسابي" onClick={updateUserName}/> 
                        </div>
                </form>
                </div>
                <div className="update-password">
                    <form onSubmit={(e) => e.preventDefault()}>
                    <p>تحديث كلمة السر</p>
                    <PasswordField
                    label="كلمة السر الحالية"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="كلمة السر الخاصة بك"
                    errorMessage={errors.currentPassword}
                    />
                    <PasswordField
                    label="كلمة السر"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="كلمة السر الخاصة بك"
                    errorMessage={errors.newPassword}
                    />
                    <PasswordField
                    label="تأكيد كلمة السر"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="تأكيد كلمة السر"
                    errorMessage={errors.confirmPassword}
                    />
                    <Button to='/profile' className="update-acc" title="تحديث كلمة السر" onClick={updatePassword}/> 
                    </form>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
}
