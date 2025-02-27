import Button from "../../../Components/Button/Button.js";
import { useEffect, useState } from 'react';
import Header from '../../../Components/Header/Header';
import Sidebar from "../../../Components/Sidebar/Sidebar.js";
import '../MarketerProfile.css';
export default function Addresses() {
    useEffect(() => {
            document.title = `Agblk | المتاجر المتابعة`;
            document.body.classList.add("body-bg");
        
          // clean after exit
            return () => {
              document.title = "Agblk | اجبلك";
              document.body.classList.remove("body-bg");
            };
          }, []);
    const [isPopupVisible, setPopupVisible] = useState(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [errors, setErrors] = useState({})
    const [message, setMessage] = useState('')
    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    const [originalAddress, setOriginalAddress] = useState(null) 
    // Get Address Information
    const [addressForm, setAddressForm] = useState (() => {
        const storedAddress = JSON.parse(localStorage.getItem("newAddress")) || {
        country : "Egypt",
        email: userData.email || "",
        name: userData.name || "My Name",
        phone: "",
        address1 : "",
        address2 : "",
        city: ""
      };
      return storedAddress
    })

    // Dispaly add new address form
    const handleOpenPopup = () => {
      setPopupVisible(true)
      setOriginalAddress(JSON.parse(JSON.stringify(addressForm)))
    }

    // Close add new address form
    const handleClosePopup =  () => {
      if (originalAddress) setAddressForm(JSON.parse(JSON.stringify(originalAddress))); // Restore Original Address
      setPopupVisible(false);
      setTimeout(() => {
        document.querySelector(".pop-up").classList.remove("display-pop");
      }, 300);
    }
    // // Add New Address
    const handleSaveAddress = () => {
      // if errors found 
      if (!validateAddressForm()) return;
      // Close pop up
      setMessage('تم إنشاء العنوان بنجاح')
      // setTimeout(() => setMessage(""), 3000);
      setPopupVisible(false);
      setTimeout(() => {
        document.querySelector(".pop-up").classList.remove("display-pop");
      }, 300);
      localStorage.setItem("newAddress",JSON.stringify(addressForm))
      setAddressForm(addressForm)
    }
    
    // Handle Delete Address
    const handleDeleteAddress = () => {
      const confirmDelete = window.confirm("هل أنت متأكد من حذف العنوان؟");
      if (!confirmDelete) return;
      localStorage.removeItem("newAddress");
      setMessage("تم حذف العنوان بنجاح")

      // Clear Use State Data
      setAddressForm({
        country: "Egypt",
        email: userData.email || "",
        name: userData.name || "My Name",
        phone: "",
        address1: "",
        address2: "",
        city: ""
      });

      // setTimeout(() => setMessage(""), 3000);
    };
    
    // Handle Edit Address
    const handleEditAddress = () => {
      setPopupVisible(true);
    };

    // Clear Message Content After Appears
    useEffect(() => {
      if (message) {
          const timer = setTimeout(() => setMessage(""), 2500);
          return () => clearTimeout(timer);
      }
  }, [message]);  

    
    // Vlaidate Address Form Inputs
    const validateAddressForm = () => {
      const fields = {
          country: "الدولة مطلوبة",
          name: "الإسم مطلوب",
          email: addressForm.email?.match(emailRegex) ? null : "البريد الإلكتروني غير صالح",
          phone: "الرقم مطلوب",
          address1: "عنوان الشارع مطلوب",
          city: "المدينة مطلوبة"
      };
  
      const newErrors = Object.entries(fields).reduce((acc, [key, value]) => {
          if (!addressForm[key]?.trim() || value === "البريد الإلكتروني غير صالح") acc[key] = `* ${value}`;
          return acc;
      }, {});
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
  };
  
  return (
    <>
    <Header/>
      <div className="profile-wrapper">
            <Sidebar activeSection = "addresses"/>
            <div className="card">
    <div className="my-addresses" id="addresses">
      {isPopupVisible && <div className="overlay"></div>}
      <div className="add-address-wrapper">
        <Button
          className="add-address"
          title="إضافة عنوان جديد"
          onClick={handleOpenPopup}
        />
      </div>
      {/* New Address Added */}
      {addressForm.address1 && <div className={`new-address-added card ${isPopupVisible ? "" : "display-item"}`}>
        <div className="address-title">
          <span className="your-name">{addressForm.name}</span>
          <Button className="edit-btn" title="تعديل" onClick={handleEditAddress}/>
          <Button className="delete-btn" title="حذف" onClick={handleDeleteAddress}/>
        </div>
        <span className="full-add">{addressForm.address1} {addressForm.address2}, {addressForm.city}</span>
        <span className="your-tel">tel: {addressForm.phone}</span>
      </div>}
      {/* Display add new address form */}
      <div id="pop-up" className={`pop-up ${isPopupVisible ? "display-pop" : ""}`}>
        <div className="heading">
          <h5>عنوان العميل</h5>
          <i className="fa-solid fa-xmark" onClick={handleClosePopup}></i>
        </div>
        <div className="popup-content">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="select-country">
              <label>الدولة</label>
              <select value={addressForm.country}
                onChange={(e) => setAddressForm({...addressForm, country: e.target.value})}>
                <option value="Egypt">Egypt</option>
              </select>
              {errors.country && <span className="error-msg">{errors.country}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email-inp">البريد الإلكتروني</label>
              <input
                type="email"
                className="form-control"
                id="email-inp"
                name="email"
                placeholder="البريد الإلكتروني الخاص بك"
                value={userData.email}
                onChange={(e) => setAddressForm({...addressForm, email: e.target.value})}
              />
              {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>
            <div className="other-inf">
              <div className="form-group">
                <label htmlFor="name-inp">الاسم</label>
                <input
                  type="text"
                  className="form-control"
                  id="name-inp"
                  name="name"
                  placeholder="الاسم"
                  value= {addressForm.name}
                  onChange={(e) => setAddressForm({...addressForm, name: e.target.value})}
                />
                {errors.name && <span className="error-msg">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label>الهاتف</label>
                <div className="phone-num">
                  <span>+93</span>
                  <input
                    type="text"
                    className="form-control"
                    name="phone-number"
                    value={addressForm.phone}
                    onChange={(e) => setAddressForm({...addressForm, phone: e.target.value})}
                  />
                </div>
                {errors.phone && <span className="error-msg phone-msg">{errors.phone}</span>}
              </div>
            </div>
            <div className="address">
              <label>العنوان</label>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="add1"
                  placeholder="عنوان الشارع"
                  value={addressForm.address1}
                  onChange={(e) => setAddressForm({...addressForm, address1: e.target.value})}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="add2"
                  placeholder="عنوان الشارع"
                  value={addressForm.address2}
                  onChange={(e) => setAddressForm({...addressForm, address2: e.target.value})}
                />
              </div>
              {errors.address1 && <span className="error-msg address-msg">{errors.address1}</span>}
            </div>
            <div className="city">
              <div className="form-group">
                <label htmlFor="city-inp">المدينة</label>
                <input
                  type="text"
                  className="form-control"
                  id="city-inp"
                  name="city"
                  value={addressForm.city}
                  onChange={(e) => setAddressForm({...addressForm, city: e.target.value})}
                />
                {errors.city && <span className="error-msg">{errors.city}</span>}
              </div>
            </div>
            <div className="form-btn">
              <Button className="cancel-btn" title="إلغاء" onClick={handleClosePopup} />
              <Button className="save-btn" title="حفظ العنوان" onClick={handleSaveAddress} />
            </div>
          </form>
        </div>
      </div>
      {message && <div className="success-msg">{message}</div>}
    </div>
    </div>
    </div>
    </>
  );
}
