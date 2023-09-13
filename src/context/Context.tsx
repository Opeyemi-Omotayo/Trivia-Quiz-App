import { useState } from "react";


const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true); 
  const [loading, setLoading] = useState(false); 
  const [questions, setQuestions] = useState([]); 
  const [index, setIndex] = useState(0); 
  const [correct, setCorrect] = useState(0); 
  const [error, setError] = useState(false); 
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: "sports",
    difficulty: "easy",
  });
  const [modal, setModal] = useState(false);

  return (
    
  );
};
