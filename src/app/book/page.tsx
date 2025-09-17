import Link from "next/link";

export default function BookPage() {
  const clients = [
    { id: 1, name: "Client A", company: "Acme Corp", lastCall: "2 days ago" },
    { id: 2, name: "Client B", company: "Beta LLC", lastCall: "5 days ago" },
    { id: 3, name: "Client C", company: "Cypher Inc", lastCall: "1 week ago" },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-8">
      <section className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Book</h1>
        <p className="text-sm text-muted-foreground">Manage your clients and jump into their profiles and calls.</p>
      </section>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {clients.map((c) => (
          <div key={c.id} className="rounded-lg border p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{c.name}</h3>
              <span className="text-xs text-muted-foreground">{c.company}</span>
            </div>
            <div className="text-sm text-muted-foreground">Last call: {c.lastCall}</div>
            <div className="flex gap-2 pt-2">
              <Link href={`/client/${c.id}`} className="inline-flex items-center rounded-md border px-3 py-1.5 text-xs hover:bg-accent">
                View Client
              </Link>
              <Link href={`/client/${c.id}/calls`} className="inline-flex items-center rounded-md border px-3 py-1.5 text-xs hover:bg-accent">
                Calls
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}