import { compareRows } from '@/lib/data';

export function ComparisonTable() {
  const columns = ['OpenHands', 'AutoGPT', 'LangGraph', 'CrewAI', 'Dify'];

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5">
      <table className="min-w-full text-left">
        <thead className="bg-slate-900/80 text-sm text-slate-300">
          <tr>
            <th className="px-4 py-3 font-medium">Feature</th>
            {columns.map((column) => (
              <th key={column} className="px-4 py-3 font-medium">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {compareRows.map((row) => (
            <tr key={row.feature} className="border-t border-white/10 text-sm text-slate-200">
              <td className="px-4 py-3 font-medium text-white">{row.feature}</td>
              {columns.map((column) => (
                <td key={`${row.feature}-${column}`} className="px-4 py-3">
                  {row[column as keyof typeof row]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
