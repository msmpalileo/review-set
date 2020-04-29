import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./Modals.scss";

import doc from "../../Resources/Icons/drafts.png";

import { generateID, handleUpload } from "../utils";

const AddDocument = ({ setDocuments, documents, onHide, show }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [documentFile, setDocumentFile] = useState([]);
  const [documentName, setDocumentName] = useState("");

  const addDocument = () => {
    setDocuments([
      ...documents,
      {
        id: generateID(),
        title: title,
        description: description,
        doc: documentFile,
        reviewed: false,
      },
    ]);
    setTitle("");
    setDescription("");
    setDocumentFile([]);
    setDocumentName("");
    onHide();
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4 className="text-center">Add a Document</h4>
        <label htmlFor="inputTitle">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="inputTitle"
        />
        <label htmlFor="inputDescription">Description</label>
        <textarea
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="inputDescription"
        />
        <button
          className="documentPlaceholder"
          onClick={() => document.getElementById("uploadDocument").click()}
        >
          {documentFile.length ? (
            <>
              <div style={{backgroundImage: `url(${documentFile})`}} className="documentPreview" />
              <p>
                {documentName}
                <br />
                Click to Change File
              </p>
            </>
          ) : (
            <>
              <img src={doc} alt="Placeholder" />
              <p>Click to Upload Document File</p>
            </>
          )}
        </button>
        <input
          type="file"
          id="uploadDocument"
          accept="image/*"
          onChange={(e) => handleUpload(e, setDocumentFile, setDocumentName)}
        />
        <div className="buttons">
          <button onClick={onHide}>Cancel</button>
          <button onClick={() => addDocument()}>
            Add Document
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddDocument;
