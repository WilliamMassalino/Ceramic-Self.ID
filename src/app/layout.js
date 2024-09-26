"use client"; // This directive tells Next.js to treat this component as a client component, meaning it will be rendered on the client side.

/* Import the localFont function from Next.js to load and manage custom fonts,
   and the CSS file for global styles */
import localFont from "next/font/local";
import "./globals.css";

// Import the Provider component from Self.ID to manage user authentication and connection to the Ceramic Network
import { Provider } from "@self.id/react";

/* Load custom fonts locally using next/font.
   'geistSans' and 'geistMono' are loaded with specific weights and CSS variables assigned for styling. */
const geistSans = localFont({
  src: "./fonts/GeistVF.woff", // Path to the font file
  variable: "--font-geist-sans", // Define a CSS variable to apply this font globally
  weight: "100 900", // Set the range of font weights
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff", // Path to the font file
  variable: "--font-geist-mono", // Define a CSS variable for this font
  weight: "100 900", // Set the range of font weights
});

// Export the RootLayout component as the default export of this module
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 'lang' attribute in the <html> tag is important for accessibility and SEO */}
      <body
        // Apply the loaded fonts and an anti-aliasing style for better text rendering
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Wrap the entire application with the Self.ID Provider 
            to enable authentication and access to the Ceramic network throughout the app */}
        <Provider client={{ ceramic: "testnet-clay" }}> {/* Specify the Ceramic network to use */}
          {children} {/* Render the child components of the layout */}
        </Provider>
      </body>
    </html>
  );
}
