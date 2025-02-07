import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHash() {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const target = document.querySelector(hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return null;
}
