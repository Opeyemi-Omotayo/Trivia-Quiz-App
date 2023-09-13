import { useState, createContext, ReactHTMLElement } from "react";
import { AppContextProp } from "../types/types";
import axios from "axios";
import { TableProp } from "../types/types";


const table:TableProp = {
  sports: 21,
  history: 23,
  politics: 24,
};

const AppContext = createContext<AppContextProp>(null!);

export const AppProvider: React.FC<AppContextProp> = ({ children }) => {
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

  const fetchQuestions = async (url:any) => {
    setLoading(true);
    setWaiting(false);
    const response = await axios(url).catch((err) => console.log(err));

    if (response) {
      const data = response.data.results;
      if (data.length > 0) {
        setQuestions(data);
        setLoading(false);
        setWaiting(false);
        setError(false);
      } else {
        setWaiting(true);
        setLoading(true);
      }
    } else {
      setWaiting(true);
    }
  };

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    const { amount, difficulty, category } = quiz;
    const url = `${process.env.REACT_APP_URL}?amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`;
    fetchQuestions(url);
  };


  const contextData = {
        waiting,
        loading,
        questions,
        index,
        correct,
        error,
        modal,
        quiz,
        handleSubmit,
  };
  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
};

export default AppContext;

