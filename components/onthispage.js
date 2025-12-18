"use client";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/toc";
import { cn } from "@/lib/utils";

const OnThisPage = ({ htmlContent }) => {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Parse the HTML content and extract h2 headings
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;
    const h2Elements = tempDiv.querySelectorAll("h2");
    const h2Data = Array.from(h2Elements).map((h2) => ({
      text: h2.textContent,
      id: h2.id,
    }));
    setHeadings(h2Data);
  }, [htmlContent]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -40% 0px" }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleLinkClick = (id) => (e) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.getElementById(id);
    if (target) {
      // Offset for sticky header
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveId(id);
    }
  };

  return (
    <div className="relative">
      {/* Mobile TOC */}
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            {/* <button
              className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={() => setIsOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            </button> */}
            <div className="flex items-center justify-center">
              <button
                onClick={() => setIsOpen(true)}
                className="border-solid border border-fuchsia-400 z-10 px-4 py-1 bg-background rounded-full bottom-5 shadow-xl fixed text-center "
              >
                Contents
              </button>
            </div>
          </SheetTrigger>
          <SheetContent side="bottom" className="rounded-t-3xl max-h-[80vh] overflow-y-auto">
            <SheetHeader className="mb-4">
              <SheetTitle className="text-center">On This Page</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-2">
              {headings.map((heading) => (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  onClick={handleLinkClick(heading.id)}
                  className={cn(
                    "block px-4 py-2 text-sm rounded-md transition-colors",
                    activeId === heading.id
                      ? "bg-muted font-medium text-primary"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  )}
                >
                  {heading.text}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop TOC */}
      <div className="hidden lg:block sticky top-24 w-80 pr-4">
        <h2 className="mb-4 text-lg font-semibold tracking-tight">
          On This Page
        </h2>
        <nav className="flex flex-col space-y-1">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              onClick={handleLinkClick(heading.id)}
              className={cn(
                "block border-l-2 py-2 pl-4 text-sm transition-all",
                activeId === heading.id
                  ? "border-primary font-medium text-primary"
                  : "border-transparent text-muted-foreground hover:border-muted-foreground/50 hover:text-foreground"
              )}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default OnThisPage;
