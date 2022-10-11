import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="bg-gray-900 text-white px-20 py-5 border-b-2 border-blue-500">
            <nav className=' flex justify-between items-center'>
                <div>
                    <h2 className="bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-3xl">HERO QUIZZES</h2>
                </div>
                <div className='flex gap-3'>

                    <Link className="block  rounded border border-blue-600 bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto" to='/'>Home</Link>

                    <Link className="block  rounded border border-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto" to='/statistics'>Statistics</Link>

                    <Link className="block  rounded border border-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto" to='/blog'>Blog</Link>
                </div>
                
            </nav>
        </div>
    );
};

export default Navbar;