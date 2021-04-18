import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Particles
        id="home"
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 35,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: 'square',
              stroke: {
                width: 6,
                color: '#f9ab00'
              }
            }
          }
        }} />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
