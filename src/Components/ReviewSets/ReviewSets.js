import React from "react";
import "./ReviewSets.scss";
import history from "../../Resources/Icons/history.png";
import trash from "../../Resources/Icons/delete.png";
import add from "../../Resources/Icons/add.png";
import { sortSets, getStringDate } from "../utils";

import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

const ReviewSets = ({ records }) => {
  const mapDocuments = (arr) => {
    return arr.map((doc) => {
      return (
        <div className="col-3 documentWrapper" key={doc.id}>
          <div className="documentItem">
            <div className="row">
              <div className="col-md-9">
                <b>{doc.title}</b>
              </div>
              <div className="col-md-3 nopadding">buttons</div>
              <div className="col-12">
                <p>{doc.description}</p>
              </div>
            </div>
            <div className="row">
              <div className="documentPlaceholder"></div>
              <div className="documentPreview"></div>
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
        <div className="row reviewItem" key={set.id}>
          <div className="col-md-2 nopadding">
            <span className="date">{getStringDate(set.date)}</span>
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
                <div className="addDocument">
                  <div className="placeholder">
                    <img src={add} alt="Add" />
                    <h5>Add a Document</h5>
                  </div>
                </div>
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
      </div>
    </div>
  );
};

export default ReviewSets;
