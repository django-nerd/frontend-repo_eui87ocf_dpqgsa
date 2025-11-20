import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="fixed inset-0 bg-[radial-gradient(800px_500px_at_10%_-10%,rgba(124,58,237,0.15),transparent),radial-gradient(800px_500px_at_110%_10%,rgba(245,158,11,0.12),transparent)]" />
      <div className="relative">
        <Navbar />
        <Hero />
        <Features />
        <Pricing />
        <CTA />
        <footer className="border-t border-white/10 py-10 text-center text-slate-400">
          © {new Date().getFullYear()} Quantum Leap — Quantum AI as a Service
        </footer>
      </div>
    </div>
  )
}

export default App