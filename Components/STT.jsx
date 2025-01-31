import { useEffect, useState } from "react";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export default function STT() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (

    <div className="fixed z-10 top-10 grid place-items-center w-full">

      <button
        type="button"
        name="scroll to top"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? "opacity-100" : "opacity-0",

          "bg-[#96969692] hover:bg-[#0e69c4] hover:text-[#f2eaeac9] animate-bounce inline-flex items-center rounded-full p-3 text-[#00000] shadow-sm  focus:outline-none "
        )}
      >
        <ChevronDoubleUpIcon className="h-6 w-6" aria-hidden="true" />

      </button>
    </div>
  );
}
