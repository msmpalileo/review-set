import React, { useState } from "react";
import "./Documents.scss";

import complete from "../../Resources/Icons/complete.png";
import trash from "../../Resources/Icons/delete.png";

import DeleteItem from "../_Modals/DeleteItem";

const mapDocuments = ({ documents, setUpdates, id, setID }) => {
  const [showDelete, setShowDelete] = useState(false);
  const [deleteParams, setDeleteParams] = useState({});

  const updateStatus = (doc, index) => {
    let arr = [...documents];

    let toUpdate = doc;
    const reviewed = toUpdate.reviewed;
    toUpdate.reviewed = !reviewed;
    arr[index] = toUpdate;

    setID(id);
    setUpdates(arr);
  };

  const documentList = (
    <>
      <DeleteItem
        show={showDelete}
        onHide={() => setShowDelete(false)}
        documents={documents}
        setUpdates={setUpdates}
        id={id}
        setID={setID}
        deleteParams={deleteParams}
      />
      {documents.map((doc, index) => {
        return (
          <div className="col-3 documentWrapper" key={doc.id}>
            <div className="documentItem">
              <div className="row">
                <div className="col-md-9">
                  <b>{doc.title}</b>
                </div>
                <div className="col-md-3 nopadding documentButtons">
                  <button
                    style={doc.reviewed ? { opacity: "1" } : {}}
                    onClick={() => updateStatus(doc, index)}
                  >
                    <img src={complete} alt="Complete" />
                  </button>
                  <button
                    onClick={() => {
                      setShowDelete(true);
                      setDeleteParams({ index: index, type: "Document" });
                    }}
                  >
                    <img src={trash} alt="Remove" />
                  </button>
                </div>
                <div className="col-12">
                  <p>{doc.description}</p>
                </div>
              </div>
              <div className="row">
                <div className="documentPlaceholder"></div>
                <div
                  className="documentPreview"
                  style={{ backgroundImage: `url(${doc.doc})` }}
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );

  return documentList;
};

export default mapDocuments;
