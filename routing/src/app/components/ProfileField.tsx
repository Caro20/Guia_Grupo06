interface ProfileProps {
  label: string;
  value: string;
}

const ProfileField: React.FC<ProfileProps> = ({ label, value }) => (
  <div className="flex">
    <label className="w-32 text-xs border-b border-blue-500 font-bold uppercase border-solid rounded-tl py-2 px-4 bg-gray-50 whitespace-no-wrap">
      {label}
    </label>
    <input
      className="w-full border-l cursor-default border-gray-300 focus:outline-none rounded-tr shadow-md w-full"
      type="text"
      value={value}
      readOnly
    />
  </div>
);
export default ProfileField;
