/* This example requires Tailwind CSS v3.0+ */

type Navigation = {
  name: string;
  href: string;
}[];

const navigation: Navigation = [
  { name: 'Home', href: '#' },
  { name: 'Project', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Experience', href: '#' },
];

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="bg-slate-600 px-4 pt-6 lg:px8">
        <h1>Coming Soon</h1>
      </div>
    </div>
  );
}
