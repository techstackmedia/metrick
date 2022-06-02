import fact from './Fact.module.css'; 

const Fact = () => {
  const dots = '.'.repeat(13);
  const elem = <span>{dots}</span>;

  return (
    <section>
      <div className={fact.fact}>
        <div className={fact.whyContainer}>
          <div className={fact.why}>
            <hr />
            <h4>Why us?</h4>
          </div>
          <div className={fact.whyText}>
            <div className={fact.whyTextContenter}>
              <p>
                We pride ourselves in our ability to innovate and create
                world-class tools that provide reliable and efficient
                touchpoints between advertisers and affiliates.
              </p>
              <div>
                <div className={fact.dots}>{elem}</div>
                <div className={fact.dots}>{elem}</div>
                <div className={fact.dots}>{elem}</div>
                <div className={fact.dots}>{elem}</div>
                <div className={fact.dots}>{elem}</div>
              </div>
            </div>
          </div>
        </div>

        <div className={fact.growContainer}>
          <div className={fact.grow}>
            <hr />
            <h4>Growing with you?</h4>
          </div>
          <div className={fact.growText}>
            <p className={fact.growTexFirst}>
              Leveraging the best technology, we have developed an all-in-one
              affiliate marketing tracking software, a genius tool to help you
              track, automate and optimize your influencer campaigns, all from
              one dashboard.
            </p>

            <p className={fact.growTexSecond}>
              Our team of experts are constantly brainstorming, testing and
              developing new solutions with only one thing in mind - your
              business growth. Your success is our success and by giving you the
              tools you need to scale, we grow as well.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fact;
