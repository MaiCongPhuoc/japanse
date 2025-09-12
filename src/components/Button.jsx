const Button = ({children, className, handleButtonClick}) => {
    return(
        <button
            className={className}
            onClick={handleButtonClick}
        >
            {children}
        </button>
    );
}

export default Button;