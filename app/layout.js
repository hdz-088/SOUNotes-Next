// import { Poppins } from "next/font/google";
// import { Syne } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import { ThemeProvider } from "@/components/theme-provider";
// import Footer from "@/components/footer";
// import { Analytics } from "@vercel/analytics/react";
// import Script from "next/script";

// const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "700"] });
// const syne = Syne({ subsets: ["latin"] });

// export const metadata = {
//   title: "SOUNotes",
//   description: "",
//   manifest: "/manifest.json",
//   themeColor: "#12121c", // Set the theme color to match manifest
// };

// /**
//  * Renders the root layout for the application.
//  *
//  * @param {Object} children - The child components to be rendered within the layout.
//  * @returns {JSX.Element} The JSX element representing the root layout with Navbar, Footer, and children components.
//  */

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className="scroll-p-20 scroll-smooth">
//       <link rel="icon" href="/favicon.png" />
//       <link rel="manifest" href="/manifest.json" />
//       <meta name="theme-color" content="#12121c" />
//       <meta name="description" content="A PWA for note-taking" />
//       <Analytics />
//       <body className={poppins.className}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           disableTransitionOnChange
//         >
//           <Navbar />
//           {children}
//           <Footer />
//         </ThemeProvider>
//       </body>
//       <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
//     </html>
//   );
// }

// app/layout.js

import { Poppins } from "next/font/google";
import { Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
// import { Analytics } from "@vercel/analytics/react";
import InstallBanner from "@/components/InstallBanner"; // Import the InstallBanner component
import Script from "next/script";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "700"] });
const syne = Syne({ subsets: ["latin"] });

export const metadata = {
  title: "SOUNotes",
  description:
    "This site contains BCA Study Materials of Silver Oak University. In More Beautiful and Reader Friendly Format",
  manifest: "/manifest.json",
};

export const themeColor = "#12121c";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-p-20 scroll-smooth">
      <link rel="icon" href="/favicon.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#12121c" />
      <meta
        name="description"
        content="This site contains BCA Study Materials of Silver Oak University. In More Beautiful and Reader Friendly Format"
      />
      {/* <Analytics /> */}
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
          <InstallBanner />
        </ThemeProvider>
      </body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  );
}
