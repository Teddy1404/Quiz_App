import React from "react";

const Result = (props) => {
  return (
    <>
      <div className="show-score">
        Your Score :{props.score}
        <br />
        Total Score : {props.totalscore}
      </div>

      <button id="next-button" onClick={props.tryAgain}>
        Try Again
      </button>
    </>
  );
};

export default Result;
