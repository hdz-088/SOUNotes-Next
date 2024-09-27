"use client";
import React from "react";
import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

import { ModeToggle } from "./theme-btn";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setProgress(20);

    setTimeout(() => {
      setProgress(40);
    }, 100);

    setTimeout(() => {
      setProgress(100);
    }, 400);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setProgress(0);
    }, 50);
  }, []);

  return (
    <nav className="p-4 bg-navbar sticky top-0 backdrop-blur z-10 border-b">
      <LoadingBar
        color="#c397b8"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/about"}>
          <img src="/favicon.png" alt="favicon" width={32} height={32} />
        </Link>
        <Link href={"/"}>
          <h1 className="text-3xl font-bold">
            <font color="#768afd">SOUNotes</font>
          </h1>
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
