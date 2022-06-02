import hero from './Hero.module.css';

const Hero = () => {
  return (
    <>
      <section>
        <div className={hero.jumbotron}>
          <div className={hero.hero}>
            <div className={hero.intro}>
              <div>
                <hr />
              </div>
              <p>About Us</p>
            </div>
            <p className={hero.saas}>Built for SaaS and E-commerce</p>
          </div>
          <div className={hero.tool}>
            <p>
              Our tools are easy to set up and use with a user friendly
              dashboard that enables you to set up, launch, automate and manage
              multi-affiliate campaigns in 5 minutes.
            </p>
          </div>
        </div>
        <div className={hero.mainText}>
            <p>Metricks was developed because just like you, we needed a product that could give us <strong>good value</strong>.</p>
        </div>
      </section>
    </>
  );
};

export default Hero;
