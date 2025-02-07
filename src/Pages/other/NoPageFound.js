import Header from '../../Components/Header/Header.js';
// import { Link } from 'react-router-dom';
import './NoPageFound.css';
import Button from '../../Components/Button/Button.js';
// import Home from '../Home/Home.js';
export default function NoPageFound () {
    return(
        <div className="not-found-container">
        <Header/>
        <div className='container'>
            {/* <img src='/assest/other/404error.avif' alt="404 Error" className="not-found-image" /> */}
            <img src={process.env.PUBLIC_URL + "/assest/other/404error.avif"} alt="404 Error" className="not-found-image"/>
            <h1 className='error-title'>404 - الصفحة غير متوفرة</h1>
            <p className='error-desription'>عذرًا، الصفحة التي تحاول الوصول إليها غير موجودة أو ربما تم نقلها إلى موقع آخر. يُرجى العودة إلى الصفحة الرئيسية أو استخدام شريط البحث للوصول إلى المحتوى الذي تبحث عنه.</p>
            <Button to='/' className='back-home-button' title='رجوع للصفحة الرئيسية'/>
        </div>
        
        </div>
    );
}