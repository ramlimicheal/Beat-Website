import React from 'react';
import Header from './components/Header';
import Marquee from './components/Marquee';
import Hero from './components/Hero';
import BeatStore from './components/BeatStore';
import Licensing from './components/Licensing';
import FeaturedArtists from './components/FeaturedArtists';
import WavsPromo from './components/WavsPromo';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden">
      <Header />
      <Marquee />
      <main>
        <Hero />
        <BeatStore />
        <Licensing />
        <FeaturedArtists />
        <WavsPromo />
      </main>
      <Footer />
    </div>
  );
};

export default App;
