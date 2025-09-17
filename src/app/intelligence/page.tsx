import Link from "next/link";

export default function IntelligencePage() {
  const insights = [
    { id: 1, title: "Pricing objections trending", detail: "12 mentions this week", tag: "Trend" },
    { id: 2, title: "High-buy intent signals", detail: "7 strong signals detected", tag: "Signal" },
    { id: 3, title: "Follow-up risk", detail: "5 calls missing next steps", tag: "Risk" },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-8">
      <section className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Call Intelligence</h1>
        <p className="text-sm text-muted-foreground">Search transcripts, surface insights, and review action items.</p>
      </section>

      <section className="rounded-lg border p-4 grid gap-3 md:grid-cols-[1fr_auto]">
        <input
          type="text"
          placeholder="Search topics, clients, or keywords..."
          className="w-full rounded-md border px-3 py-2 text-sm bg-background"
        />
        <div className="flex gap-2">
          <button className="inline-flex items-center rounded-md border px-3 py-2 text-sm hover:bg-accent">Search</button>
          <button className="inline-flex items-center rounded-md border px-3 py-2 text-sm hover:bg-accent">Upload Transcript</button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {insights.map((i) => (
          <div key={i.id} className="rounded-lg border p-4 space-y-1">
            <div className="text-xs text-muted-foreground">{i.tag}</div>
            <h3 className="font-medium">{i.title}</h3>
            <p className="text-sm text-muted-foreground">{i.detail}</p>
          </div>
        ))}
      </section>

      <section className="rounded-lg border p-6 space-y-3">
        <h2 className="font-medium">Suggested Actions</h2>
        <ul className="text-sm list-disc pl-5 space-y-1 text-muted-foreground">
          <li>Prepare pricing comparison for Client A</li>
          <li>Schedule discovery follow-up with Client C</li>
          <li>Send recap email template to this week's new prospects</li>
        </ul>
        <div className="pt-2">
          <Link href="/book" className="text-sm underline underline-offset-4">Go to Book</Link>
        </div>
      </section>
    </main>
  );
}