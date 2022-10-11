import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const Item = (item) => {
    const {id, name, logo,total} = item.item;

    //console.log(item.item);
    return (
        <div>
            <div className='border-4 border-blue-400 rounded-xl shadow-2xl shadow-neutral-900 relative'>
                <div className='mx-12'>
                    <img src={logo} alt="" />
                </div>
                <span className>Total {total} Questions.</span>
                <div className='item-info'>
                    <h3 className='text-2xl font-bold '>{name}</h3>
                    <Link to={`/quizzes/${id}`} className='flex w-1/2 mx-auto mt-5 align-middle cursor-pointer hover:bg-purple-400 hover:shadow-xl hover:shadow-purple-300/50 bg-blue-600 shadow-lg shadow-blue-600/50 p-2 items-center justify-evenly text-white rounded-md m-4'>
                        <p className='font-semibold '>Start Quiz</p>
                        <ArrowRightIcon className='w-6 h-6 text-white '></ArrowRightIcon>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Item;