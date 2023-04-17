import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <ul className='mb-5'>
                <Link className='mr-3 py-1 px-2 bg-orange-300 rounded-md text-black' to='/'>Home</Link>
                <Link className='mr-3 py-1 px-2 bg-orange-300 rounded-md text-black' to='/order'>Order</Link>
                <Link className='mr-3 py-1 px-2 bg-orange-300 rounded-md text-black' to='/contact'>Contact</Link>
                <Link className='mr-3 py-1 px-2 bg-orange-300 rounded-md text-black' to='/about'>About</Link>
            </ul>
        </nav>
    );
};

export default Header;