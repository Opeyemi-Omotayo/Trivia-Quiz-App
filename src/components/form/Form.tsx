import React from 'react'

const Form = () => {
  return (
    <div>
      <section className="">
        <form className="">
          <h2>Setup Quiz</h2>
          <div className="">
            <label htmlFor="amount">number of questions</label>
            <input
              type="number"
              name="amount"
              id="amount"
              className=""
              min={1}
              max={50}
            />
          </div>
          <div className="">
            <label htmlFor="category">category</label>
            <select
              name="category"
              id="category"
              className=""
            >
              <option value="sports">sports</option>
              <option value="history">history</option>
              <option value="politics">politics</option>
            </select>
          </div>
          <div className="">
            <label htmlFor="difficulty">difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              className=""
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">difficult</option>
            </select>
          </div>
         
          <button type="submit" className="" >
            start
          </button>
          </form>
          </section>
    </div>
  )
}

export default Form;
