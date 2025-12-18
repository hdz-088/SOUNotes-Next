"use client";

import React from "react";
import { WifiOff } from "lucide-react";

export default function OfflinePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <div className="bg-secondary/50 p-6 rounded-full mb-6 anim-pulse">
        <WifiOff className="w-12 h-12 text-muted-foreground" />
      </div>
      <h1 className="text-3xl font-bold mb-3 font-syne">You are offline</h1>
      <p className="text-muted-foreground max-w-md mb-8">
        It seems you&apos;ve lost your internet connection. Please check your network and
        try again.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors font-medium active:scale-95 duration-200"
      >
        Try Again
      </button>
    </div>
  );
}
