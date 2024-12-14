"use client";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/toc";

const OnThisPage = ({ htmlContent }) => {
  const [headings, setHeadings] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // State to control the Sheet visibility

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

  const handleLinkClick = (id) => (e) => {
    e.preventDefault(); // Prevent default anchor navigation
    setIsOpen(false); // Close the menu
    // Scroll to the target heading
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <div className="sm:hidden w-full">
        <Sheet
          open={isOpen} // Bind isOpen state to control visibility
          onOpenChange={setIsOpen} // Update state on open/close
          className="sm:hidden w-full"
        >
          <SheetTrigger asChild>
            <div className="flex items-center justify-center">
              <button
                onClick={() => setIsOpen(true)}
                className="border-solid border border-fuchsia-400 z-10 px-4 py-1 bg-background rounded-full bottom-5 shadow-xl fixed text-center "
              >
                Contents
              </button>
            </div>
          </SheetTrigger>
          <SheetContent className="rounded-t-3xl">
            <SheetHeader>
              <SheetTitle>
                <h1 className="text-2xl text-[#ce9fc1] font-bold text-center">
                  Table of Contents
                </h1>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 py-4 items-center">
              <ul className="text-md space-y-1 list-decimal list-inside">
                {headings.map((heading, index) => (
                  <li key={index} className="opacity-70 hover:opacity-100">
                    <a
                      href={`#${heading.id}`}
                      onClick={handleLinkClick(heading.id)} // Close menu and scroll
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="on-this-page lg:right-1/6">
        <h2 className="text-md font-bold my-2 opacity-100">
          Table of Contents
        </h2>
        <ul className="text-sm space-y-1 list-decimal list-inside">
          {headings.map((heading, index) => (
            <li key={index} className="opacity-70 hover:opacity-100">
              <a href={`#${heading.id}`}>{heading.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OnThisPage;
