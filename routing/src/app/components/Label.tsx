interface LabelProps {
  htmlFor: string;
  children: string;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => (
  <label
    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    htmlFor={htmlFor}
  >
    {children}
  </label>
);

export default Label;
