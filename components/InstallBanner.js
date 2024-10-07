// components/InstallBanner.js

"use client"; // This is a Client Component

import { useEffect, useState } from "react";
import { Cross1Icon, DownloadIcon } from "@radix-ui/react-icons";

const InstallBanner = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault(); // Prevents the mini-infobar from appearing
      setDeferredPrompt(e); // Stores the event for triggering later
      setShowInstallBanner(true); // Show the custom install banner
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Show the native install prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null); // Clear the deferred prompt after use
        setShowInstallBanner(false); // Hide the install banner
      });
    }
  };

  const handleCloseClick = () => {
    setShowInstallBanner(false); // Hide the install banner
  };

  return (
    <>
      {showInstallBanner && (
        <div className="w-[90%]  fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-100 p-4 shadow-lg rounded-lg flex justify-between items-center md:w-full max-w-md">
          <p className="text-gray-900">
            Install SOUNotes for better experience!
          </p>
          <div className="flex items-center">
            <button
              onClick={handleInstallClick}
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <DownloadIcon />
            </button>
            <button
              onClick={handleCloseClick}
              className="ml-2 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <Cross1Icon />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default InstallBanner;
