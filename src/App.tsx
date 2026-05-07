import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}
