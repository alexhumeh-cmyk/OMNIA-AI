import Link from 'next/link';
import { Compass, Cpu, GitBranch, LayoutDashboard, Palette, Rocket, Search, Settings, Sparkles, Workflow, BookText } from 'lucide-react';

const links = [
  { href: '/', label: 'Home', icon: LayoutDashboard },
  { href: '/explore', label: 'Explore Agents', icon: Compass },
  { href: '/frameworks', label: 'Frameworks', icon: Cpu },
  { href: '/compare', label: 'Compare', icon: GitBranch },
  { href: '/builder', label: 'AI Builder', icon: Sparkles },
  { href: '/automation', label: 'Automation Studio', icon: Workflow },
  { href: '/collections', label: 'Collections', icon: Rocket },
  { href: '/research', label: 'Research Hub', icon: BookText },
  { href: '/github', label: 'GitHub Explorer', icon: Search },
  { href: '/settings', label: 'Settings', icon: Settings },
];

export function SideNav() {
  return (
    <aside className="hidden min-h-screen w-72 border-r border-white/10 bg-slate-950/80 p-6 lg:flex lg:flex-col">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-violet text-lg font-bold text-white">
          O
        </div>
        <div>
          <div className="text-lg font-semibold text-white">OMNIA AI</div>
          <div className="text-xs text-slate-400">Intelligence Platform</div>
        </div>
      </div>

      <nav className="space-y-2">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm text-slate-300 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
          >
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 via-transparent to-violet/10 p-4">
        <div className="mb-2 flex items-center gap-2 text-sm font-medium text-accent">
          <Palette className="h-4 w-4" />
          AI OS mode
        </div>
        <p className="text-sm text-slate-300">
          Explore the ecosystem, compare frameworks, and orchestrate multi-agent workflows.
        </p>
      </div>
    </aside>
  );
}
