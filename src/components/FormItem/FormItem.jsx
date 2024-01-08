import React from "react";

const FormItem = ({ title }) => {
  return (
    <div>
      <p>{title}</p>
      <button>Complete</button>
      <button>Delete</button>
    </div>
  );
};

export default FormItem;
