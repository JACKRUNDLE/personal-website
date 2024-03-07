import React from 'react';
import './homepage.css';
import banner from '../assets/homepage2.webp';

function HomePageHeader() {
    return(
        <div /*className={"headerbox"}*/>
            <img className='bannerimage' src={banner} alt="image" />
        </div>


    );


};
export default HomePageHeader;