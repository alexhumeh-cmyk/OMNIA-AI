import { knowledgeTopics } from '@/lib/data';

export default function ResearchPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.24em] text-accent">Research Hub</p>
        <h1 className="mt-2 text-3xl font-bold text-white">AI knowledge and documentation</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {knowledgeTopics.map((topic) => (
          <div key={topic} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-lg font-medium text-white">{topic}</div>
            <p className="mt-2 text-sm text-slate-300">
              Curated notes, architecture references, and implementation patterns for production AI systems.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
