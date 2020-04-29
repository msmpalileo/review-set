import React, { useState, useEffect } from "react";
import "./ReviewSets.scss";
import history from "../../Resources/Icons/history.png";
import trash from "../../Resources/Icons/delete.png";

import add from "../../Resources/Icons/add.png";
import {
  sortSets,
  getStringDate,
  expandSet,
  adjustHeight,
  percentReviewed,
} from "../utils";
import DeleteItem from "../_Modals/DeleteItem";
import AddDocument from "../_Modals/AddDocument";
import Documents from "./Documents";

import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

const ReviewSets = ({ records, setRecords }) => {
  const [showAdd, setshowAdd] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [updatedDocuments, setUpdates] = useState();
  const [reviewID, setID] = useState();
  const [deleteParams, setDeleteParams] = useState({});

  useEffect(() => {
    if (updatedDocuments) {
      let arr = [...records];
      arr.forEach((item) => {
        if (item.id === reviewID) {
          item.documents = updatedDocuments;
        }
      });
      setRecords(arr);
    }
  }, [updatedDocuments]);

  const mapReviewSets = (arr) => {
    let sortedSets = sortSets(arr);
    return sortedSets.map((set, index) => {
      return (
        <div className="row reviewItem" id={`item-${set.id}`} key={set.id}>
          <div className="col-md-2 nopadding">
            <button className="expandButton" onClick={() => expandSet(set.id, set.documents.length)}>
              <div id={`expand1-${set.id}`}></div>
              <div id="expand2">&nbsp;</div>
            </button>
            <span>&emsp;{getStringDate(set.date)}</span>
          </div>
          <div className="col-md-7 nopadding">
            <b>{set.title}</b>
          </div>
          <div className="col-md-3 nopadding text-right">
            <img src={history} alt="History" />
            <span>&ensp;{percentReviewed(set.documents)}% Reviewed</span>&emsp;
            <button
              className="removeButton"
              onClick={() => {
                setShowDelete(true);
                setDeleteParams({ index: index, type: "Review Set" });
              }}
            >
              <img src={trash} alt="Delete" />
            </button>
          </div>
          <div className="col-12 nopadding">
            <div className="row documentsContainer">
              <Documents
                documents={set.documents}
                setUpdates={setUpdates}
                id={set.id}
                setID={setID}
              />
              <div className="col-3 documentWrapper">
                <button
                  className="addDocument"
                  onClick={() => {
                    setshowAdd(true);
                    setUpdates(set.documents);
                    setID(set.id);
                  }}
                >
                  <div className="placeholder">
                    <img src={add} alt="Add" />
                    <h5>Add a Document</h5>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-10 reviewSetContainer nopadding">
        <PerfectScrollbar>{mapReviewSets(records)}</PerfectScrollbar>
        <AddDocument
          show={showAdd}
          onHide={() => setshowAdd(false)}
          documents={updatedDocuments}
          setUpdates={setUpdates}
        />
        <DeleteItem
          show={showDelete}
          onHide={() => setShowDelete(false)}
          records={records}
          setRecords={setRecords}
          deleteParams={deleteParams}
        />
      </div>
    </div>
  );
};

export default ReviewSets;
