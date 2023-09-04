import React, { useState } from "react";
import Modal, { ModalContent } from "../modal/Modal";

const Result = () => {
  const [modal, setModal] = useState(true);
  return (
    <Modal
      open={modal}
      onClose={() => setModal(false)}
      className="bg-gray-500 "
    >
      <ModalContent className="mx-3 font-mono p-5 md:p-0 rounded-2xl flex flex-col justify-center items-center bg-white w-[35%] h-[45vh]">
        <h2 className="text-4xl font-semibold text-center pb-6">Congrats</h2>
        <p>You answered n questions correctly</p>
        <div className="flex items-center justify-center">
          <button className="py-3 px-5 mt-6 text-white bg-purple-700 rounded-lg shadow-lg">
            play again
          </button>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default Result;
