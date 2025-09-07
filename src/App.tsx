import { IconoirProvider } from 'iconoir-react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import WaitlistPage from './pages/Waitlist';

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/waitlist" element={<WaitlistPage />} />
        </Routes>
      </IconoirProvider>
    </>
  );
}

export default App;
