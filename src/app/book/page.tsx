import Link from "next/link";
import { BrokerHeader } from "@/components/broker-header";
import { headers } from "next/headers";

function formatLastCall(lastCallAt: number | null): string {
  if (!lastCallAt) return "No recent calls";
  const diffMs = Date.now() - lastCallAt;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays <= 0) return "Today";
  if (diffDays === 1) return "1 day ago";
  if (diffDays < 7) return `${diffDays} days ago`;
  const diffWeeks = Math.floor(diffDays / 7);
  return diffWeeks === 1 ? "1 week ago" : `${diffWeeks} weeks ago`;
}

export default async function BookPage() {
  const host = headers().get("host") || "localhost:3000";
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const res = await fetch(`${protocol}://${host}/api/clients`, { cache: "no-store" });
  const clients: { id: number; name: string; company: string; lastCallAt: number | null }[] = res.ok ? await res.json() : [];

  return (
    <>
      <BrokerHeader />
      <main className="mx-auto max-w-6xl px-4 py-8 space-y-8">
        <section className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">Book</h1>
          <p className="text-sm text-muted-foreground">Manage your clients and jump into their profiles and calls.</p>
        </section>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((c) => (
            <div key={c.id} className="rounded-lg border p-4 space-y-2">
              <div className="flex items-center justify-between">
                <Link href={`/client/${c.id}`} className="font-medium hover:underline">
                  {c.name}
                </Link>
                <span className="text-xs text-muted-foreground">{c.company}</span>
              </div>
              <div className="text-sm text-muted-foreground">Last call: {formatLastCall(c.lastCallAt)}</div>
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
    </>
  );
}