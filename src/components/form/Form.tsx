import React, { useContext } from 'react'
import AppContext from '../../context/Context';
import Button from '../../elements/Button';
import Wrapper from '../../elements/Wrapper';

const Form = () => {
  const { quiz, handleChange, handleSubmit, error } = useContext(AppContext);

  return (
    <Wrapper>
      <form className="bg-white p-8 rounded-lg shadow-lg w-[40%]" onSubmit={handleSubmit}>
        <h2 className='text-2xl font-semibold text-center'>Setup Quiz</h2>
        <div className="pt-6 flex flex-col">
          <label htmlFor="amount" className="font-semibold">Number of questions</label>
          <input
            type="number"
            name="amount"
            id="amount"
            className="bg-gray-100 p-2 rounded-md "
            value={quiz.amount}
            onChange={handleChange}
            min={1}
            max={50}
          />
        </div>
        <div className="pt-6 flex flex-col">
          <label htmlFor="category" className="font-semibold">Category</label>
          <select
            name="category"
            id="category"
            className="bg-gray-100 p-2 rounded-md"
            value={quiz.category}
            onChange={handleChange}
          >
            <option value="sports">Sports</option>
            <option value="history">History</option>
            <option value="politics">Politics</option>
            <option value="generalknowledge">General Knowledge</option>
            <option value="scienceNature">Science & Nature</option>
          </select>
        </div>
        <div className=" pt-6 flex flex-col">
          <label htmlFor="difficulty" className="font-semibold">Difficulty</label>
          <select
            name="difficulty"
            id="difficulty"
            className="bg-gray-100 p-2 rounded-md "
            onChange={handleChange}
            value={quiz.difficulty}
          >
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">difficult</option>
          </select>
        </div>
        {error && (
          <p className="text-red-500 text-sm">can't generates questions , pls try again</p>
        )}
        <Button>Start</Button>
      </form>
    </Wrapper>
  )
}

export default Form;
