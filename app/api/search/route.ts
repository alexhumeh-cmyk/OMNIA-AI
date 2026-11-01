export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.24em] text-accent">Settings</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Account and platform preferences</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-lg font-semibold text-white">Core preferences</div>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <div className="flex items-center justify-between"><span>GitHub sync</span><span className="text-accent">Enabled</span></div>
            <div className="flex items-center justify-between"><span>Demo API mode</span><span className="text-accent">Live when token available</span></div>
            <div className="flex items-center justify-between"><span>Research filters</span><span className="text-accent">Curated</span></div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-lg font-semibold text-white">Environment</div>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <div className="flex items-center justify-between"><span>Theme</span><span>Dark</span></div>
            <div className="flex items-center justify-between"><span>Default view</span><span>Dashboard</span></div>
            <div className="flex items-center justify-between"><span>Model provider</span><span>Multi-provider</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
