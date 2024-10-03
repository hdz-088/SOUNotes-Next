import { Poppins } from "next/font/google";
import { Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
// app/layout.js
import Script from "next/script";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "700"] });
const syne = Syne({ subsets: ["latin"] });

export const metadata = {
  title: "SOUNotes",
  description: "",
};

/**
 * Renders the root layout for the application.
 *
 * @param {Object} children - The child components to be rendered within the layout.
 * @returns {JSX.Element} The JSX element representing the root layout with Navbar, Footer, and children components.
 */

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-p-20 scroll-smooth">
      <link rel="icon" href="/favicon.png" />
      <Analytics />
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  );
}
