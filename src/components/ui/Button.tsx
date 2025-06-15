type ButtonProps = {
  text?: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  variant?: string;
};

const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return (
    <button
      className={` ${className}`}
      onClick={() => console.log("Button clicked!")}
    >
      {children}
    </button>
  );
};

export default Button;
