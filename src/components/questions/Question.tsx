import React from 'react';

const Question = () => {
  return (
    <div className="h-[100vh] font-mono flex items-center justify-center bg-gradient-to-tr from-purple-700 via-purple-400 to-purple-200">
      <section className="bg-white p-8 rounded-lg shadow-lg w-[70%]">
        <div className='flex items-end justify-end   '>
        <p className='text-green-500'>correct answers: 5</p>
         </div>
        <article >
          <h2 className='text-center font-bold text-2xl'>Questions</h2>
          <div ></div>
        </article>
        <div className='flex items-end justify-end   '>
        <button type="submit" className=" mt-6 w-[35%] text-lg text-white bg-purple-700 p-3  rounded-md shadow-md">next questions</button>        
         </div>

      </section>
    </div>
  )
}

export default Question;
