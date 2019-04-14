import React from 'react';
import Search from '../components/Search';

const MainLayout = () => {
    return (
        <div className='home-header'>
            <div className='w'>
                <img src='/asset/img/title.jpg' alt='title' />
                <Search className='home-search' />
            </div>
        </div>
    );
};

export default MainLayout;
