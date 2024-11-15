// pages/_app.js
import React from 'react';
import '../globals.css'; // Import global styles

function MyApp({ Component, pageProps }) {
  return (
    <>
      <html lang="en">
        <head>
          <title>Pricezy</title>
        </head>
        <body>
          <header>
            <h1>Welcome to Pricezy!</h1>
          </header>
          <Component {...pageProps} />
          <footer>
            <p>© {new Date().getFullYear()} Pricezy. All rights reserved.</p>
          </footer>
        </body>
      </html>
    </>
  );
}

export default MyApp;
