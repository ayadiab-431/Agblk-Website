import { useState, useEffect } from "react";
import Header from '../../Components/Header/Header.js';
import './MarketerProfile.css';
import Button from "../../Components/Button/Button";
import PasswordField from "../../Components/PasswordField/PasswordField.js";
export default function MarketerProfile() {
  const [pageTitle, setPageTitle] = useState("حسابي"); // change page title based on section
  const [activeSection, setActiveSection] = useState(() => {
    return localStorage.getItem("activeSection") || "my-acc";
  });
  const userData = JSON.parse(localStorage.getItem("userData") || {});
  const [displayVal, setDisplayVal] = useState(false);
  useEffect(() => {
    document.title = `Agblk | ${pageTitle}`;
    document.body.classList.add("body-bg");

   // clean after exit
    return () => {
      document.title = "Agblk | اجبلك";
      document.body.classList.remove("body-bg");
    };
  }, [pageTitle]);


  const handleOnClick = (title, section) => {
    setPageTitle(title);
    setActiveSection(section);
    localStorage.setItem("activeSection", section);
  };

  const displayOnClick = () => {
    setDisplayVal(true)
  }
  const closePopUp =  () => {
    setDisplayVal(false)
  }
  return (
    <div>
      <Header />
      <div className="profile-wrapper">
        <ul className="sidebar">
          <li
            className={activeSection === "my-acc" ? "active" : ""}
            onClick={() => handleOnClick("حسابي", "my-acc")}
          >
            <a href="#profile" onClick={(e) => e.preventDefault()}>حسابي</a>
          </li>
          <li
            className={activeSection === "following" ? "active" : ""}
            onClick={() => handleOnClick("المتاجر المتابعة", "following")}
          >
            <a href="#following" onClick={(e) => e.preventDefault()}>المتاجر المتابعة</a>
          </li>
          <li
            className={activeSection === "addresses" ? "active" : ""}
            onClick={() => handleOnClick("دليل عناويني", "addresses")}
          >
            <a href="#addresses" onClick={(e) => e.preventDefault()}>دليل عناويني</a>
          </li>
          <li
            className={activeSection === "vouchers" ? "active" : ""}
            onClick={() => handleOnClick("القسائم", "vouchers")}
          >
            <a href="#vouchers" onClick={(e) => e.preventDefault()}>القسائم</a>
          </li>
        </ul>
        <div className="card">
          {activeSection === "my-acc" && <div className="my-profile" id="my-acc">
            <h5>حسابي
            <Button to='/' className="delete-acc" title="حذف الحساب"/>
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
                <form className="update-name">
                  <p>تحديث الحساب</p>
                  <div className="form-group">
                      <label htmlFor='name-inp'>الاسم</label>
                      <div className="inp">
                          <i className="fa-regular fa-user"></i>
                          <input type="text" className="form-control" id="name-inp"
                                  name="name" placeholder="الاسم" value="My Name"></input>
                      </div>
                      </div>
                      <div className="form-btn">
                      <Button to='/profile' className="update-acc" title="تحديث حسابي"/> 
                      </div>
                </form>
                </div>
                <div className="update-password">
                  <form>
                  <p>تحديث كلمة السر</p>
                  <PasswordField
                    label="كلمة السر الحالية"
                    value={userData.password}
                    // onChange={(e) => setForm({ ...form, password: e.target.value })}
                    placeholder="كلمة السر الخاصة بك"
                    // errorMessage={errors.password}
                    />
                  <PasswordField
                    label="كلمة السر"
                    // value={userData.password}
                    // onChange={(e) => setForm({ ...form, password: e.target.value })}
                    placeholder="كلمة السر الخاصة بك"
                    // errorMessage={errors.password}
                    />
                  <PasswordField
                    label="تأكيد كلمة السر"
                    // value={confirmPass}
                    // onChange={(e) => setConfirmPass(e.target.value)}
                    placeholder="تأكيد كلمة السر"
                    // errorMessage={errors.confirmPass}
                    />
                  <Button to='/profile' className="update-acc" title="تحديث كلمة السر"/> 
                  </form>
                </div>
            </div>
            </div>}
            {activeSection === "following" && <div className="my-following" id="following">
              <div className="stores-inf">
                <div className="card">
                  <h5>إجمالي الطلبات</h5>
                  <div></div>
                </div>
                <div className="card">
                  <h5>الطلبات المكتملة</h5>
                  <div></div>
                </div>
                <div className="card">
                  <h5>الطلبات المكتملة</h5>
                  <div>
                    <span>ليس رقم ج.م.</span>
                  </div>
                </div>
                <div className="card">
                  <h5>العمولات المتاحة</h5>
                  <div>
                  <span>ليس رقم ج.م.</span>
                  </div>
                </div>
              </div>
              <h5>المتاجر</h5>
              <div className="stores">

              </div>
            </div>}
          {activeSection === "addresses" && <div className="my-addresses" id="addresses">
            {displayVal && <div className="overlay"></div>}
            <div className="add-address-wrapper">
              <Button className="add-address" title="إضافة عنوان جديد" onClick={displayOnClick}/>
            </div>
            <div className="new-address-added card">
              <div className="address-title">
                <span className="your-name">Aya Diab</span>
                  <Button className="edit-btn" title="تعديل" />
                  <Button className="delete-btn" title="حذف"/>
              </div>
              <span className="full-add">العنانية,دمياط</span>
              <span className="your-tel">tel: 01025654</span>
            </div>
            <div id="pop-up" className={`pop-up ${displayVal ? "dispaly-pop" : ""}`}>
              <div className="heading">
                <h5>عنوان العميل</h5>
                <i className="fa-solid fa-xmark" onClick={closePopUp}></i>
              </div>
              <div className="popup-content">
                <form>
                  <div className="select-country">
                    <label>الدولة</label>
                  <select>
                    <option selected value="egypt">Egypt</option>
                  </select>
                  </div>
                  
                  <div className="form-group">
                      <label htmlFor='email-inp'>البريد الإلكتروني</label>
                          <input type="email" className="form-control" id="email-inp"
                                  name="email" placeholder="البريد الإلكتروني الخاص بك" value={userData.email}></input>
                      </div>
                  <div className="other-inf">
                  <div className="form-group">
                      <label htmlFor='name-inp'>الاسم</label>
                          <input type="text" className="form-control" id="name-inp"
                                  name="name" placeholder="الاسم" value="My Name"></input>
                      </div>
                      <div className="form-group">
                      <label>الهاتف</label>
                      <div className="phone-num">
                          <span>+93</span>
                          <input type="text" className="form-control" name="phone-number"></input>
                      </div>
                      </div>
                  </div>
                  <div className="address">
                  <label>العنوان</label>
                    <div className="form-group">
                          <input type="text" className="form-control"
                                  name="add1" placeholder="عنوان الشارع"></input>
                      </div>
                    <div className="form-group">
                          <input type="text" className="form-control"
                                  name="add2" placeholder="عنوان الشارع"></input>
                      </div>
                  </div>
                  <div className="city">
                  <div className="form-group">
                      <label htmlFor='city-inp'>المدينة</label>
                          <input type="text" className="form-control" id="city-inp"
                                  name="city"></input>
                      </div>
                  </div>
                  <div className="form-btn">
                  <Button className="cancel-btn" title="إلغاء" onClick={closePopUp}/>
                  <Button className="save-btn" title="حفظ العنوان" onClick={closePopUp}/>
                  </div>
          
                </form>
              </div>
            </div>
            <div className="success-msg">
              تم إنشاء العنوان بنجاح
            </div>
            </div>}
          {activeSection === "vouchers" && <div className="my-vouchers" id="vouchers">vouchers</div>}
        </div>
      </div>
    </div>
  );
}
