import React from "react";
import { Modal } from "react-bootstrap";
import "./Modals.scss";

const DeleteItem = ({
  setRecords,
  records,
  deleteParams,
  onHide,
  show,
  documents,
  id,
  setID,
  setUpdates,
}) => {
  const deleteSet = () => {
    if (deleteParams.type === "Review Set") {
      let arr = [...records];
      arr.splice(deleteParams.index, 1);

      onHide();
      setRecords(arr);
    } else {
      let arr = [...documents];
      arr.splice(deleteParams, 1);

      onHide();
      setID(id);
      setUpdates(arr);
    }
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
        <h4 className="text-center">
          Are you sure you want
          <br />
          to delete this {deleteParams.type ? deleteParams.type : "item"}?
        </h4>
        <div className="buttons">
          <button onClick={onHide}>Cancel</button>
          <button onClick={() => deleteSet()}>Delete</button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteItem;
