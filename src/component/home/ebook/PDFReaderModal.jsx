import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // assure l’accessibilité

export default function PDFReaderModal({ pdfUrl, isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Lecteur PDF"
      className="w-[90%] h-[90%] mx-auto my-10 bg-white rounded-lg shadow-lg p-4 overflow-hidden"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Lecture de l’e-book</h2>
        <button
          onClick={onRequestClose}
          className="text-red-600 font-bold text-lg"
        >
          ✕
        </button>
      </div>
      <iframe src={pdfUrl} className="w-full h-[85%]" title="Lecteur PDF" />
    </Modal>
  );
}
