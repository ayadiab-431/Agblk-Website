import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import './PhoneNumberInput.css';

export default function PhoneNumberInput({onPhoneChange}) {
    const [phone, setPhone] = useState('');

    const handleChange = (value) => {
        setPhone(value);
        onPhoneChange(value);
    };


    return (
        <div className="phone-input-container">
            <PhoneInput
                country={'eg'}
                value={phone}
                onChange={handleChange}
                inputProps={{
                    required: true,
                    className: 'form-control',
                    placeholder: "ادخل رقم الهاتف"
                }}
            />
        </div>
    );
}