import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import WaitlistForm from '../../components/WaitlistForm';

const WaitlistPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-light to-[rgba(86,124,121,0.7)]">
      <header>
        <Navbar />
      </header>
      <WaitlistForm />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default WaitlistPage;
