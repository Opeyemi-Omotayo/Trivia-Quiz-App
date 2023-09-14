import React, { useContext } from 'react';
import AppContext from '../../context/Context';
import Button from '../../elements/Button';

const Question = () => {
  const {questions, correct, index, nextQuestion, checkAnswers} = useContext(AppContext);

  if (!questions || index < 0 || index >= questions.length) {
    return (
      <div className="h-[100vh] font-mono flex items-center justify-center bg-gradient-to-tr from-purple-700 via-purple-400 to-purple-200">
        <section className="bg-white p-8 rounded-lg shadow-lg w-[70%]">
          <p className='text-red-500'>No more questions available</p>
        </section>
      </div>
    );
  }

  const { incorrect_answers, correct_answer, question } = questions[index];
  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }
  return (
    <div className="h-[100vh] font-mono flex items-center justify-center bg-gray-50">
      <section className="bg-white p-8 rounded-lg shadow-lg w-[70%]">
        <div className='flex items-end justify-end   '>
        <p className='text-green-500 text-sm mb-6'> correct answers: {correct}/{index}</p>
         </div>
        <article >
          <h2 className='text-center font-bold text-2xl capitalize mb-8'>{question}</h2>
          <div className='flex flex-col' >{answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className="bg-sky-300 my-1 py-1 shadow-sm rounded-sm hover:text-white hover:bg-sky-500"
                  onClick={() => checkAnswers(correct_answer === answer)}
                >{answer}</button>
              );
            })}</div>
        </article>
         <Button onClick={nextQuestion}>Next Question</Button>
      </section>
    </div>
  )
}

export default Question;
