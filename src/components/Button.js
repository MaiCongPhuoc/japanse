const Button = ({ children, className, click, disable }) => {
  return (
    <button
      className={`${className} px-3 py-1 rounded-lg`}
      onClick={click}
      disabled={disable}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
