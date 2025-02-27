import Header from '../../../Components/Header/Header';
import '../MarketerProfile.css';
import Sidebar from "../../../Components/Sidebar/Sidebar.js";
import { useEffect } from 'react';
export default function Following() {

  useEffect(() => {
        document.title = `Agblk | المتاجر المتابعة`;
        document.body.classList.add("body-bg");
    
       // clean after exit
        return () => {
          document.title = "Agblk | اجبلك";
          document.body.classList.remove("body-bg");
        };
      }, []);
    return (
      <>
      <Header/>
      <div className="profile-wrapper">
            <Sidebar activeSection = "following"/>
            <div className="card">
            <div className="my-following" id="following">
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
              <div className="stores"></div>
            </div>
            </div>
      </div>
      </>
    );
  }
  