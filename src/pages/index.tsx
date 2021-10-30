import type { NextPage } from 'next';

import { Header } from 'components/Header';

import { SectionBenefits } from '../components/Sections/SectionBenefits';

const Home: NextPage = () => {
  return (
    <main>
      <Header />
      <SectionBenefits />
    </main>
  );
};

export default Home;
