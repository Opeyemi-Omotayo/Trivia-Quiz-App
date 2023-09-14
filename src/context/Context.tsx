import { useState, createContext } from "react";
import { AppContextProp } from "../types/types";
import axios from "axios";
import { TableProp } from "../types/types";

const table: TableProp = {
  sports: 21,
  history: 23,
  politics: 24
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

  const fetchQuestions = async (url: any) => {
    setLoading(true);
    setWaiting(false);
    const response = await axios(url)
      .then((res) => {
        setQuestions(res.data.results);
        setLoading(false);
        setError(false);
        setWaiting(false);
        console.log('hereeee', res)
      })
      .catch((err) => {
        console.log(err);
        setWaiting(true);
        setLoading(false);
        console.log('thereee')
      });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { amount, difficulty, category } = quiz;
    const url = `${process.env.REACT_APP_URL}?amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`;
    fetchQuestions(url);
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setWaiting(false);
    setCorrect(0);
  };

  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1;
      if (index > questions.length - 1) {
        openModal();
        return 0;
      } else {
        return index;
      }
    });
  };

  const checkAnswers = (value: any) => {
    if (value) {
      setCorrect((oldState) => oldState + 1);
    }
    nextQuestion();
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuiz({ ...quiz, [name]: value });
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
    handleChange,
    checkAnswers,
    nextQuestion,
    closeModal,
  };

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
};

export default AppContext;

