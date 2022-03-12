import React from "react";

const ApprovalCard = (props) => {
  return (
    <div class="card ui">
      <div class="content">
        <span>{props.children}</span>
      </div>
      <div class="extra content">
        <div class="ui two buttons">
          <div class="ui basic green button">Approve</div>
          <div class="ui basic red button">Decline</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
