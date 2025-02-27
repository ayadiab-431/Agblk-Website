import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Components/Logo/Logo";
import Button from "../../Components/Button/Button";
import "./Login.css";
import { useEffect, useState } from "react";
import PhoneNumberInput from "../../Components/PhoneInput/PhoneInput";
import PasswordField from "../../Components/PasswordField/PasswordField";

export default function SignUp() {
    const [form, setForm] = useState({
        name: "",
        telephone: "",
        email: "",
        password: "",
    });
    const [confirmPass, setConfirmPass] = useState("");
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const year = new Date().getFullYear();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{1,4}?\s?\d{6,14}$/;

    const validateForm = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "* الاسم مطلوب";
        if (!form.telephone.trim()) newErrors.telephone = "* الهاتف مطلوب";
        else if (!phoneRegex.test(form.telephone)) newErrors.telephone = "* رقم الهاتف غير صالح";
        if (!form.email.trim()) newErrors.email = "* البريد الإلكتروني مطلوب";
        else if (!emailRegex.test(form.email)) newErrors.email = "* البريد الإلكتروني غير صالح";
        if (!form.password) newErrors.password = "* كلمة السر مطلوبة";
        else if (form.password.length < 8) newErrors.password = "* كلمة السر يجب أن تكون 8 أحرف على الأقل";
        if (!confirmPass.trim()) newErrors.confirmPass = "* تأكيد كلمة السر مطلوب";
        else if (confirmPass !== form.password) newErrors.confirmPass = "* كلمة السر غير متطابقة";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handlePhoneChange = (phone) => {
        setForm({ ...form, telephone: phone });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsLoading(true);
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (response.ok) {
                navigate("/login", { replace: true });
                // localStorage.setItem("userData", JSON.stringify(data));
            } else {
                setErrors({ general: data.message || "* حدث خطأ أثناء إنشاء الحساب" });
            }
        } catch (error) {
            setErrors({ general: "* فشل الاتصال بالسيرفر" });
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        document.body.classList.add("login-body");
        return () => document.body.classList.remove("login-body");
    }, []);

    return (
        <div className="form-container">
            <div className="container">
                <Logo to="/" />
                <div className="user-form">
                    <h4 className="form-title">مرحبا بك في اجبلك</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name-inp">الاسم</label>
                            <div className="inp">
                                <i className="fa-regular fa-user"></i>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name-inp"
                                    placeholder="الاسم الخاص بك"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                />
                            </div>
                            {errors.name && <span className="error-msg">{errors.name}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="telephone-inp">الهاتف</label>
                            <div className="inp">
                                <PhoneNumberInput onPhoneChange={handlePhoneChange} />
                            </div>
                            {errors.telephone && <span className="error-msg">{errors.telephone}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email-inp">البريد الإلكتروني</label>
                            <div className="inp">
                                <i className="fa-regular fa-envelope"></i>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email-inp"
                                    placeholder="البريد الإلكتروني الخاص بك"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                />
                            </div>
                            {errors.email && <span className="error-msg">{errors.email}</span>}
                        </div>

                        <PasswordField
                            label="كلمة السر"
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            placeholder="كلمة السر الخاصة بك"
                            errorMessage={errors.password}
                        />

                        <PasswordField
                            label="تأكيد كلمة السر"
                            value={confirmPass}
                            onChange={(e) => setConfirmPass(e.target.value)}
                            placeholder="تأكيد كلمة السر"
                            errorMessage={errors.confirmPass}
                        />

                        <div className="confirm">
                            <Button type="submit" className="confirm-btn sign-up-btn" title="تأكيد" disabled={isLoading} />
                        </div>

                        {errors.general && <span className="error-msg">{errors.general}</span>}

                        <div className="no-account">
                            <p>لديك حساب بالفعل؟</p>
                            <Link to="/login">تسجيل الدخول</Link>
                        </div>

                        <h5 className="or">أو</h5>
                        <Link to="/coming-soon" className="google-acc">
                            <img src={process.env.PUBLIC_URL + "/assest/mini-img/google.png"} className="google-img" alt="Sign by google" />
                            <button className="google-btn">تسجيل بواسطة جوجل</button>
                        </Link>
                        <p className="policies">
                            من خلال المتابعة، فإنك توافق على <Link to="/">سياسة الخصوصية</Link> .
                        </p>
                    </form>
                </div>
                <p className="laws-name">&copy; {year} - جميع الحقوق محفوظة لموقع اجبلك</p>
            </div>
        </div>
    );
}
