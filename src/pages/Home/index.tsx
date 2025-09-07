import Hero from '../../components/Hero';
import Features from '../../components/Features';
import Interactions from '../../components/Interactions';
import HowItWorks from '../../components/HowItWorks';
import FAQ from '../../components/FAQ';
import Team from '../../components/Team';
import Waitlist from '../../components/Waitlist';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <Hero />
      <Features />
      <Interactions />
      <HowItWorks />
      <FAQ />
      <Team />
      <Waitlist />
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default Home;
