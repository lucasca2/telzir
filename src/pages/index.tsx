import type { NextPage } from 'next';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { SectionBenefits } from 'components/Sections/SectionBenefits';
import { SectionCalculate } from 'components/Sections/SectionCalculate';
import { SectionPlans } from 'components/Sections/SectionPlans';

const Home: NextPage = () => {
  return (
    <main>
      <Header />
      <SectionBenefits />
      <SectionCalculate />
      <SectionPlans />
      <Footer />
    </main>
  );
};

export default Home;
