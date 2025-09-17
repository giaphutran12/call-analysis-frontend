import Link from "next/link";

export const NavBar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-lg">
          Call Analysis
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/" className="hover:underline underline-offset-4">Dashboard</Link>
          <Link href="/book" className="hover:underline underline-offset-4">Book</Link>
          <Link href="/intelligence" className="hover:underline underline-offset-4">Intelligence</Link>
        </nav>
      </div>
    </header>
  );
};