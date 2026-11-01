import { ComparisonTable } from '@/components/comparison-table';

export default function ComparePage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.24em] text-accent">Compare</p>
        <h1 className="mt-2 text-3xl font-bold text-white">AI agent comparison engine</h1>
      </div>

      <ComparisonTable />
    </div>
  );
}
