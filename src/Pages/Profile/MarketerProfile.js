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
                          <i class="fa-regular fa-user"></i>
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
          {activeSection === "addresses" && <div className="my-addresses" id="addresses">addresses</div>}
          {activeSection === "vouchers" && <div className="my-vouchers" id="vouchers">vouchers</div>}
        </div>
      </div>
    </div>
  );
}
