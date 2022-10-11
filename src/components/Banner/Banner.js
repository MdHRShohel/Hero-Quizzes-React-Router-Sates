import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Item from '../Item/Item';

const Banner = () => {
    const items = useLoaderData();
    return (
        <div>
            <section className="bg-gray-900 text-white">
                <div
                className="mx-auto max-w-screen-xl px-4 py-32 lg:h-screen"
                >
                <div className='mb-12 lg:flex'>
                <div>
                     <img src="https://www.pngmart.com/files/19/Quiz-Logo-PNG-Image.png" alt="" />   
                </div>
                <div className="mx-auto max-w-3xl text-center h-3/6">
                    <h1
                    className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl"
                    >
                    Welcome to HERO QUIZZES!
                    <span className="sm:block"> Test your Programming Skill. </span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
                    Here you can test your skills on React, JavaScript, CSS, Git etc.
                    </p>
                </div>
                </div>
                <div className='grid lg:grid-cols-4 mx-4 gap-8 sm:grid-cols-1'>
                {items.data.map(item =><Item key={item.id} item={item}> </Item>)}
                </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;