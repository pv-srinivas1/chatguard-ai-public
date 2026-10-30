export function HeroSection() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
            Real-time moderation
          </span>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
            Detect harmful chat before it spreads.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            ChatGuard AI helps community teams act on toxic, abusive, or scammy messages with fast, explainable moderation decisions.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white">
              Explore demo
            </button>
            <button className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700">
              Learn more
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-500">Live moderation status</span>
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-bold text-green-700">
                Safe
              </span>
            </div>
            <div className="space-y-4">
              <div className="rounded-xl bg-slate-100 p-3 text-sm text-slate-700">“He’s cracked” → Context flagged</div>
              <div className="rounded-xl bg-slate-100 p-3 text-sm text-slate-700">“DM me for a giveaway” → Scam risk</div>
              <div className="rounded-xl bg-slate-100 p-3 text-sm text-slate-700">“you are a disgrace” → Toxicity detected</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
