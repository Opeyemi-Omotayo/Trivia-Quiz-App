import React, { useContext } from "react";
import Modal, { ModalContent } from "../modal/Modal";
import AppContext from "../../context/Context";

const Result = () => {
  const { modal, closeModal, correct, questions } = useContext(AppContext);

  return (
    <Modal
      open={modal}
      onClose={closeModal}
    >
      <ModalContent className="mx-3 font-mono p-5 md:p-0 rounded-2xl flex flex-col justify-center items-center bg-white w-[80%] md:w-[60%] lg:w-[35%] h-[30vh] lg:h-[45vh]">
        <h2 className=" text-2xl md:text-4xl font-semibold text-center pb-6">Congrats</h2>
        <div className="text-sm text-center md:text-lg">
        {correct >= 1 && <p >You answered {correct} question{correct ===1 ? '' :'s'} correctly! ({((correct / questions.length) * 100).toFixed(0)}%)</p>}
        {correct === 0 && <p>This is embarrassing!...You did not answer any question correctly ({((correct / questions.length) * 100).toFixed(0)}%)</p>}
        </div>
       
        <div className="flex items-center justify-center">
          <button className="py-3 px-5 mt-6 text-white bg-sky-500 rounded-lg shadow-lg" onClick={closeModal}>
            Play again
          </button>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default Result;
