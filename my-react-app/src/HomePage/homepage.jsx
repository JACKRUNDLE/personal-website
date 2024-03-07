import React from 'react';
import './homepage.css';
import ProfileBox from './ProfileBox/profilebox';
import HomePageHeader from './homepageheader.jsx';
import Section3 from './Section3/section3.jsx'
function HomePage() {
    return (
        <div className='Outer-container'>
            <HomePageHeader />
            <div className='PageBottom'>
                <ProfileBox/>
                <Section3/>
            </div>
        </div>
    );
};

export default HomePage;