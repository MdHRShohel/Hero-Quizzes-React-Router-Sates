import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="bg-gray-900 text-white py-5 border-b-2 border-blue-500">
            <div className="navbar bg-gray-900 px-8">
  <div className="navbar-start">
    <div>
        <h2 className="bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-3xl">HERO QUIZZES</h2>
    </div>
  </div>
  <div className="dropdown navbar-end">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 gap-3 shadow bg-base-100 rounded-box w-52">
        <li>
        <Link className="block rounded border border-blue-600 bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto" to='/'>Topic</Link>
        </li>
        <li tabIndex={0}>
        <Link className="block  rounded border border-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto" to='/statistics'>Statistics</Link>
        </li>
        <li>
        <Link className="block  rounded border border-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto" to='/blog'>Blog</Link>
        </li>
      </ul>
    </div>
  <div className="navbar-end hidden lg:flex">
  
    <ul className="menu flex gap-3 menu-horizontal p-0">
      <li>
      <Link className="block rounded border border-blue-600 bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto" to='/'>Topic</Link>
      </li>
      <li>
      <Link className="block  rounded border border-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto" to='/statistics'>Statistics</Link>
      </li>
      <li>
      <Link className="block  rounded border border-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto" to='/blog'>Blog</Link>
      </li>
    </ul>
  </div>
</div>

            {/* <nav className=' flex justify-between items-center'>
                <div>
                    <h2 className="bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-3xl">HERO QUIZZES</h2>
                </div>
                <div className='flex gap-3'>

                    <Link className="block rounded border border-blue-600 bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto" to='/'>Home</Link>

                    <Link className="block  rounded border border-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto" to='/statistics'>Statistics</Link>

                    <Link className="block  rounded border border-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto" to='/blog'>Blog</Link>
                </div> 
                
            </nav>*/}
        </div>
    );
};

export default Navbar;