import Link from "next/link";

export default function Home() {
  return (
    <section className="p-4 w-full mt-6 mx-auto max-w-[850px]">
      <h1 className="text-3xl font-medium mb-2">Welcome to cybture.</h1>
      <p className="text-white/70 mt-6">
        A collection of popular tool commands designed for quick and easy access
        during ethical hacking CTFs. Instead of struggling to recall commands or
        wading through extensive documentation, Cybture provides a
        straightforward solution to find the answers you need. This project was
        created to simplify command usage for my personal needs while deepening
        my understanding of the tools commonly used in ethical hacking.
      </p>
      <Link href="https://github.com/cawx/cybture" target="_blank">
        <h2 className="text-xl text-white/80 font-medium mb-2 mt-12 underline hover:text-white">
          Contribute to this project
        </h2>
      </Link>
    </section>
  );
}
