import React from 'react'

const Form = () => {
  return (
    <div>
      <section className="h-[100vh] font-mono flex items-center justify-center bg-gradient-to-tr from-purple-700 via-purple-400 to-purple-200">
        <form className="bg-white p-8 rounded-lg shadow-lg w-[40%]">
          <h2 className='text-2xl font-semibold text-center'>Setup Quiz</h2>
          <div className="pt-6 flex flex-col">
            <label htmlFor="amount" className="font-semibold">Number of questions</label>
            <input
              type="number"
              name="amount"
              id="amount"
              className="bg-gray-50 p-2 rounded-md "
              min={1}
              max={50}
            />
          </div>
          <div className="pt-6 flex flex-col">
            <label htmlFor="category" className="font-semibold">Category</label>
            <select
              name="category"
              id="category"
              className="bg-gray-50 p-2 rounded-md"
            >
              <option value="sports">Sports</option>
              <option value="history">History</option>
              <option value="politics">Politics</option>
            </select>
          </div>
          <div className=" pt-6 flex flex-col">
            <label htmlFor="difficulty" className="font-semibold">Difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              className="bg-gray-50 p-2 rounded-md "
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Difficult</option>
            </select>
          </div>
         <div className='flex items-end justify-end   '>
         <button type="submit" className=" mt-6 w-[35%] text-lg text-white bg-purple-700 p-3  rounded-md shadow-md" >
            start
          </button>
         </div>
         
          </form>
          </section>
    </div>
  )
}

export default Form;
