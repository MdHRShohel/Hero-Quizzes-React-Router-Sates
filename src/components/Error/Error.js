import React from 'react';
import Navbar from '../Navbar/Navbar';

const Error = () => {
    return (
        <div>
        <Navbar></Navbar>
        <div className='bg-gray-900 text-white min-h-screen'>
           <h2 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl"
           >Oops... Error: 404 Page not found!
           <span className="sm:block"> You have entered in a wrong Route. </span>
           </h2>
        </div>
        </div>
      
    );
};

export default Error;