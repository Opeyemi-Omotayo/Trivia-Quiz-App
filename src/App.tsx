import React, { useContext } from 'react';
import Form from './components/form/Form';
import Result from './components/result/Result';
import Question from './components/questions/Question';
import { ToastContainer, Slide } from 'react-toastify';
import AppContext from './context/Context';

function App() {
  const {waiting, loading} = useContext(AppContext);

  if (waiting) {
    return <Form />;
  }
  if (loading) {
    return <div>loading....</div>;
  }
  return (
    <div>
      <Result />
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
