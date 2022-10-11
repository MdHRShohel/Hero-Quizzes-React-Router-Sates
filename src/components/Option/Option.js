import React from 'react';

const Option = ({handleSelect,option}) => {
    //console.log(option);
    return (
        <div>
            <div  onClick={() => handleSelect(option)} 
            className='p-5 border-2 border-blue-600 flex items-center '>
            <input className='mr-5' type="radio" name="fav_language" ></input>
            <p>{option}</p>
        </div>
        </div>
    );
};

export default Option;