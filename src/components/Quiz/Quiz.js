import React from 'react';

const Quiz = ({quiz}) => {
    const {id,question, options,correctAnswer} = quiz;
    //console.log(quiz);
    return (
        <section  className="bg-gray-900 text-white">
        <div className='m-12 border border-blue-600'>
            <h2 className="
            font-bold mx-auto mt-8 max-w-xl sm:text-xl sm:leading-relaxed m-8 "
            >Question : {question}</h2>

        <div className=' 
        grid lg:grid-cols-2 sm:grid-cols-1 m-16 font-semibold
        '>
            <div>
                <input type="radio" value=""  /> {options[0]}
            </div>
            <div>
                <input type="radio" value=""  /> {options[1]}
            </div>
            <div>
                <input type="radio" value=""  /> {options[2]}
            </div>
            <div>
                <input type="radio" value=""  /> {options[3]}
            </div>
        </div>
        </div>
        <br />
        </section>

    );
};

export default Quiz;