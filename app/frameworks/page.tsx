import { AgentDirectory } from '@/components/agent-directory';

export default function ExplorePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Directory</p>
          <h1 className="mt-2 text-3xl font-bold text-white">AI Agent Explorer</h1>
        </div>
      </div>

      <AgentDirectory />
    </div>
  );
}
