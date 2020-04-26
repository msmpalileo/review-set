import React, { useState } from "react";
import "./TitleBar.scss";
import doc from "../../Resources/Icons/drafts.png";
import create from "../../Resources/Icons/write.png";
import CreateSet from "../../Components/_Modals/CreateReviewSet";

const TitleBar = (props) => {
  const [showCreate, setShowCreate] = useState(false);

  return (
    <div className="row">
      <div className="col-md-12 titleBar">
        <CreateSet show={showCreate} onHide={() => setShowCreate(false)} {...props} />
        <h3>
          <img src={doc} alt="Document" />
          &nbsp; Review Sets
        </h3>
        <button onClick={() => setShowCreate(true)}>
          <img src={create} alt="Create" />
        </button>
      </div>
    </div>
  );
};

export default TitleBar;
