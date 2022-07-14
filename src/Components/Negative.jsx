import React from "react";

const Negative = () => {
  return (
    <div className="negative-parent">
      <div className="negative-header">
        <p>Date here</p>
        <p>Today I'm upset about</p>
      </div>

      <form className="negative-input-form" action="">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <div>Done</div>
      </form>
    </div>
  );
};

export default Negative;
