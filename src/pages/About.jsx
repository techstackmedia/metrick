import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Fact from '../components/Fact/Fact';
import Questions from '../components/Questions/Questions';
import Footer from '../components/Footer/Footer';

const About = () => {
  return (
    <div className="About">
      <Navbar color="rgba(242, 7, 250)" />
      <Hero />
      <Fact />
      <Questions />
      <Footer />
    </div>
  );
};

export default About;
