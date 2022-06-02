import info from './Info.module.css';

const Info = () => {
  const date = new Date();
  const day = 6 - date.getDay();
  const hours = 24 - date.getHours();
  const minutes = 60 - date.getMinutes();
  const seconds = 60 - date.getSeconds();

  return (
    <>
      <section className={info.info}>
        <div>
          <p className={info.note}>Something Awesome is Coming Soon</p>
        </div>
        <div className={info.notePara}>
          <p>
            Your all-in-one affiliate marketing tracking software{' '}
            <strong>track</strong>, <strong>automate</strong> and{' '}
            <strong>optimize</strong> your campaigns.
          </p>
        </div>
        <div className={info.date}>
          <div className={info.card}>
            <div>
              <span className={info.dateTime}>{day}</span>
            </div>
            <div>
              <span className={info.dateTimeLabel}>Days</span>
            </div>
          </div>
          <div className={info.card}>
            <div>
              <span className={info.dateTime}>{hours}</span>
            </div>
            <div>
              <span className={info.dateTimeLabel}>Hours</span>
            </div>
          </div>{' '}
          <div className={info.card}>
            <div>
              <span className={info.dateTime}>{minutes}</span>
            </div>
            <div>
              <span className={info.dateTimeLabel}>Minutes</span>
            </div>
          </div>{' '}
          <div className={info.card}>
            <div>
              <span className={info.dateTime}>{seconds}</span>
            </div>
            <div>
              <span className={info.dateTimeLabel}>Second</span>
            </div>
          </div>
        </div>
        <div>
          <form className={info.form}>
            <div className={info.formInput}>
              <input type="text" placeholder="First Name.." />
              <input type="text" placeholder="Last Name.." />
            </div>
            <div className={info.submit}>
              <input type="email" placeholder="Enter your email address..." />
              <input type="button" value="Join Our Waiting List" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Info;
