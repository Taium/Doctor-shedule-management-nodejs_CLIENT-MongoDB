import React from 'react';
import MiddleHeader from './MiddleHeader';
import TopHeader from './TopHeader';
import HBackground from './HBackground2.png';
import BottomHeader from './BottomHeader';



const Header = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) ), url(${HBackground})` }} className="header">
            <div className="sidecolor"> </div>

            <TopHeader></TopHeader>
            <MiddleHeader></MiddleHeader>
            <BottomHeader></BottomHeader>

        </div>
    );
};

export default Header;