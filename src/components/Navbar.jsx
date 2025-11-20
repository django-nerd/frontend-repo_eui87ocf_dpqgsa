import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-amber-400 shadow-lg shadow-fuchsia-500/30" />
            <span className="text-white font-semibold text-lg tracking-tight">Quantum Leap</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition">Contact</a>
            <a href="#pricing" className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 text-white font-medium shadow-lg shadow-fuchsia-500/30 hover:brightness-110 transition">Get Started</a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-white">
            <Menu size={20} />
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 space-y-2 border-t border-white/10">
            <a onClick={() => setOpen(false)} href="#features" className="block text-slate-300 hover:text-white">Features</a>
            <a onClick={() => setOpen(false)} href="#pricing" className="block text-slate-300 hover:text-white">Pricing</a>
            <a onClick={() => setOpen(false)} href="#contact" className="block text-slate-300 hover:text-white">Contact</a>
            <a onClick={() => setOpen(false)} href="#pricing" className="block mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 text-white text-center">Get Started</a>
          </div>
        )}
      </nav>
    </header>
  );
}
