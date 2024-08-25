const Button = ({ type = 'button', handleClick, children }) => {
  return (
    <button type={type} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;