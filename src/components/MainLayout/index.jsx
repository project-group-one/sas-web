import React from 'react';
import Search from '~/components/Search';
import { Link } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='home-header'>
            <div className='w'>
                <Link to={'/'}>
                    <img src='/asset/img/title.jpg' alt='title' />
                </Link>
                <Search className='home-search' />
            </div>
        </div>
    );
};

export default MainLayout;
