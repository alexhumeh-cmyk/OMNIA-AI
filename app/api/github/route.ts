import { NextRequest, NextResponse } from 'next/server';
import { agentCatalog, frameworkCatalog } from '@/lib/data';

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q')?.toLowerCase() ?? '';

  if (!query.trim()) {
    return NextResponse.json({ results: [...agentCatalog, ...frameworkCatalog].slice(0, 10) });
  }

  const results = [...agentCatalog, ...frameworkCatalog].filter((item) => {
    const haystack = [item.name, item.description, item.category, item.tags.join(' '), item.repo]
      .join(' ')
      .toLowerCase();
    return haystack.includes(query);
  });

  return NextResponse.json({ results: results.slice(0, 12) });
}
