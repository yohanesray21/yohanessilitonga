import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeButton() {
  return (
    <button
      className="border dark:border-gray-600 p-2 rounded-md text-lg
     md:p-2.5 hover:border-amber-600 dark:hover:text-amber-300"
    >
      <FiMoon />
      {/* <FiSun /> */}
    </button>
  );
}
