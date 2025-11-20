export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">Ready to make the quantum leap?</h2>
        <p className="mt-3 text-slate-300">Get a demo, discuss your use case, and explore how QaaS can drive step-change outcomes for your team.</p>
        <form className="mt-8 grid sm:grid-cols-3 gap-3">
          <input required placeholder="Work email" className="sm:col-span-2 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
          <button className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 text-white font-medium shadow-lg shadow-fuchsia-500/30 hover:brightness-110 transition">Request demo</button>
        </form>
        <p className="mt-3 text-xs text-slate-400">By submitting, you agree to our Terms and Privacy Policy.</p>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_center,rgba(236,72,153,0.12),transparent_60%)]" />
    </section>
  );
}
