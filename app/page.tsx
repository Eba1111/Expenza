import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* You can replace this image with your own logo or remove it */}
        <Image
          className="dark:invert"
          src="/logo.png" // Use your custom image here
          alt="Expenza logo"
          width={180}
          height={38}
          priority
        />

        {/* Welcome message or app description */}
        <h1 className="text-3xl font-bold text-center sm:text-left">
          Welcome to Expenza!
        </h1>
        <p className="text-center sm:text-left">
          Your go-to tool for tracking product prices across online stores.
        </p>

        {/* You can add more sections here */}
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-medium">
          <li className="mb-2">Track prices easily across multiple stores.</li>
          <li className="mb-2">Get alerts when products go on sale.</li>
          <li className="mb-2">Stay within budget with price comparisons.</li>
        </ol>
      </main>
    </div>
  );
}

