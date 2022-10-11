import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Item from '../Item/Item';

const Banner = () => {
    const items = useLoaderData();
    return (
        <div>
            <section className="bg-gray-900 text-white">
                <div
                className="mx-auto max-w-screen-xl px-4 py-32 lg:flex"
                >
                <div className="mx-auto max-w-3xl text-center ">
                    <h1
                    className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl"
                    >
                    Welcome to HERO QUIZES!
                    <span className="sm:block"> Lets Test your mettle. </span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
                    Here you can 
                    </p>
                </div>
                </div>
                <div className='grid lg:grid-cols-4 mx-4 gap-8 sm:grid-cols-1'>
                {items.data.map(item =><Item key={item.id} item={item}> </Item>)}
                </div>
            </section>

        </div>
    );
};

export default Banner;