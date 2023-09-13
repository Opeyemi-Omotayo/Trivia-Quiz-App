import React from 'react';
import Form from './components/form/Form';
import Result from './components/result/Result';
import Question from './components/questions/Question';
import { ToastContainer, Slide } from 'react-toastify';

function App() {
  return (
    <div>
      {/* <Form />
      <Result /> */}
      <Question />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
        theme='dark'
      />
    </div>

  );
}

export default App;
