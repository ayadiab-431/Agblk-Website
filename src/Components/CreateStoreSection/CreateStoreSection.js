// import { Link } from 'react-router-dom';
import './CreateStoreSection.css';
import Button from '../Button/Button.js';
export default function CreateStoreSection() {
    return (
        <div className="create-store-section">
            <div className="create-store-left">
                <h2>ابدأ متجرك الخاص</h2>
                <p>انضم إلى منصتنا ووسّع نشاطك التجاري من خلال الوصول إلى المزيد من العملاء.</p>
                <Button to="/create-store" className="cta-button" title="إنشاء متجرك"/>
            </div>

            <div className="create-store-right">
                <div className="benefit">
                <h3>خصومات حصرية</h3>
                <p>احصل على خصومات حصرية على منتجاتك.</p>
                </div>
                <div className="benefit">
                <h3>دعم تسويقي</h3>
                <p>استفد من موارد التسويق لمساعدتك على تنمية متجرك.</p>
                </div>
                <div className="benefit">
                <h3>إعداد سهل</h3>
                <p>ابدأ البيع بخطوات بسيطة من خلال عملية إعداد سهلة.</p>
                </div>
            </div>
        </div>

    );
}
