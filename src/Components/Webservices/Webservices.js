import './Webservices.css';

export default function Webservices() {
    return (
        <div className='web-services'>
            <ul className='services'>
                <li>
                <i className="fa-solid fa-truck"></i>
                <p>شحن الى كل مكان</p>
                </li>
                <li>
                <i className="fa-solid fa-bag-shopping"></i>
                <p>ارجاع المنتجات</p>
                </li>
                <li>
                <i className="fa-solid fa-handshake"></i>
                <p>خدمة مابعد البيع</p>
                </li>
            </ul>
        </div>
    );
}