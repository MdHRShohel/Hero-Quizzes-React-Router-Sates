import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Option from '../Option/Option';

const Quiz = ({quiz}) => {
    const {question, options,correctAnswer} = quiz;

    const [correct, setCorrect] = useState([]);


        const handleSelect = option => {

            if (option === correctAnswer) {
                toast('WoW!!! Correct Answer', { position: toast.POSITION.TOP_CENTER });
                const newCorrect = [...correct, option];
                setCorrect(newCorrect);

            }
            else {
                toast('Incorrect Answer!!!', { position: toast.POSITION.TOP_CENTER })
            }

        }
    //console.log(quiz);
    return (
        <section  className="bg-gray-900 text-white">
        <div className='m-12 border border-blue-600'>
            <h2 className="
            font-bold mx-auto mt-8 max-w-xl sm:text-xl sm:leading-relaxed m-8 "
            >Question: {question}</h2>
         <div  className=' grid lg:grid-cols-2 sm:grid-cols-1 m-16 font-semibold gap-4' >
            {options.map(option => <Option 
            handleSelect={handleSelect}
            option={option}></Option>)}
            <ToastContainer></ToastContainer>
         </div>
        </div>
        <br />
        </section>

    );
};

export default Quiz;