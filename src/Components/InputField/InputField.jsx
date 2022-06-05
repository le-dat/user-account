import React from "react";
import "../Post/post.css";
import "../Edit/EditPage.css";

const InputField = ({ typeInput, label, data, setData }) => {
  return (
    <>
      <label htmlFor="">{label}</label>
      {typeInput === "textarea" && (
        <textarea
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      )}
      {typeInput === "input" && (
        <input
          type="text"
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      )}
      {typeInput === "color" && (
        <input
          type="color"
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      )}
    </>
  );
};

export default InputField;
