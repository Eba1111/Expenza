// layout.tsx
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <img
        src="/images/logo.png"
        alt="Pricezy Logo"
        className="w-auto h-auto max-w-full"
      />
      {children}
    </div>
  );
};

export default Layout;
