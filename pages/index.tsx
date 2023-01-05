/* This example requires Tailwind CSS v3.0+ */

import Header from '../src/components/layouts/Header';
import Layout from '../src/components/layouts/Layout';

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
    <Layout>
      <Header />
    </Layout>
  );
}
