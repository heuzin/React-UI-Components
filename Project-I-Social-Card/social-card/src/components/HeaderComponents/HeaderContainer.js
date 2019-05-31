import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

function Header() {
    return (
        <header className="header">
            <ImageThumbnail />
            <HeaderTitle />
        </header>
    );
}

export default Header;