import './Subscribe.css'
import React, { useState } from 'react';
import Button from '../Button/Button.js';
export default function Subscribe() {
    const [email, setEmail] = useState('');
    const [focused, setFocused] = useState(false);
    const [error, setError] = useState('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    }
    const handleSubscribe = () => {
        if (email.trim() === ''){
            setError('* يرجى إدخال البريد الإلكتروني');
        }
        else if (!emailRegex.test(email)) {
            setError('* البريد الإلكتروني غير صالح');
        }
        else {
            console.log ('Yes');
            setEmail('');
            setError('');
        }
    }
    return (
        <div className='subscribe'>
            <div className='sub-description'>
                <h3>اشترك الان ليصلك كل ما هو جديد لدينا</h3>
                <p>احصل على آخر التحديثات في بريدك الإلكتروني</p>
            </div>
            <div className='inp-container'>
            <div className={`sub-inp ${focused? 'focused' : ''}`}>
                <input type = 'email' value = {email}
                onChange = {handleInputChange} placeholder='عنوان البريد الالكتروني'
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}></input>
                <Button className="sub-button" title="الاشتراك" onClick= {handleSubscribe}/>
            </div>
            {error && <p className='err-msg'>{error}</p>}
            </div>
        </div>
    );
}
