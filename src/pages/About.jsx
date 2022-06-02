import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Fact from '../components/Fact/Fact';
import Questions from '../components/Questions/Questions';
import FooterAbout from "../components/FooterAbout/FooteraAbout"
const About = () => {
  return (
    <div className="About">
      <Navbar color="rgba(242, 7, 250)" />
      <Hero />
      <Fact />
      <Questions />
      <FooterAbout />
    </div>
  );
};

export default About;
