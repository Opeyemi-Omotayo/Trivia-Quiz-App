import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './context/Context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppProvider
      waiting={true}
      loading={false}
      questions={[]}
      index={0}
      correct={0}
      error={false}
      modal={false}
      quiz={{}}
      handleSubmit={function (e: React.FormEvent<HTMLFormElement>): void{
        throw new Error('unable to fetch questions!')
      }}
      handleChange={function (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>): void{
        throw new Error('unable to handle change!')
      }}
      checkAnswers={function (value: any): void{
        throw new Error('unable to check answers!')
      }}
      nextQuestion={function (): void{
        throw new Error('unable to go to the next question!')
      }}
      closeModal={function (): void{
        throw new Error('unable to close modal!')
      }}
      >
      <App />
    </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
