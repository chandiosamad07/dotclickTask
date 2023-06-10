import React from "react";

const Box = ({
    firstHeading,
    secondHeading
}) => {
  return (
    <div className="box">
      <span className="firstheading">{firstHeading}</span>
      <br />
      <span className="secondheading">{secondHeading}</span>
    </div>
  );
};
export default Box;