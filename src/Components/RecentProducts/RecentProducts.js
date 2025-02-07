import './RecentProducts.css';
import SectionName from '../SectionName/SectionName'
import Card from './Card.js';
import Button from '../Button/Button.js';
export default function RecentProducts() {
    return(
        <div className='recent-products'>
            <SectionName secName='احدث منتجاتنا'/>
            <div className='products'>
                <Card url='/assest/products/1.jpg' totalRate="4.5" numofrating="1550" proName="ملابس حريمي" proPrice="250" storeName="المغارة"/>
                <Card url='/assest/products/2.jpg' totalRate="4.5" numofrating="10" proName="ملابس حريمي" proPrice="250" storeName="المغارة"/>
                <Card url='/assest/products/3.jpg' totalRate="4.5" numofrating="10" proName="ملابس حريمي" proPrice="250" storeName="المغارة"/>
                <Card url='/assest/products/4.jpg' totalRate="4.5" numofrating="10" proName="ملابس حريمي" proPrice="250" storeName="المغارة"/>
                <Card url='/assest/products/1.jpg' totalRate="4.5" numofrating="10" proName="ملابس حريمي" proPrice="250" storeName="المغارة"/>
                <Card url='/assest/products/2.jpg' totalRate="4.5" numofrating="10" proName="ملابس حريمي" proPrice="250" storeName="المغارة"/>
                <Card url='/assest/products/3.jpg' totalRate="4.5" numofrating="10" proName="ملابس حريمي" proPrice="250" storeName="المغارة"/>
                <Card url='/assest/products/4.jpg' totalRate="4.5" numofrating="10" proName="ملابس حريمي" proPrice="250" storeName="المغارة"/>
                <Card url='/assest/products/1.jpg' totalRate="4.5" numofrating="10" proName="ملابس حريمي" proPrice="250" storeName="المغارة"/>
                <Card url='/assest/products/2.jpg' totalRate="4.5" numofrating="10" proName="ملابس حريمي" proPrice="250" storeName="المغارة"/>
                <Card url='/assest/products/3.jpg' totalRate="4.5" numofrating="10" proName="ملابس حريمي" proPrice="250" storeName="المغارة"/>
                <Card url='/assest/products/4.jpg' totalRate="4.5" numofrating="10" proName="ملابس حريمي" proPrice="250" storeName="المغارة"/>
            </div>
            <Button to="/products" className="more-button" title="عرض المزيد"/>
        </div>

    );
}