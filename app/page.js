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
              Get All Your <font color="#ce9fc1">Material</font> at One Spot
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              This site contains BCA Study Materials of Silver Oak University
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-300">
              In More Beautiful and Reader Friendly Format Consider Leaving
              <a href="/about">
                {" "}
                <u>Feedback</u>
              </a>
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Blog 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-10">
              <Link href={"/semester1"}>
                <div className="flex-col justify-center p-6 rounded-3xl shadow-lg transform transition duration-500 hover:scale-105 text-center bg-cardlight dark:bg-carddark">
                  <img src="/number-1.png" className="p-4" />
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      Semester 01
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
            {/* Blog 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-10">
              <Link href={"/semester2"}>
                <div className="flex-col justify-center p-6 rounded-3xl shadow-lg transform transition duration-500 hover:scale-105 text-center bg-cardlight dark:bg-carddark">
                  <img src="/number-2.png" className="p-4" />
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      Semester 02
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
            {/* Blog 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-10">
              <Link href={"/semester3"}>
                <div className="flex-col justify-center p-6 rounded-3xl shadow-lg transform transition duration-500 hover:scale-105 text-center bg-cardlight dark:bg-carddark">
                  <img src="/number-3.png" className="p-4" />
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      Semester 03
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
