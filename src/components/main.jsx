import React from "react";
import Featured from "./featured";
import AllCourse from "./allcourse";

export default function main(props) {
  return (
    <div className="main margin-left-for-fixed">
      <div className="spacing">
        <Featured query={props.query} />
        <AllCourse query={props.query} />
      </div>
    </div>
  );
}
