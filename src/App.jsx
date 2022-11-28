import React from 'react';
import './index.css';
import {
  About,
  Portfolio,
  Header,
  Footer,
  Experience,
  Testimonials,
  Contact,
  Services,
} from './components';

export const App = () => {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};
export default App;
