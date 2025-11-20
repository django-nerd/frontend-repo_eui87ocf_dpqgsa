export default function Pricing() {
  const tiers = [
    { name: 'Developer', price: 'Free', perks: ['10k API credits / mo', 'Community support', 'Shared simulators'] },
    { name: 'Team', price: '$499/mo', perks: ['1M API credits', 'Priority support', 'Managed simulators', 'Basic QPU access'] },
    { name: 'Enterprise', price: 'Talk to us', perks: ['Custom credits', '24/7 support', 'Dedicated QPU windows', 'SLA & compliance'] },
  ];

  return (
    <section id="pricing" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Simple, usage-based pricing</h2>
          <p className="mt-3 text-slate-300">Start free. Scale to millions of requests with transparent per-credit billing.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur p-6 text-white">
              <div className="text-sm text-slate-300">{t.name}</div>
              <div className="mt-2 text-3xl font-semibold">{t.price}</div>
              <ul className="mt-4 space-y-2">
                {t.perks.map((p, idx) => (
                  <li key={idx} className="text-sm text-slate-300">• {p}</li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex justify-center items-center w-full px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition">Choose</a>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_80%_20%,rgba(245,158,11,0.12),transparent_50%)]" />
    </section>
  );
}
