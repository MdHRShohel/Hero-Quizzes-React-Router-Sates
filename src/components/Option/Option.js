import React from 'react';

const Option = ({id,handleSelect,option}) => {
    //console.log(option);
    return (
        <div>
            <div
            className="hover:bg-gray-500 p-5 border-2 border-blue-600 flex items-center">
            <input id={option} onChange={() => handleSelect(option)} 
            className='mr-5' type="radio" name={id} ></input>
            <label className=' w-full' htmlFor={option}>{option}</label>
            </div>
        </div>
    );
};

export default Option;