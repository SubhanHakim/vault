import Hero from './components/Hero';
import About from './components/About';
import Narrative from './components/Narrative';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-vault-black text-vault-text selection:bg-vault-gold selection:text-vault-black">
      <div className="grain-overlay" />

      {/* Decorative Border Frame */}
      <div className="fixed inset-4 border border-vault-gold/5 pointer-events-none z-50 md:block hidden" />

      <main className="relative">
        <Hero />
        <About />
        <Narrative />
        <Gallery />
      </main>

      <Footer />
    </div>
  )
}

export default App
