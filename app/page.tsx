import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="w-full bg-white shadow-md flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          {/* Logo */}
          <Image src="/pricezy-high-resolution-logo.png" alt="App logo" width={40} height={40} />
          <h1 className="text-2xl font-bold text-blue-600">YourAppName</h1>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium">
          Get Started
        </button>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-grow p-8 text-center">
        <h2 className="text-4xl font-extrabold text-black mb-2">
          Manage Your Expense
        </h2>
        <h3 className="text-2xl font-semibold text-blue-600 mb-4">
          Control Your Money
        </h3>
        <p className="text-gray-600 max-w-lg">
          Find the cheapest price for your product
        </p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md font-medium text-lg">
          Get Started Now
        </button>
      </main>

      {/* Dashboard Preview Image */}
      <div className="w-full flex justify-center mt-12">
        <Image src="/jason-briscoe-w2uvoJo_woE-unsplash.png" alt="Dashboard preview" width={800} height={400} />
      </div>
    </div>
  );
}

