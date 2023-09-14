import React, { useContext } from 'react';
import AppContext from '../../context/Context';

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
    <div className="h-[100vh] font-mono flex items-center justify-center bg-gradient-to-tr from-purple-700 via-purple-400 to-purple-200">
      <section className="bg-white p-8 rounded-lg shadow-lg w-[70%]">
        <div className='flex items-end justify-end   '>
        <p className='text-green-500'> correct answers: {correct}/{index}</p>
         </div>
        <article >
          {/* <h2 className='text-center font-bold text-2xl'>{question}</h2> */}
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div >{answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className="answer-btn"
                  onClick={() => checkAnswers(correct_answer === answer)}
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              );
            })}</div>
        </article>
        <div className='flex items-end justify-end   '>
        <button type="submit" onClick={nextQuestion} className=" mt-6 w-[35%] text-lg text-white bg-purple-700 p-3  rounded-md shadow-md">next questions</button>        
         </div>

      </section>
    </div>
  )
}

export default Question;
