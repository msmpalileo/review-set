import React, { useState, useEffect } from "react";
import "./ReviewSets.scss";
import history from "../../Resources/Icons/history.png";
import trash from "../../Resources/Icons/delete.png";
import {sortSets} from "../utils";

const ReviewSets = (props) => {
  const mapReviewSets = () => {
    const sortedSets = sortSets(props.records)
    return sortedSets.map((set) => {
      return (
        <div className="row reviewItem" key={set.id}>
          <div className="col-md-2 nopadding">
            <span className="date">{set.date}</span>
          </div>
          <div className="col-md-7 nopadding">
            <b>{set.title}</b>
          </div>
          <div className="col-md-3 nopadding text-right">
            <img src={history} alt="History" />
            <span>% Reviewed</span>&emsp;
            <img src={trash} alt="Delete" />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="row">
      <div className="col-md-12 reviewSetContainer">{mapReviewSets()}</div>
    </div>
  );
};

export default ReviewSets;
