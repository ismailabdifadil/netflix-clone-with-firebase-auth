import Faqs from '../components/Faqs';
import Features from '../components/Features';
import Footer from '../components/Footer';
import HomeHero from '../components/HomeHero';
import Subscribe from '../components/Subscribe';

const HomePage = () => {
  return (
    <div>
      <HomeHero />
      <Features />
      <Faqs />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default HomePage;
