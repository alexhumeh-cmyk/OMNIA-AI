import { SideNav } from '@/components/side-nav';
import { Bell, Search, ChevronDown } from 'lucide-react';

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg text-white">
      <div className="flex min-h-screen">
        <SideNav />
        <div className="flex-1">
          <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">
                <Search className="h-4 w-4 text-slate-400" />
                <span>Search agents, frameworks, repos...</span>
              </div>

              <div className="flex items-center gap-3">
                <button className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:text-white">
                  <Bell className="h-4 w-4" />
                </button>
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-accent to-violet text-xs font-bold text-white">
                    AH
                  </div>
                  <span className="text-sm text-slate-200">Alex</span>
                  <ChevronDown className="h-4 w-4 text-slate-400" />
                </div>
              </div>
            </div>
          </header>

          <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
