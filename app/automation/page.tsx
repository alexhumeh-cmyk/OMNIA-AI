'use client';

import { useMemo, useState } from 'react';

const presets = ['Coding assistant', 'Research copilot', 'Operations agent', 'Creative studio agent'];

export default function BuilderPage() {
  const [purpose, setPurpose] = useState('Coding assistant');
  const [tools, setTools] = useState('GitHub, browser, terminal');
  const [memory, setMemory] = useState('Long-term vector memory');
  const [model, setModel] = useState('GPT-4.1 / Gemini 2.5 / Claude Sonnet');

  const generatedSnippet = useMemo(() => {
    return `import { AgentRuntime } from '@omnia-ai/runtime';

const agent = new AgentRuntime({
  name: 'Custom OMNIA Agent',
  purpose: '${purpose}',
  model: '${model}',
  tools: ['${tools.replace(/, /g, "', '")}'],
  memory: '${memory}',
  workflow: ['plan', 'execute', 'verify', 'summarize'],
});

export default agent;`;
  }, [memory, model, purpose, tools]);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.24em] text-accent">Builder</p>
        <h1 className="mt-2 text-3xl font-bold text-white">AI Agent Builder</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-5">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Agent purpose</label>
            <select value={purpose} onChange={(event) => setPurpose(event.target.value)} className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2.5 text-white">
              {presets.map((preset) => (
                <option key={preset} value={preset}>{preset}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">Tools</label>
            <input value={tools} onChange={(event) => setTools(event.target.value)} className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2.5 text-white" />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">Memory system</label>
            <input value={memory} onChange={(event) => setMemory(event.target.value)} className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2.5 text-white" />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">Model</label>
            <input value={model} onChange={(event) => setModel(event.target.value)} className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2.5 text-white" />
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
          <div className="mb-3 text-sm uppercase tracking-[0.2em] text-accent">Starter code</div>
          <pre className="overflow-x-auto whitespace-pre-wrap text-sm leading-6 text-slate-200">{generatedSnippet}</pre>
        </div>
      </div>
    </div>
  );
}
