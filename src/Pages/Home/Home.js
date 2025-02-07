import { Routes, Route } from 'react-router-dom';
import Header from '../../Components/Header/Header.js';
import Advert from '../../Components/Ad/Ad.js';
import ProductSection from '../../Components/ProductSection/ProductSection.js';
import CreateStoreSection from '../../Components/CreateStoreSection/CreateStoreSection.js'
import RecentProducts from '../../Components/RecentProducts/RecentProducts.js';
import Subscribe from '../../Components/Subscribe/Subscribe.js';
import Webservices from '../../Components/Webservices/Webservices.js';
import Footer from '../../Components/Footer/Footer.js';

export default function Home () {
    return (
        <div className = "Home" id='home'>
            <Header/>
        <Routes>

            <Route path="/products" element={<h1>ملابس حريمي</h1>} />
            <Route path="/sections" element={<h1>ملابس حريمي</h1>} />
            <Route path="/shop" element={<h1>ملابس حريمي</h1>} />
            <Route path="/track" element={<h1>ملابس حريمي</h1>} />
            <Route path="/traggers" element = {<h1>ملابس حريمي</h1>}/>
            {/* Sections */}
            <Route path="/women-clothes" element={<h1>ملابس حريمي</h1>} />
            <Route path="/men-clothes" element={<h1>ملابس رجالي</h1>} />
            <Route path="/kids-clothes" element={<h1>ملابس أطفالي</h1>} />
        </Routes>
        <Advert/>
        <ProductSection/>
        <CreateStoreSection/>
        <RecentProducts/>
        <Subscribe/>
        <Webservices/>
        <Footer/>
        </div>
    );
}