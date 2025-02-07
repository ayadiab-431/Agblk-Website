import { useState } from "react";

export default function Card({url,totalRate,numofrating,proName,proPrice,storeName}) {
    const formatedNum = numofrating >= 1000 ? `${(numofrating / 1000).toFixed(1)}K`: numofrating
    
    const [isCartVisible, setCartVisible] = useState(true);

    const handleCartClick = () => {
        setCartVisible(false);
    }

    return (
        <div className='card pro-card'>
                    <div className="pro-img">
                    <img src={process.env.PUBLIC_URL + url} alt=''></img>
                    {/* <img src={url} alt=''></img> */}
                    <span className="fav">
                    <i className="ri-heart-line"></i>
                    </span>
                    <div className="cart" onClick={handleCartClick}>
                    {isCartVisible ? (
                        <i className="ri-shopping-cart-2-line cart-icon"></i> // أيقونة العربة
                    ) : (
                        <div className="count-item">
                            <i className="fa-solid fa-plus"></i>
                            <span>1</span> {/* عدد العناصر */}
                            <i className="fa-solid fa-minus"></i>
                        </div>
                    )}
                </div>
                    <div className='rate'>
                    <span>{totalRate}</span>
                    <i className="fa-solid fa-star"></i>
                    <span>({formatedNum})</span>
                    </div>
                    </div>
                    <div className='pro-details'>
                    <h4>{proName}</h4>
                    <p className='price'><span>جنيه</span>{proPrice}</p>
                    <p className='store-name'>المتجر: <span>{storeName}</span></p>
                    </div>
                </div>
    );
}
// const rateTotal = document.querySelector('.rate span:last-of-type');
// if (rateTotal) { // تأكد أن العنصر موجود
//     const rateValue = parseInt(rateTotal.innerText.trim(), 10); // قراءة النص وتحويله إلى رقم
//     if (!isNaN(rateValue) && rateValue >= 1000) { // تحقق أن القيمة رقم وليست NaN
//         rateTotal.innerText = `${(rateValue / 1000).toFixed(1)}K`; // صيغة مختصرة مع رقم عشري
//     }
// }
