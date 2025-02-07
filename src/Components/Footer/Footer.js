import './Footer.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
export default function Footer () {
    return (
        <div className='footer'>
            <Logo to = '/#home'/>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 mb-15 f-sec'>
                        <h4 className='bold mb-15'>الخدمات</h4>
                        <Link to="/">من نحن؟</Link>
                        <Link to="/">اتصل بنا</Link>
                        <Link to="/">الأسئلة الشائعة</Link>
                        <Link to="/">دليل التاجر</Link>
                        <Link to="/">التطبيقات</Link>
                    </div>
                    <div className='col-lg-3 col-md-6 mb-15 f-sec'>
                        <h4 className='bold mb-15'>حول</h4>
                        <Link to="/">مركز المساعدة</Link>
                        <Link to="/">سياسة الخصوصية</Link>
                        <Link to="/">سياسة الاستبدال والاسترجاع</Link>
                        <Link to="/">دليل المسوق</Link>
                        <Link to="/">التطبيقات</Link>
                    </div>
                    <div className='col-lg-3 col-md-6 mb-20 mb-sm-15 payment'>
                        <h4 className='bold mb-15'>الدفع</h4>
                        <div className='pay-icons'>
                        <a href='https://www.paypal.com/' target='_blank' rel='noopener noreferrer'>
                        <img src={process.env.PUBLIC_URL + "/assest/mini-img/pay-pal.png"} alt='Paypal payment'></img>
                        {/* <img src='/assest/mini-img/pay-pal.png' alt='Paypal payment'></img> */}
                        </a>
                        <a href='https://mea.mastercard.com/' target='_blank' rel='noopener noreferrer'>
                        <img src={process.env.PUBLIC_URL + "/assest/mini-img/master-card.png"} alt='Master card payment'></img>
                        {/* <img src='/assest/mini-img/master-card.png' alt='Master card payment'></img> */}
                        </a>
                        <a href='https://visa.com/' target='_blank' rel='noopener noreferrer'>
                        <img src={process.env.PUBLIC_URL + "/assest/mini-img/visa.png"} alt='Visa payment'></img>
                        {/* <img src='/assest/mini-img/visa.png' alt='Visa payment'></img> */}
                        </a>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 mb-15 mb-xs f-sec'>
                        <h4 className='bold mb-15'>التواصل الاجتماعي</h4>
                        <Link to="/">
                        <div className='social'>
                            <span>Instagram</span>
                        </div>
                        </Link>
                        <Link to="/">
                        <div className='social'>
                            <span>Facebook</span>
                        </div>
                        </Link>
                        <Link to="/">
                        <div className='social'>
                            <span>Whatsapp</span>
                        </div>
                        </Link>
                        <Link to="/">
                        <div className='social'>
                            <span>Twitter</span>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}