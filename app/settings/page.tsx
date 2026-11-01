import { githubDemoRepos } from '@/lib/data';
import { fetchGitHubRepoStats } from '@/lib/github';

export default async function GitHubPage() {
  const repoStats = await Promise.all(
    githubDemoRepos.map(async (repo) => ({ repo, data: await fetchGitHubRepoStats(repo) }))
  );

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.24em] text-accent">GitHub Explorer</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Repository intelligence</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {repoStats.map(({ repo, data }) => (
          <a key={repo} href={data.html_url} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-accent/30 hover:bg-white/10">
            <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{repo}</div>
            <h3 className="mt-3 text-xl font-semibold text-white">{data.name}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{data.description}</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-300">
              <div>Stars: {data.stargazers_count.toLocaleString()}</div>
              <div>Forks: {data.forks_count.toLocaleString()}</div>
              <div>Issues: {data.open_issues_count.toLocaleString()}</div>
              <div>Lang: {data.language ?? 'Unknown'}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
