import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Industries from './components/Industries';
import Products from './components/Products';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Industries />
        <Products />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
