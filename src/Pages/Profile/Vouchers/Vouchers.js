// import Button from "../../../Components/Button/Button.js";
import { useEffect} from 'react';
import Header from '../../../Components/Header/Header';
import Sidebar from "../../../Components/Sidebar/Sidebar.js";
import '../MarketerProfile.css';
export default function Vouchers() {

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
            <Sidebar activeSection = "vouchers"/>
            <div className="card">
            <div className="my-vouchers" id="vouchers">
              <div className="no-vouchers-msg">لا توجد قسائم.</div>
            </div>
            </div>
            </div>
      </>
    );
  }
  