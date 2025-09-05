import { IconoirProvider } from 'iconoir-react';
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
      <IconoirProvider
        iconProps={{
          color: '#1a6d66',
          strokeWidth: 2,
          width: '2em',
          height: '2em',
        }}
      >
        <header>
          <Navbar />
        </header>
        <div className="bg-amber-100 h-[400px]"></div>
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
      </IconoirProvider>
    </>
  );
}

export default App;
