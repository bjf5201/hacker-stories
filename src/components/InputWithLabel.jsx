const InputWithLabel = ({ id, label, type = 'text', value, name, onInputChange }) => {

  return (
    <>
    <label htmlFor={id}>{label}</label>
    <input type={type} id={id} name={name} value={value} onChange={onInputChange} />
    </>
  );
}

export default InputWithLabel;