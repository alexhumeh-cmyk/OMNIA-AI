'use client';

import Link from 'next/link';
import { ExternalLink, GitBranch, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { agentCatalog } from '@/lib/data';

export function AgentDirectory() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(agentCatalog.map((item) => item.category)))];

  const filtered = useMemo(() => {
    return agentCatalog.filter((item) => {
      const matchesCategory = category === 'All' || item.category === category;
      const matchesQuery = [item.name, item.description, item.tags.join(' '), item.category]
        .join(' ')
        .toLowerCase()
        .includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-white/10 bg-panel/70 p-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search agents, tags, capabilities..."
              className="w-full rounded-xl border border-white/10 bg-slate-900/90 py-2.5 pl-10 pr-3 text-sm text-white outline-none ring-0 placeholder:text-slate-500"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full border px-3 py-1.5 text-xs transition ${
                  category === item
                    ? 'border-accent/50 bg-accent/10 text-accent'
                    : 'border-white/10 bg-transparent text-slate-300 hover:border-white/20 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((item) => (
          <article key={item.id} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-soft">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{item.category}</div>
                <h3 className="mt-2 text-xl font-semibold text-white">{item.name}</h3>
              </div>
              <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-emerald-300">
                {item.status}
              </div>
            </div>

            <p className="text-sm leading-6 text-slate-300">{item.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-slate-900/80 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-slate-300">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2"><GitBranch className="h-3.5 w-3.5 text-accent" /> {item.repo}</div>
              <div>License: {item.license}</div>
              <div>Language: {item.language}</div>
              {item.stars ? <div>GitHub stars: {item.stars.toLocaleString()}</div> : null}
            </div>

            <div className="mt-5 flex items-center justify-between">
              <Link href={item.website} className="inline-flex items-center gap-2 text-sm text-accent hover:text-white">
                Visit project <ExternalLink className="h-4 w-4" />
              </Link>
              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase text-slate-300">
                {item.type}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
