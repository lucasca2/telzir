import type { NextPage } from 'next';

import { Header } from 'components/Header';

import { SectionBenefits } from '../components/Sections/SectionBenefits';
import { SectionCalculate } from '../components/Sections/SectionCalculate';
import { SectionPlans } from '../components/Sections/SectionPlans';

const Home: NextPage = () => {
  return (
    <main>
      <Header />
      <SectionBenefits />
      <SectionCalculate />
      <SectionPlans />
    </main>
  );
};

export default Home;
