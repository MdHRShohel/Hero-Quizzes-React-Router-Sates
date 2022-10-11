import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizzes = () => {
    const quizzes = useLoaderData();
    //console.log(quizzes);
    const { name,questions } = quizzes.data;
    return (
        <div className="bg-gray-900 text-white">
            <h1 className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-3xl'
            >Questions on {name}</h1>

            <h2 className='
            bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-2xl my-2'
            > Total {questions.length} Questions.</h2>

            {questions.map(quiz => <Quiz 
            key={quiz.id}
            quiz={quiz}
            ></Quiz>)}

        </div>
    );
};

export default Quizzes;