import { BsArrowRight } from 'react-icons/bs';
import questions from './Questions.module.css';
import { Link, Outlet } from 'react-router-dom';

const Questions = () => {
  return (
    <section>
      <div className={questions.questions}>
        <h2>Got a Question?</h2>
        <p>
          See how metricks can help your business grow with best affiliate
          marketing tracking software.
        </p>
        <div className={questions.contact}>
          <Link to="./#contact">
            Contact Us{' '}
            <span>
              <BsArrowRight />
            </span>
          </Link>
        </div>
        <Outlet />
      </div>
    </section>
  );
};

export default Questions;
