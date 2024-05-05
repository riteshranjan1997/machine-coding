import React, { FunctionComponent } from "react";

type Props = {
  outOf: string;
};

const FeedbackModalComponent: FunctionComponent<Props> = ({ outOf }) => {
  return (
    <div>
      <div></div>
      <p style={{}}>
        How likely are you to recommend frontendPro to someone you know?
      </p>
      <div>
        <div></div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default FeedbackModalComponent;
