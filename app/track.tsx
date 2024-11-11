// app/track.tsx
import { useState } from "react";

export default function Track() {
  const [productName, setProductName] = useState("");
  const [productUrl, setProductUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here, you can add logic to handle product tracking (e.g., saving product info, fetching price data)
    console.log(`Tracking product: ${productName}, URL: ${productUrl}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Track a Product</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="border p-2"
          required
        />
        <input
          type="url"
          placeholder="Product URL"
          value={productUrl}
          onChange={(e) => setProductUrl(e.target.value)}
          className="border p-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 mt-4">
          Track Product
        </button>
      </form>
    </div>
  );
}
