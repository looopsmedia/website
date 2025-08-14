import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DemoSubmit } from "./components/DemoSubmit";
import { Artists } from './components/Artists';
import { MediaProduction } from './components/MediaProduction';
import { MusicDistribution } from './components/MusicDistribution';
import { Equipment } from './components/Equipment';
import { Partners } from './components/Partners';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { ScrollToTopButton } from './components/ScrollToTopButton';


function App() {
  return (
    <div className="min-h-screen bg-dark-gray">
      <Header />
      <Hero />
	  <DemoSubmit />
      <Artists />
      <MediaProduction />
      <MusicDistribution />
      <Equipment />
	  <Partners />
      <About />
      <Footer />
	  <ScrollToTopButton />
	  
    </div>
  );
}

export default App;
