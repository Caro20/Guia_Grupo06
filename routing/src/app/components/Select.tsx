interface SelectProps {
  id: string;
  options: string[];
}

const Select: React.FC<SelectProps> = ({ id, options }) => (
  <select
    className="w-full border-l cursor-default border-gray-300 focus:outline-none rounded-tr shadow-md w-full"
    id={id}
  >
    {options.map((option, index) => (
      <option key={index}>{option}</option>
    ))}
  </select>
);

export default Select;
