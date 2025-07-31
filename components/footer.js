"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="p-3 w-full bg-background bottom-0">
      <div className="container mx-auto text-center font-light">
        <p>
          Made By
          <Link href={"/about"}>
            {" "}
            <u>
              <b>SOU Student</b>
            </u>{" "}
          </Link>
          for SOU Students
        </p>
      </div>
    </div>
  );
};

export default Footer;
