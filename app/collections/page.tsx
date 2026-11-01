import { workflowTemplates } from '@/lib/data';

export default function AutomationPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.24em] text-accent">Automation Studio</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Workflow builder</h1>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Canvas</div>
            <button className="rounded-xl bg-accent px-3 py-2 text-xs font-medium text-slate-950">Run workflow</button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-slate-950/80 p-4">
              <div className="text-xs uppercase text-slate-400">Trigger</div>
              <div className="mt-3 text-lg font-semibold text-white">Ingest request</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-950/80 p-4">
              <div className="text-xs uppercase text-slate-400">Agent</div>
              <div className="mt-3 text-lg font-semibold text-white">Plan + reason</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-950/80 p-4">
              <div className="text-xs uppercase text-slate-400">Action</div>
              <div className="mt-3 text-lg font-semibold text-white">Publish summary</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {workflowTemplates.map((template) => (
            <div key={template.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-lg font-semibold text-white">{template.title}</div>
              <p className="mt-2 text-sm text-slate-300">{template.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {template.steps.map((step) => (
                  <span key={step} className="rounded-full border border-white/10 bg-slate-900 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-slate-300">
                    {step}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
