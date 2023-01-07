import ThemeButton from '../buttons/ThemeButton';

import { Inter } from '@next/font/google';
const inter = Inter({ weight: '400' });

export default function Header() {
  return (
    <header>
      <div className="to-primary-100 h-2 bg-gradient-to-tr from-primary-200 via-primary-300" />
      <div className="dark:bg-dark dark:text-white">
        <nav className="layout flex py-4 items-center justify-between">
          <ul className="flex justify-between space-x-3 text-base">
            {links.map(({ href, label }) => (
              <li className={inter.className} key={`${href}${label}`}>
                {label}
              </li>
            ))}
          </ul>
          <ThemeButton />
        </nav>
      </div>
    </header>
  );
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Project' },
  { href: '/experience', label: 'Experience' },
  { href: '/about', label: 'About' },
];
