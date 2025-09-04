import './App.css';
import FAQ from './components/FAQ';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Navbar from './components/Navbar';
import Team from './components/Team';
import Waitlist from './components/Waitlist';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <FAQ />
        <Team />
        <Waitlist />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
