import { Cpu, Brain, Gauge, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Quantum Compute, Simplified',
    desc: 'Access leading quantum hardware and high-fidelity simulators behind a single, unified API.'
  },
  {
    icon: Brain,
    title: 'AI-Native Tooling',
    desc: 'Pre-built solvers, generative models, and pipelines tailored to optimization and simulation.'
  },
  {
    icon: Gauge,
    title: 'Elastic Performance',
    desc: 'Autoscale across QPUs and GPUs with hybrid orchestration to meet enterprise SLAs.'
  },
  {
    icon: ShieldCheck,
    title: 'Security & Compliance',
    desc: 'SAML/SSO, audit trails, and data residency to meet stringent compliance needs.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Built for mission-critical workloads</h2>
          <p className="mt-4 text-slate-300">Ship faster with a platform engineered for performance, reliability, and developer velocity.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="group rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur p-6 text-white">
              <div className="w-10 h-10 rounded-lg grid place-content-center bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white mb-4">
                <f.icon size={20} />
              </div>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(124,58,237,0.12),transparent_50%)]" />
    </section>
  );
}
