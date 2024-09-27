"use client";
import Link from "next/link";

export default function About() {
  return (
    <main>
      <section className="py-12 bg-gray-100 dark:bg-lavender">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 font-syne">
              Who <font color="#ce9fc1">We</font> Are?
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              We are SOU Students just like you. This is our personal project
              and is not sponsered by SOU in any way.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-300">
              We would appreciate if you leave a feedback for us on things we
              could improve upon and things you like about our little project.
              We hope you enjoy it.
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Blog 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-10">
              <Link
                href={"https://forms.gle/XEWTu6Fnew56SBYKA"}
                target="_blank"
              >
                <div className="flex-col justify-center p-6 rounded-3xl shadow-lg transform transition duration-500 hover:scale-105 text-center bg-cardlight dark:bg-carddark">
                  <img src="/feedback.png" className="p-4" />
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      Feedback
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
            {/* Blog 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-10">
              <Link href={"https://github.com/hdz-088"} target="_blank">
                <div className="flex-col justify-center p-6 rounded-3xl shadow-lg transform transition duration-500 hover:scale-105 text-center bg-cardlight dark:bg-carddark">
                  <img src="/github.png" className="p-4" />
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      GitHub
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
            {/* Blog 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-10">
              <Link href={"https://t.me/soubca"} target="_blank">
                <div className="flex-col justify-center p-6 rounded-3xl shadow-lg transform transition duration-500 hover:scale-105 text-center bg-cardlight dark:bg-carddark">
                  <img src="/telegram.png" className="p-4" />
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      Telegram
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
