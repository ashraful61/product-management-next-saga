import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div className='bg-gray-500 p-8'>
            <Link href="/">Home</Link> &nbsp;
            <Link href="/products">Products</Link> &nbsp;
            <Link href="/users">Users</Link> &nbsp;
        </div>
    );
};

export default Header;