import React from "react";
import "./ReviewSets.scss";
import history from "../../Resources/Icons/history.png";
import trash from "../../Resources/Icons/delete.png";
import { sortSets, getStringDate } from "../utils";

const ReviewSets = ({ records }) => {
  const mapDocuments = (arr) => {};

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
                <div className="addDocument"></div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="row">
      <div className="col-md-12 reviewSetContainer">
        {mapReviewSets(records)}
      </div>
    </div>
  );
};

export default ReviewSets;
