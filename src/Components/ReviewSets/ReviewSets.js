import React, { useState, useEffect } from "react";
import "./ReviewSets.scss";
import history from "../../Resources/Icons/history.png";
import trash from "../../Resources/Icons/delete.png";
import complete from "../../Resources/Icons/complete.png";

import add from "../../Resources/Icons/add.png";
import { sortSets, getStringDate, expandSet, adjustHeight } from "../utils";
import AddDocument from "../_Modals/AddDocument";

import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

const ReviewSets = ({ records }) => {
  const [currentRecords, setCurrentRecords] = useState([...records]);
  const [showAdd, setshowAdd] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [reviewID, setID] = useState();

  useEffect(() => {
    let newRecords = records.map((item) => {
      if (item.id === reviewID) {
        item.documents = [...documents];
      }
      return item;
    });
    setCurrentRecords(newRecords);
    if (reviewID) {
      adjustHeight(reviewID);
    }
  }, [documents, records]);

  const mapDocuments = (arr) => {
    return arr.map((doc) => {
      return (
        <div className="col-3 documentWrapper" key={doc.id}>
          <div className="documentItem">
            <div className="row">
              <div className="col-md-9">
                <b>{doc.title}</b>
              </div>
              <div className="col-md-3 nopadding documentButtons">
                <button style={doc.reviewed ? { opacity: "1" } : {}}>
                  <img src={complete} alt="Complete" />
                </button>
                <button>
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
    });
  };

  const mapReviewSets = (arr) => {
    const sortedSets = sortSets(arr);
    return sortedSets.map((set) => {
      return (
        <div className="row reviewItem" id={`item-${set.id}`} key={set.id}>
          <div className="col-md-2 nopadding">
            <button onClick={() => expandSet(set.id)}>
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
            <span>% Reviewed</span>&emsp;
            <img src={trash} alt="Delete" />
          </div>
          <div className="col-12 nopadding">
            <div className="row documentsContainer">
              {mapDocuments(set.documents)}
              <div className="col-3 documentWrapper">
                <button
                  className="addDocument"
                  onClick={() => {
                    setshowAdd(true);
                    setDocuments([...set.documents]);
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
        <PerfectScrollbar>{mapReviewSets(currentRecords)}</PerfectScrollbar>
        <AddDocument
          show={showAdd}
          onHide={() => setshowAdd(false)}
          documents={documents}
          setDocuments={setDocuments}
        />
      </div>
    </div>
  );
};

export default ReviewSets;
