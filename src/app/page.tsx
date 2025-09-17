import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-8">
      <section className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Command Center</h1>
        <p className="text-sm text-muted-foreground">Overview of clients, calls, and intelligence.</p>
      </section>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border p-4">
          <div className="text-sm text-muted-foreground">Total Clients</div>
          <div className="mt-1 text-3xl font-semibold">12</div>
        </div>
        <div className="rounded-lg border p-4">
          <div className="text-sm text-muted-foreground">Calls This Week</div>
          <div className="mt-1 text-3xl font-semibold">38</div>
        </div>
        <div className="rounded-lg border p-4">
          <div className="text-sm text-muted-foreground">Insights Generated</div>
          <div className="mt-1 text-3xl font-semibold">124</div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border p-6 space-y-3">
          <h2 className="font-medium">Quick Start</h2>
          <p className="text-sm text-muted-foreground">Manage your clients and review their call history.</p>
          <div className="flex gap-3">
            <Link href="/book" className="inline-flex items-center rounded-md border px-3 py-2 text-sm hover:bg-accent">
              Open Book
            </Link>
            <Link href="/intelligence" className="inline-flex items-center rounded-md border px-3 py-2 text-sm hover:bg-accent">
              Open Intelligence
            </Link>
          </div>
        </div>
        <div className="rounded-lg border p-6 space-y-3">
          <h2 className="font-medium">Recent Activity</h2>
          <ul className="text-sm list-disc pl-5 space-y-1 text-muted-foreground">
            <li>Call summary generated for Client A</li>
            <li>Uploaded transcript for Client B</li>
            <li>Flagged follow-up for Client C</li>
          </ul>
        </div>
      </div>
    </main>
  );
}