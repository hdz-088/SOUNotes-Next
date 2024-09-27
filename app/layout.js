import { Poppins } from "next/font/google";
import { Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "700"] });
const syne = Syne({ subsets: ["latin"] });

export const metadata = {
  title: "SOUNotes",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-p-20 scroll-smooth">
      <link rel="icon" href="/favicon.png" />
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
    </html>
  );
}
