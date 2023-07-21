// import React, { useState } from "react";
import "./Input.scss";

function Input({ placeholder, type, state, onChange }) {
  // const [value, setValue] = useState(state.value);
  return (
    <div className="input-wrapper">
      <input type={type} value={state.value} onChange={onChange} />
      <label tabIndex={-1} className={state.value !== "" ? "active" : ""}>
        {placeholder}
      </label>
    </div>
  );
}

export default Input;
