import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 py-24">
        <div className="">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            QaaS — Quantum AI as a Service
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-white tracking-tight">
            Accelerate discovery with Quantum AI
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-xl">
            Quantum Leap combines quantum computing with advanced AI to deliver production-grade optimization, simulation, and generative intelligence — instantly, via API.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 text-white font-medium shadow-lg shadow-fuchsia-500/30 hover:brightness-110 transition">Start free</a>
            <a href="#contact" className="inline-flex justify-center items-center px-6 py-3 rounded-xl border border-white/20 text-white/90 hover:bg-white/5 transition">Talk to sales</a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-amber-400/10 blur-3xl" />
          <div className="relative mt-10 lg:mt-0 grid grid-cols-2 gap-4">
            {[
              { title: 'Quantum Optimizer', value: 'x120 speedup' },
              { title: 'Generative Q-Models', value: 'state-of-the-art' },
              { title: 'Hybrid Orchestration', value: 'QC + GPU' },
              { title: '99.95% SLA', value: 'enterprise-ready' },
            ].map((card, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur p-5 text-white">
                <div className="text-sm text-slate-300">{card.title}</div>
                <div className="mt-1 text-xl font-semibold bg-gradient-to-r from-violet-400 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent">{card.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.25),transparent_40%)]" />
    </section>
  );
}
