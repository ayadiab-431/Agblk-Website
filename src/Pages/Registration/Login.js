import { Link } from "react-router-dom";
import Logo from "../../Components/Logo/Logo";
import Button from "../../Components/Button/Button";
import './Login.css';
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordField from "../../Components/PasswordField/PasswordField";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({})
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const year = new Date().getFullYear();
    
    const validateForm = () => {
        const newErrors = {};
        if (email.trim() === ''){
            newErrors.email = '* البريد الإلكتروني مطلوب';
        }
        else {
            if (!emailRegex.test(email)){
                newErrors.email = '* البريد الإلكتروني غير صالح';
            }
        }
        if (password === '') {
            newErrors.password = '* كلمة السر مطلوبة';
        }
        else if (password.length < 8){
            newErrors.password = '* كلمة السر يجب أن تكون 8 احرف على الأقل';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true)
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts',
                    {method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({email, password})
                });
                if (response.ok) {
                    const data = await response.json();
                    console.log('Login successful:', data);
                    localStorage.setItem("userData", JSON.stringify(data));
                    navigate('/', {replace: true});
                }
                else {
                    console.error('Login failed');
                }
            }
                catch (error) {
                    console.error('Login failed');
                }
            finally {
                setIsLoading(false);
            }
        }
    };
    useEffect(() => {
        // إضافة كلاس للبودي
        document.body.classList.add("login-body");
        
        // إزالة الكلاس عند مغادرة الصفحة
        return () => {
            document.body.classList.remove("login-body");
        };
    }, []);
    return (
        <div className="form-container">
            <div className="container">
                <Logo to='/'/>
                <div className="user-form">
                    <h4 className="form-title">مرحبا بك في اجبلك</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                        <label htmlFor='email-inp'>البريد الإلكتروني</label>
                        <div className="inp">
                            <i className="fa-regular fa-envelope"></i>
                            <input type="email" className="form-control" id="email-inp"
                                    name="email" placeholder="البريد الإلكتروني الخاص بك"
                                    value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        {errors.email && <span className="error-msg">{errors.email}</span>}
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor='password-inp'>كلمة السر</label>
                            <div className="inp">
                            <i className="ri-lock-line lock"></i>
                            <input type={showPassword? 'text' : 'password'} className="form-control" id="password-inp"
                                name='password' placeholder="كلمة السر الخاصة بك"
                                value={password} onChange={(e) => setPassword(e.target.value)}></input>
                            <i className={`fa-regular ${showPassword ? "fa-eye" : "fa-eye-slash"} eye`}
                            onClick={() => setShowPassword(!showPassword)}></i>
                            </div>
                        {errors.password && <span className="error-msg">{errors.password}</span>}
                        </div> */}
                        <PasswordField
                            label="كلمة السر"
                            value={password}
                            onChange={(e) => setPassword(e.target.value )}
                            placeholder="كلمة السر الخاصة بك"
                            errorMessage={errors.password}
                            />
                        <div className="confirm">
                            
                            <Link to='/forget-password' className="forget-password">نسيت كلمة السر</Link>
                            <Button type ='submit' className='confirm-btn'
                                title="تأكيد" disabled = {isLoading}/>
                        </div>
                        <div className="no-account">
                            <p>ليس لديك حساب؟</p>
                            <Link to='/sign-up'>إنشاء حساب</Link>
                        </div>
                        <h5 className="or">أو</h5>
                        <Link to='/coming-soon' className="google-acc">
                            <img src={process.env.PUBLIC_URL + "/assest/mini-img/google.png"} className="google-img" alt="Sign by google"></img>
                            {/* <img src="/assest/mini-img/google.png" className="google-img" alt="Sign by google"></img> */}
                            <button className="google-btn">تسجيل بواسطة جوجل</button>
                        </Link>
                        <p className="policies">من خلال المتابعة، فإنك توافق على <Link to='/'>سياسة الخصوصية</Link> .</p>
                    </form>                    
                </div>
                <p className="laws-name">&copy; {year} - جميع الحقوق محفوظة لموقع اجبلك</p>
            </div>
        </div>
    );
}