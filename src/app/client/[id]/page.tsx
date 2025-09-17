import Link from "next/link";

interface PageProps {
  params: { id: string };
}

export default function ClientPage({ params }: PageProps) {
  const { id } = params;
  const client = {
    id,
    name: `Client ${id}`,
    company: id === "1" ? "Acme Corp" : id === "2" ? "Beta LLC" : "Cypher Inc",
    email: `client${id}@example.com`,
    phone: "+1 (555) 123-4567",
    notes: "Key stakeholder interested in pricing and deployment timelines.",
    lastCall: "2025-09-12 10:30 AM",
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-8">
      <section className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">{client.name}</h1>
        <p className="text-sm text-muted-foreground">{client.company}</p>
      </section>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border p-4 space-y-2">
          <div className="text-sm text-muted-foreground">Contact</div>
          <div className="text-sm">Email: {client.email}</div>
          <div className="text-sm">Phone: {client.phone}</div>
        </div>
        <div className="rounded-lg border p-4 space-y-2">
          <div className="text-sm text-muted-foreground">Last Call</div>
          <div className="text-sm">{client.lastCall}</div>
        </div>
        <div className="rounded-lg border p-4 space-y-2">
          <div className="text-sm text-muted-foreground">Notes</div>
          <p className="text-sm">{client.notes}</p>
        </div>
      </div>

      <div className="flex gap-3">
        <Link href="/book" className="inline-flex items-center rounded-md border px-3 py-2 text-sm hover:bg-accent">
          Back to Book
        </Link>
        <Link href={`/client/${client.id}/calls`} className="inline-flex items-center rounded-md border px-3 py-2 text-sm hover:bg-accent">
          View Calls
        </Link>
      </div>
    </main>
  );
}