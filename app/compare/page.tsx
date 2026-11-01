import { frameworkCatalog } from '@/lib/data';
import Link from 'next/link';

export default function FrameworksPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.24em] text-accent">Framework stack</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Generative software frameworks</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {frameworkCatalog.map((item) => (
          <article key={item.id} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-soft">
            <div className="mb-3 flex items-center justify-between gap-2">
              <span className="rounded-full border border-white/10 bg-slate-900/80 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-slate-300">
                {item.category}
              </span>
              <span className="text-xs text-slate-400">{item.status}</span>
            </div>
            <h3 className="text-xl font-semibold text-white">{item.name}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
            <div className="mt-4 space-y-2 text-xs text-slate-300">
              <div>Repo: {item.repo}</div>
              <div>Language: {item.language}</div>
              <div>License: {item.license}</div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-slate-900/80 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
            <Link href={item.website} target="_blank" className="mt-5 inline-block text-sm text-accent">
              View framework →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
