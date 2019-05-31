import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

function HeaderTitle() {
    return (
        <div>
            <div>
                <h1>Lambda School</h1>
                <p><span>@LambdaSchool</span><span> 29 May</span></p>
            </div>
            <HeaderContent />
        </div>
    )
}

export default HeaderTitle;