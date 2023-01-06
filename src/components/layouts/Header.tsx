import ThemeButton from '../buttons/ThemeButton';

export default function Header() {
  return (
    <header>
      <div className="to-amber-100 h-2 bg-gradient-to-tr from-amber-300 via-amber-500" />
      <div className="dark:bg-dark dark:text-white">
        <nav className="layout flex py-4 items-center justify-between">
          <ul className="flex justify-between space-x-3 text-base">
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>{label}</li>
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
