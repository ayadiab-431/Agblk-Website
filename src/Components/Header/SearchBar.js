import React from 'react';
import './SearchBar.css'; // يمكنك إنشاء ملف CSS منفصل إذا أردت

export default function SearchBar() {
    return (
        <div className="search-bar">
            <input type="text" placeholder='بحث...'/>
            <span className="material-symbols-outlined search-icon">search</span>
        </div>
    );
}