import type { NextPage } from 'next';

import { Header } from 'components/Header';

import { SectionBenefits } from '../components/Sections/SectionBenefits';
import { SectionCalculate } from '../components/Sections/SectionCalculate';

const Home: NextPage = () => {
  return (
    <main>
      <Header />
      <SectionBenefits />
      <SectionCalculate />
    </main>
  );
};

export default Home;
