"use client";
import Link from "next/link";
// import Typed from "typed.js";
import React, { useRef, useEffect } from "react";
// pages/_app.js
import Script from "next/script";

// export default function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <Component {...pageProps} />
//     </>
//   )
// }

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
          <div className="flex flex-col lg:flex-row mt-20 justify-center gap-20 lg:gap-5">
            {/* Blog 1 */}
            {/* <div className="w-full sm:w-1/2 lg:w-1/3 p-10">
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
            </div> */}
            {/* Blog 2 */}
            {/* <div className="w-full sm:w-1/2 lg:w-1/3 p-10">
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
            </div> */}
            {/* Blog 3 */}
            {/* <div className="w-full sm:w-1/2 lg:w-1/3 p-10">
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
            </div> */}
            <section className="relative group flex flex-col items-center justify-center w-full h-full">
              <Link href={"/semester1"}>
                <div class="file relative w-60 h-40 cursor-pointer origin-bottom [perspective:1500px]">
                  <div className="work-5 bg-amber-600 w-full h-full origin-top rounded-2xl rounded-tl-none group-hover:shadow-[0_20px_40px_rgba(0,0,0,.2)] transition-all ease duration-300 relative after:absolute after:content-[''] after:bottom-[99%] after:left-0 after:w-20 after:h-4 after:bg-amber-600 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[15px] before:left-[75.5px] before:w-4 before:h-4 before:bg-amber-600 before:[clip-path:polygon(0_35%,0%_100%,50%_100%);]"></div>
                  <div className="work-4 absolute inset-1 bg-zinc-400 rounded-2xl transition-all ease duration-300 origin-bottom select-none group-hover:[transform:rotateX(-20deg)]"></div>
                  <div className="work-3 absolute inset-1 bg-zinc-300 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-30deg)]"></div>
                  <div className="work-2 absolute inset-1 bg-zinc-200 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-38deg)]"></div>
                  <div className="work-1 absolute bottom-0 bg-gradient-to-t from-amber-500 to-amber-400 w-full h-[156px] rounded-2xl rounded-tr-none after:absolute after:content-[''] after:bottom-[99%] after:right-0 after:w-[146px] after:h-[16px] after:bg-amber-400 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[10px] before:right-[142px] before:size-3 before:bg-amber-400 before:[clip-path:polygon(100%_14%,50%_100%,100%_100%);] transition-all ease duration-300 origin-bottom flex items-end group-hover:shadow-[inset_0_20px_40px_#fbbf24,_inset_0_-20px_40px_#d97706] group-hover:[transform:rotateX(-46deg)_translateY(1px)]">
                    <div className="flex justify-center h-full w-full items-center">
                      <p className="text-3xl font-bold text-center text-[#d97706]">
                        Semester-01
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </section>
            <section className="relative group flex flex-col items-center justify-center w-full h-full">
              <Link href={"/semester2"}>
                <div class="file relative w-60 h-40 cursor-pointer origin-bottom [perspective:1500px]">
                  <div className="work-5 bg-amber-600 w-full h-full origin-top rounded-2xl rounded-tl-none group-hover:shadow-[0_20px_40px_rgba(0,0,0,.2)] transition-all ease duration-300 relative after:absolute after:content-[''] after:bottom-[99%] after:left-0 after:w-20 after:h-4 after:bg-amber-600 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[15px] before:left-[75.5px] before:w-4 before:h-4 before:bg-amber-600 before:[clip-path:polygon(0_35%,0%_100%,50%_100%);]"></div>
                  <div className="work-4 absolute inset-1 bg-zinc-400 rounded-2xl transition-all ease duration-300 origin-bottom select-none group-hover:[transform:rotateX(-20deg)]"></div>
                  <div className="work-3 absolute inset-1 bg-zinc-300 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-30deg)]"></div>
                  <div className="work-2 absolute inset-1 bg-zinc-200 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-38deg)]"></div>
                  <div className="work-1 absolute bottom-0 bg-gradient-to-t from-amber-500 to-amber-400 w-full h-[156px] rounded-2xl rounded-tr-none after:absolute after:content-[''] after:bottom-[99%] after:right-0 after:w-[146px] after:h-[16px] after:bg-amber-400 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[10px] before:right-[142px] before:size-3 before:bg-amber-400 before:[clip-path:polygon(100%_14%,50%_100%,100%_100%);] transition-all ease duration-300 origin-bottom flex items-end group-hover:shadow-[inset_0_20px_40px_#fbbf24,_inset_0_-20px_40px_#d97706] group-hover:[transform:rotateX(-46deg)_translateY(1px)]">
                    <div className="flex justify-center h-full w-full items-center">
                      <p className="text-3xl font-bold text-center text-[#d97706]">
                        Semester-02
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </section>
            <section className="relative group flex flex-col items-center justify-center w-full h-full">
              <Link href={"/semester3"}>
                <div className="file relative w-60 h-40 cursor-pointer origin-bottom [perspective:1500px]">
                  <div className="work-5 bg-amber-600 w-full h-full origin-top rounded-2xl rounded-tl-none group-hover:shadow-[0_20px_40px_rgba(0,0,0,.2)] transition-all ease duration-300 relative after:absolute after:content-[''] after:bottom-[99%] after:left-0 after:w-20 after:h-4 after:bg-amber-600 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[15px] before:left-[75.5px] before:w-4 before:h-4 before:bg-amber-600 before:[clip-path:polygon(0_35%,0%_100%,50%_100%);]"></div>
                  <div className="work-4 absolute inset-1 bg-zinc-400 rounded-2xl transition-all ease duration-300 origin-bottom select-none group-hover:[transform:rotateX(-20deg)]"></div>
                  <div className="work-3 absolute inset-1 bg-zinc-300 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-30deg)]"></div>
                  <div className="work-2 absolute inset-1 bg-zinc-200 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-38deg)]"></div>
                  <div className="work-1 absolute bottom-0 bg-gradient-to-t from-amber-500 to-amber-400 w-full h-[156px] rounded-2xl rounded-tr-none after:absolute after:content-[''] after:bottom-[99%] after:right-0 after:w-[146px] after:h-[16px] after:bg-amber-400 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[10px] before:right-[142px] before:size-3 before:bg-amber-400 before:[clip-path:polygon(100%_14%,50%_100%,100%_100%);] transition-all ease duration-300 origin-bottom flex items-end group-hover:shadow-[inset_0_20px_40px_#fbbf24,_inset_0_-20px_40px_#d97706] group-hover:[transform:rotateX(-46deg)_translateY(1px)]">
                    <div className="flex justify-center h-full w-full items-center">
                      <p className="text-3xl font-bold text-center text-[#d97706]">
                        Semester-03
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
