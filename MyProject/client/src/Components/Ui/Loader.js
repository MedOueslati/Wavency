import { useState, useEffect } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const isPageAlreadyLoaded = document.readyState === "complete";

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 10;
        } else {
          clearInterval(timer);
          return 100;
        }
      });
    }, 30);

    const handleLoad = () => {
      setProgress(100);
    };

    // If already loaded, skip waiting
    if (isPageAlreadyLoaded) {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);



  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-[#2C2E2D]"
      style={{ backgroundImage: "url('/images/backgroundloader.svg')" }}
    >
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center mb-4">
          <img src="/assets/images/logo.png" alt="logo" />
        </div>
      </div>
      <div className="w-16 h-16 relative mb-4">
        <div className="absolute inset-0 border-4 border-blue-200 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-white text-lg">LOADING...</p>
      <div className="w-64 h-1 bg-gray-700 mt-4 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-200 transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
