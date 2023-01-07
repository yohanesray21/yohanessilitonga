import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeButton() {
  return (
    <button className="border p-2.5 rounded-md hover:border-primary-300 hover:text-primary-300">
      <FiMoon />
      {/* <FiSun /> */}
    </button>
  );
}
