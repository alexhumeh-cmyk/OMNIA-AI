import { savedCollections } from '@/lib/data';

export default function CollectionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.24em] text-accent">Collections</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Saved project collections</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {savedCollections.map((collection) => (
          <div key={collection.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-3xl font-semibold text-white">{collection.count}</div>
            <div className="mt-3 text-lg font-medium text-slate-200">{collection.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
