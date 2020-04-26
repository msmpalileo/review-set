import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./Modals.scss";

import { generateID, getDateToday } from "../utils";

const CreateReviewSet = (props) => {
  const [title, setTitle] = useState("");

  const createSet = (title) => {
    props.setrecords([
      ...props.records,
      {
        id: generateID(),
        title: title,
        date: new Date(),
        documents: [],
      },
    ]);
    setTitle("");
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4 className="text-center">Create Review Set</h4>
        <label htmlFor="inputTitle">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="inputTitle"
        />
        <div className="buttons">
          <button onClick={props.onHide}>Cancel</button>
          <button onClick={() => createSet(title)}>Create Set</button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CreateReviewSet;
