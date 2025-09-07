import { Circle, Linkedin, Mail } from 'iconoir-react';
import { FOOTER } from '../../constants';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white/0 to-[rgba(39,107,101,0.32)] text-center">
      <div className="flex justify-center pt-20 py-5 gap-3">
        <a
          href={FOOTER.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-primary rounded-full p-1 w-{20} h-{20}"
        >
          <Linkedin />
        </a>
        <a
          href={'mailto:' + FOOTER.email}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-primary rounded-full flex justify-center items-center px-3 py-1 gap-1 text-primary"
        >
          <Mail width={20} height={20} />
          {FOOTER.email}
        </a>
      </div>
      <div className="flex justify-center items-center gap-5 pb-5 text-primary">
        <a href="#privacy-policy">Privacy Policy</a>
        <Circle width={6} height={6} style={{ strokeWidth: '8px' }} />
        <a href="#terms-of-service">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
