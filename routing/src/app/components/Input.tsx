interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ id, type, placeholder, onChange }) => (
  <input
    id={id}
    type={type}
    placeholder={placeholder}
    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    onChange={(e) => onChange(e.target.value)}
  />
);

export default Input;
