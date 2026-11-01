import { StatCard } from '@/components/stat-card';
import { getFeaturedAgents, getMetrics } from '@/lib/types';
import Link from 'next/link';

export default function HomePage() {
  const metrics = getMetrics();
  const featured = getFeaturedAgents();

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-soft">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.24em] text-accent">OMNIA AI</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">ONE PLATFORM. INFINITE INTELLIGENCE.</h1>
            <p className="mt-4 max-w-xl text-base text-slate-300">
              Discover agent ecosystems, compare frameworks, design multi-agent workflows, and assemble AI-native operating systems from one place.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/explore" className="rounded-xl bg-accent px-5 py-3 text-sm font-medium text-slate-950 transition hover:opacity-90">
              Explore agents
            </Link>
            <Link href="/builder" className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10">
              Build an agent
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <StatCard key={metric.label} label={metric.label} value={metric.value} helper="Updated from ecosystem telemetry" />
        ))}
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="section-title">Featured ecosystems</h2>
          <Link href="/explore" className="text-sm text-accent">View all</Link>
        </div>

        <div className="card-grid">
          {featured.map((item) => (
            <div key={item.id} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-soft">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.category}</div>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                <span>{item.type}</span>
                <span>{item.language}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
