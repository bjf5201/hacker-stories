import React from "react";

const InputWithLabel = ({
  id,
  type = 'text',
  value,
  name,
  onInputChange,
  children
}) => {

  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onInputChange} />
    </>
  );
}

export default InputWithLabel;