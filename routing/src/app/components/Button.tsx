interface ButtonProps {
  id: string;
  color: string;
  children: string;
}

const Button: React.FC<ButtonProps> = ({ id, color, children }) => (
  <button
    className={`px-4 py-2 rounded block w-full text-white bg-${color}-500 hover:bg-${color}-700`}
    id={id}
  >
    {children}
  </button>
);

export default Button;
