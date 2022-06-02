import { BsYoutube } from 'react-icons/bs';
import { ImFacebook2 } from 'react-icons/im';
import { ImLinkedin } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { FaTwitterSquare } from 'react-icons/fa';
import footer from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={footer.footer}>
      <div className={footer.socialMedia}>
          <BsYoutube color="#fff" />
          <ImFacebook2 color="#ccc" />
          <ImLinkedin color="#ccc" />
          <BsInstagram color="#ccc" />
          <FaTwitterSquare color="#ccc" />
      </div>
      <div className={footer.terms}>
        <p>Terms of Services</p>
        <p>Privacy Policy</p>
      </div>
      <div className={footer.copyright}>
        <p>Copyright 2021 @ Peddle Technologies. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
