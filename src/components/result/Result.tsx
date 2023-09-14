import React, { useContext } from "react";
import Modal, { ModalContent } from "../modal/Modal";
import AppContext from "../../context/Context";

const Result = () => {
  const { modal, closeModal, correct, questions } = useContext(AppContext);

  return (
    <Modal
      open={modal}
      onClose={closeModal}
      className="bg-gray-500 "
    >
      <ModalContent className="mx-3 font-mono p-5 md:p-0 rounded-2xl flex flex-col justify-center items-center bg-white w-[35%] h-[45vh]">
        <h2 className="text-4xl font-semibold text-center pb-6">Congrats</h2>
        <p>You answered {((correct / questions.length) * 100).toFixed(0)}%</p>
        <div className="flex items-center justify-center">
          <button className="py-3 px-5 mt-6 text-white bg-purple-700 rounded-lg shadow-lg" onClick={closeModal}>
            Play again
          </button>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default Result;
