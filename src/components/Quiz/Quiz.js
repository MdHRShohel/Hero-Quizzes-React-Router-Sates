import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid'

const Quiz = ({quiz}) => {
    const {id,question, options,correctAnswer} = quiz;

        const handleSelect = option => {

            if (option === correctAnswer) {
                toast.success('WoW!!! Correct Answer', { position: toast.POSITION.TOP_CENTER, autoClose: 1000});
            }
            else {
                toast.error('Incorrect Answer!!!', { position: toast.POSITION.TOP_CENTER, autoClose: 1000});
            }

        }

        const handleCorrAns = () => {
            toast(`Correct Answer is ${correctAnswer}`, { position: toast.POSITION.TOP_CENTER, autoClose: 3000})
        };
    //console.log(quiz);
    return (
        <section  className="bg-gray-900 text-white">
        <div className='m-12 border border-blue-600 relative'>
            <h2 className="
            font-bold mx-auto mt-8 max-w-xl sm:text-xl sm:leading-relaxed m-8 "
            >Question {}: {question}</h2>
         <div  className=' grid lg:grid-cols-2 sm:grid-cols-1 m-16 font-semibold gap-4' >
            {options.map(option => <Option 
            key={option}
            id={id}
            handleSelect={handleSelect}
            option={option}></Option>)}
         </div>
        <EyeIcon onClick={()=>handleCorrAns()} className="absolute top-4 right-4 h-6 w-6 text-white"/>
        </div>
        <br />
        </section>

    );
};

export default Quiz;