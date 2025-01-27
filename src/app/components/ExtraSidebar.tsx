import Link from "next/link";

export function ExtraSidebar() {
  return (
    <aside className="hidden xl:block w-[250px] shrink-0 border-l-[1px] border-white/20">
      <div className="sticky top-0 pt-4 px-4">
        <h3 className="text-xl font-semibold text-white/95">Some more pages</h3>
        <nav className="pt-3 flex flex-col gap-y-3 text-white/80">
          <Link href="/legal" className="hover:text-white transition-colors">
            Legal
          </Link>
          <Link href="/" className="hover:text-white transition-colors">
            Help make this project better!
          </Link>
          <Link
            href="/comingsoon"
            className="hover:text-white transition-colors"
          >
            Coming soon ideas
          </Link>
        </nav>
      </div>
    </aside>
  );
}
