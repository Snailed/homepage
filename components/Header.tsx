import Link from "next/link";

export default function Header() {
  return (
    <div className="py-12 flex align-bottom justify-between">
      <Link href="/">
        <h1 className="text-2xl">Rasmus Løvstad</h1>
      </Link>
      <div className="mt-auto h-full">
        <Link className="mr-4" href="/cv">
          CV
        </Link>
        <Link className="mr-4" href="/portfolio">
          Portfolio
        </Link>
        <Link className="" href="/blog">
          Blog
        </Link>
      </div>
    </div>
  );
}
