import Link from "next/link";

interface PageProps {
  params: { id: string };
}

export default function ClientCallsPage({ params }: PageProps) {
  const { id } = params;
  const calls = [
    { id: 101, date: "2025-09-10", duration: "32m", sentiment: "Positive", summary: "Agreed to pilot starting next week." },
    { id: 102, date: "2025-09-05", duration: "18m", sentiment: "Neutral", summary: "Clarified pricing tiers and deployment options." },
    { id: 103, date: "2025-08-30", duration: "42m", sentiment: "Risk", summary: "Follow-up required on legal review and security questionnaire." },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-8">
      <section className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Calls — Client {id}</h1>
        <p className="text-sm text-muted-foreground">Previous calls with quick summaries and sentiment.</p>
      </section>

      <div className="rounded-lg border divide-y">
        {calls.map((c) => (
          <div key={c.id} className="p-4 flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="text-sm font-medium">{c.date} • {c.duration}</div>
              <div className="text-xs text-muted-foreground">{c.summary}</div>
            </div>
            <span className="text-xs px-2 py-1 rounded-md border whitespace-nowrap">
              {c.sentiment}
            </span>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <Link href={`/client/${id}`} className="inline-flex items-center rounded-md border px-3 py-2 text-sm hover:bg-accent">
          Back to Client
        </Link>
        <Link href="/intelligence" className="inline-flex items-center rounded-md border px-3 py-2 text-sm hover:bg-accent">
          Open Intelligence
        </Link>
      </div>
    </main>
  );
}