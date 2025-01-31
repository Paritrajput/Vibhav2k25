import Image from "next/image";
import loader from "../public/Assets/amongus.gif";
import { useState, useEffect } from "react";
export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {loading && (
        <div className="w-60 overflow-hidden animate-slideRight">
          <Image
            src={loader}
            alt="Loading Animation"
            layout="responsive"
            priority
          />
          <div className="w-full h-2 bg-gray-200 mt-2">
            <div className="h-full bg-blue-500 animate-loadingLine" ></div>
          </div>
        </div>
      )}
    </div>
  );
}
