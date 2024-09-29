"use client";
import Link from "next/link";
// import Typed from "typed.js";
import React, { useRef, useEffect } from "react";

export default function Home() {
  return (
    <main>
      <section className="py-12 bg-gray-100 dark:bg-lavender">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 font-syne">
              Calendar
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}
