import { agentCatalog, frameworkCatalog, githubDemoRepos } from './data';

export type GitHubRepoResult = {
  owner: string;
  repo: string;
  name: string;
  description: string | null;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  language: string | null;
  license: { spdx_id: string | null } | null;
  html_url: string;
};

const defaultRepoMap: Record<string, GitHubRepoResult> = {};

for (const repo of githubDemoRepos) {
  const [owner, rName] = repo.split('/');
  const match = agentCatalog.find((item) => item.repo === repo) ?? frameworkCatalog.find((item) => item.repo === repo);

  defaultRepoMap[repo] = {
    owner,
    repo: rName,
    name: rName,
    description: match?.description ?? 'Open-source AI project in OMNIA AI reference data.',
    homepage: match?.website ?? null,
    stargazers_count: match && 'stars' in match ? (match.stars ?? 0) : 1200,
    forks_count: 300,
    open_issues_count: 38,
    language: match?.language ?? 'TypeScript',
    license: { spdx_id: match?.license ?? 'MIT' },
    html_url: `https://github.com/${repo}`,
  };
}

export async function fetchGitHubRepoStats(repo: string): Promise<GitHubRepoResult> {
  const token = process.env.GITHUB_TOKEN;

  if (token) {
    try {
      const response = await fetch(`https://api.github.com/repos/${repo}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
        },
        next: { revalidate: 3600 },
      });

      if (response.ok) {
        return (await response.json()) as GitHubRepoResult;
      }
    } catch (error) {
      console.warn('GitHub API fetch failed, using demo metadata.', error);
    }
  }

  return defaultRepoMap[repo] ?? {
    owner: repo.split('/')[0],
    repo: repo.split('/')[1],
    name: repo.split('/')[1],
    description: 'Demo-safe GitHub metadata.',
    homepage: `https://github.com/${repo}`,
    stargazers_count: 0,
    forks_count: 0,
    open_issues_count: 0,
    language: 'Unknown',
    license: { spdx_id: 'Unknown' },
    html_url: `https://github.com/${repo}`,
  };
}
