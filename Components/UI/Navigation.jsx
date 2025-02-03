import React from "react";
import { useState } from "react";
import Link from "next/link";
import { RiTeamLine } from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";
import { HiPresentationChartBar } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  AudioLines,
  BookMarked,
  Box,
  Cpu,
  History,
  Home,
  Mail,
  Slack,
  User,
  Wifi,
} from "lucide-react";
import { Bot } from "lucide-react";
import { useRef } from "react";
import { faL } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    name: "AI/ML",
    href: "/projects/ai-ml",
    icon: Bot,
  },
  {
    name: "AR/VR",
    href: "/projects/ar-vr",
    icon: Box,
  },
  {
    name: "IoT",
    href: "/projects/iot",
    icon: Wifi,
  },
  {
    name: "DSP",
    href: "/projects/dsp",
    icon: AudioLines,
  },
  {
    name: "EMBEDDED SYSTEMS",
    href: "/projects/embedded",
    icon: Cpu,
  },

  {
    name: "QUANTUM COMPUTING",
    href: "/projects/quantum",
    icon: Slack,
  },
];
const ourwork = [
  {
    name: "Current Year",
    href: "/work/current-year",
    icon: MdWork,
  },
  {
    name: "Previous Year",
    href: "/work/previous-year",
    icon: HiPresentationChartBar,
  },
];
const ourteam = [
  {
    name: "Current Team",
    href: "/team/current-team",
    icon: RiTeamLine,
  },
  {
    name: "Alumni",
    href: "/team/alumni",
    icon: AiOutlineTeam,
  },
];

export default function Navigation() {
  const [isMobile, setIsMobile] = useState(false);
  const [ProjectVisible, setProjectVisible] = useState(false);
  const [WorkVisible, setWorkVisible] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const [TeamVisible, setTeamVisible] = useState(false);
  const navRef = useRef(null);
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToBottom = () => {
    setTimeout(() => {
      if (window.innerWidth <= 640) {
        window.scrollTo({
          top: document.body.scrollHeight - window.innerHeight - 200,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: document.body.scrollHeight - window.innerHeight - 400,
          behavior: "smooth",
        });
      }
    }, 800);
  };

  const toggleNavbar = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    if (!showNavbar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    setShowNavbar(() => !showNavbar);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };
    setActiveRoute(router.pathname);

    handleResize(); // Call handleResize initially to set the initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [router.pathname]); //for resize

  const toggleProjectVisibility = () => {
    setProjectVisible(!ProjectVisible);
  };

  const handleProjectClick = (e) => {
    e.preventDefault();
    if (ProjectVisible) {
      document.documentElement.style.setProperty(
        "--border-radius--menu-wrapper",
        "10px"
      );
      document.documentElement.style.setProperty(
        "--border-radius--menu-link",
        "10px"
      );
    } else {
      document.documentElement.style.setProperty(
        "--border-radius--menu-wrapper",
        "10px"
      );
      document.documentElement.style.setProperty(
        "--border-radius--menu-link",
        "10px"
      );
    }
    toggleProjectVisibility();
    setWorkVisible(false);
    setTeamVisible(false);
  };

  const toggleWorkVisibility = () => {
    setWorkVisible(!WorkVisible);
  };

  const handleWorkClick = (e) => {
    e.preventDefault();
    if (WorkVisible) {
      document.documentElement.style.setProperty(
        "--border-radius--menu-wrapper",
        "10px"
      );
      document.documentElement.style.setProperty(
        "--border-radius--menu-link",
        "10px"
      );
    } else {
      document.documentElement.style.setProperty(
        "--border-radius--menu-wrapper",
        "10px"
      );
      document.documentElement.style.setProperty(
        "--border-radius--menu-link",
        "10px"
      );
    }
    toggleWorkVisibility();
    setProjectVisible(false);
    setTeamVisible(false);
  };

  const toggleTeamVisibility = () => {
    setTeamVisible(!TeamVisible);
  };

  const handleTeamClick = (e) => {
    e.preventDefault();
    if (TeamVisible) {
      document.documentElement.style.setProperty(
        "--border-radius--menu-wrapper",
        "10px"
      );
      document.documentElement.style.setProperty(
        "--border-radius--menu-link",
        "10px"
      );
    } else {
      document.documentElement.style.setProperty(
        "--border-radius--menu-wrapper",
        "10px"
      );
      document.documentElement.style.setProperty(
        "--border-radius--menu-link",
        "10px"
      );
    }
    toggleTeamVisibility();
    setProjectVisible(false);
    setWorkVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setProjectVisible(false);
        setWorkVisible(false);
        setTeamVisible(false);
      }
    };
// const [blurBack, setBlurBack]=useState(false)
    const handleScroll = () => {
      // Close subnavigation menus when scrolling down
      if (
        window.scrollY > window.scrollY / 2 &&
        (ProjectVisible || WorkVisible || TeamVisible)
      ) {
        setProjectVisible(false);
        setWorkVisible(false);
        setTeamVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ProjectVisible, WorkVisible, TeamVisible]); //navigation of submenus

  const handleSubmenuClick = () => {
    setProjectVisible(false);
    setWorkVisible(false);
    setTeamVisible(false);
  };

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 300) {
        if (window.scrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

  return isMobile ? (
    <div
      className={`navbar fixed   z-[100] inset-0 flex flex-col w-full h-fit  top-0 z-90 transition-colors duration-300
      ease-in-out ${isVisible ? " " : ""} `}
    >
      <ul className="flex items-center   bg-black/20 backdrop-blur-lg justify-between px-3 py-1 mx-auto w-full ">
        <li className="z-40 p-1 flex items-center gap-2">
          <Link href="/" className="block">
            <img src="/Assets/Yellow.png" className="h-10  " />
          </Link>
          <div className="h-10 w-[1px] bg-white"></div>

          <Link href="https://festnimbus.nith.ac.in">
            <div className="pl-3 z-50">
              <img src="/Assets/nimbusLogo.png" className="h-10"></img>
            </div>
          </Link>
        </li>

        <li>
          <button
            onClick={toggleNavbar}
            className="relative w-6 h-6 flex flex-col justify-center items-center group"
          >
            <span
              className={`block w-full h-[3px] bg-stone-300 rounded-md transition-all duration-300 ease-in-out ${
                showNavbar ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>

            <span
              className={`block w-full h-[3px] bg-stone-300 rounded-md my-1 transition-all duration-300 ease-in-out ${
                showNavbar ? "opacity-0" : ""
              }`}
            ></span>

            <span
              className={`block w-full h-[3px] bg-stone-300 rounded-md transition-all duration-300 ease-in-out ${
                showNavbar ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </li>
      </ul>

      <div
        className={` transition-all duration-700 delay-100 ease-in-out fixed top-14 backdrop-blur-lg w-[100%]   overflow-hidden ${
          showNavbar ? " h-full" : " h-0"
        } `}
      >
        <div className="flex h-screen flex-col justify-between border-e text-gray-100">
          <div className="px-4 py-6">
            <ul className="mt-6 space-y-1">
              <li>
                <a
                  href="/"
                  className="block rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-900"
                >
                  Home
                </a>
              </li>

              <li>
                <details className="group menu [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2">
                    <span className="text-sm font-medium"> Projects </span>

                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <ul className="mt-2 space-y-1 px-4">
                    <li>
                      <a
                        href="/projects/ai-ml"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                      >
                        AI/ML
                      </a>
                    </li>

                    <li>
                      <a
                        href="/projects/ar-vr"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                      >
                        AR/VR
                      </a>
                    </li>

                    <li>
                      <a
                        href="/projects/iot"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                      >
                        IOT
                      </a>
                    </li>

                    <li>
                      <a
                        href="/projects/dsp"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                      >
                        DSP
                      </a>
                    </li>

                    <li>
                      <a
                        href="/projects/embedded"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                      >
                        EMBEDDED SYSTEMS
                      </a>
                    </li>

                    <li>
                      <a
                        href="/projects/quantum"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                      >
                        QUANTAM COMPUTING
                      </a>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <details className="group menu [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2">
                    <span className="text-sm font-medium"> Team </span>

                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <ul className="mt-2 space-y-1 px-4">
                    <li>
                      <a
                        href="/team/current-team"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                      >
                        Current
                      </a>
                    </li>

                    <li>
                      <a
                        href="/team/alumni"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                      >
                        Alumni
                      </a>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <details className="group menu [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2">
                    <span className="text-sm font-medium"> Work </span>

                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <ul className="mt-2 space-y-1 px-4">
                    <li>
                      <a
                        href="/work/current-year"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                      >
                        Current Year
                      </a>
                    </li>

                    <li>
                      <a
                        href="/work/previous-year"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                      >
                        Previous Year
                      </a>
                    </li>
                  </ul>
                </details>
              </li>

              <li
                onClick={() => {
                  setShowNavbar(false);
                  setTimeout(() => {
                    handleContactClick();
                  }, 800);
                }}
              >
                <span className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-100 hover:bg-gray-100 hover:text-gray-700">
                  Contact
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={`fixed top-1 left-0 right-0 z-50 flex justify-between p-3 backdrop:blur-sm backdrop:brightness-75 transition-custom transition-all ease-in-out duration-300 font-batman  ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <Link href="/">
        <div className="pl-3 z-50">
          <img src="/Assets/Yellow.png" className=" h-12"></img>
        </div>
      </Link>
      <nav
        ref={navRef}
        className={`fixed top-1 left-0 right-0 z-50 mx-auto  w-[70%] gap-x-2 gap-y-2 text-gray-200 rounded-[var(--border-radius--menu-wrapper)]  bg-[rgba(26,27,30,0.4)] bg-opacity-60 border  flex-col-reverse flex  max-sm:p-[5px] border-solid border-[#333333] border-opacity-55 transition-custom transition-all ease-in-out duration-300 max-w-[900px] shadow-2xl  ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        } `}
      >
        {ProjectVisible && (
          <div className="max-w-full gap-x-6 gap-y-6 bg-black bg-opacity-60 flex-col flex overflow-hidden p-0 rounded-[10px] animateNav transition-custom">
            <div className="gap-x-4 gap-y-4 grid-rows-[auto_auto] grid-cols-[1fr_1fr_1fr] auto-cols-[1fr] justify-items-center grid my-6 mx-6 ">
              {projects.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white text-center text-sm max-sm:text-xs font-normal leading-[142.857%] max-sm:leading-none no-underline  transition-all duration-[0.2s] ease-[ease-in-out]"
                  onClick={handleSubmenuClick}
                >
                  <item.icon className="inline mx-4 w-6 h-6" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
        {WorkVisible && (
          <div className="max-w-full gap-x-6 gap-y-6 bg-black bg-opacity-60 flex-col flex overflow-hidden p-0 rounded-[10px] animateNav transition-custom">
            <div className="grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] justify-items-center grid my-6 mx-6">
              {ourwork.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleSubmenuClick}
                  className="text-white text-center text-sm max-sm:text-xs font-normal leading-[142.857%] max-sm:leading-none no-underline  transition-all duration-[0.2s] ease-[ease-in-out]"
                >
                  <item.icon className="inline mx-4 w-6 h-6" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
        {TeamVisible && (
          <div className="max-w-full gap-x-6 gap-y-6 bg-black bg-opacity-60 flex-col flex overflow-hidden p-0 rounded-[10px] animateNav transition-custom">
            <div className="gap-x-4 gap-y-4 grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] justify-items-center grid my-6 mx-6">
              {ourteam.map((item) => (
                <Link
                  onClick={handleSubmenuClick}
                  key={item.name}
                  href={item.href}
                  className="text-white text-center text-sm max-sm:text-xs font-normal leading-[142.857%] max-sm:leading-none no-underline  transition-all duration-[0.2s] ease-[ease-in-out]"
                >
                  <item.icon className="inline mx-4 w-6 h-6" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
        <div
          className={`w-full  gap-x-0  gap-y-2 rounded-[var(--border-radius--menu-link)] bg-black bg-opacity-60 justify-evenly items-center flex overflow-auto p-1 max-sm:p-2 transition-custom text-xl shadow-2xl ${isVisible ? "backdrop-blur" : ""}`}
        >
          <p
            onClick={(e) => {
              handleProjectClick(e);
            }}
            className={`menuLink ${activeRoute.startsWith("/projects") ? "active" : ""}`}
          >
            <div className="group flex items-center gap-2">
              <span
                className={`${activeRoute.startsWith("/projects/") ? "opacity-100" : "opacity-0"} text-3xl p-0 group-hover:opacity-80`}
              >
                {"["}
              </span>
              <span className="flex items-center">Projects</span>
              <span
                className={`${activeRoute.startsWith("/projects/") ? "opacity-100" : "opacity-0"} text-3xl p-0 group-hover:opacity-80`}
              >
                {"]"}
              </span>
            </div>
          </p>
          <p
            onClick={(e) => {
              handleWorkClick(e);
            }}
            className={`menuLink ${activeRoute.startsWith("/work/") ? "active" : ""}`}
          >
            <div className="group flex items-center gap-2">
              <span
                className={`${activeRoute.startsWith("/work/") ? "opacity-100" : "opacity-0 group-hover:opacity-80"} text-3xl p-0 group-hover:opacity-80`}
              >
                {"["}
              </span>
              <span className=" flex items-center">Work</span>
              <span
                className={`${activeRoute.startsWith("/work/") ? "opacity-100" : "opacity-0 group-hover:opacity-80"} text-3xl p-0 group-hover:opacity-80`}
              >
                {"]"}
              </span>
            </div>
          </p>

          <Link
            href="/"
            className={`menuLink ${location.pathname === "/" ? "active" : ""}`}
          >
            <div className="group flex items-center gap-2">
              <span
                className={`${location.pathname === "/" ? "opacity-100" : "group-hover:opacity-80 opacity-0"} text-3xl p-0 `}
              >
                {"["}
              </span>
              <span className="flex items-center">Home</span>
              <span
                className={`${location.pathname === "/" ? "opacity-100" : "group-hover:opacity-80 opacity-0"} text-3xl p-0 `}
              >
                {"]"}
              </span>
            </div>
          </Link>

          <p
            onClick={(e) => {
              handleTeamClick(e);
            }}
            className={`menuLink ${activeRoute.startsWith("/team") ? "active" : ""}`}
          >
            <div className="group flex items-center gap-2">
              <span
                className={`${activeRoute.startsWith("/team/") ? "opacity-100" : "opacity-0 group-hover:opacity-80"} text-3xl p-0 `}
              >
                {"["}
              </span>
              <span className="flex items-center">Team</span>
              <span
                className={`${activeRoute.startsWith("/team/") ? "opacity-100" : "opacity-0 group-hover:opacity-80"} text-3xl p-0 `}
              >
                {"]"}
              </span>
            </div>
          </p>

          <Link href="/" scroll={false}>
            <p onClick={scrollToBottom} className="menuLink">
              <div className="group flex items-center gap-2">
                <span
                  className={`opacity-0 group-hover:opacity-80 text-3xl p-0 `}
                >
                  {"["}
                </span>
                <span className="flex items-center">Contact</span>
                <span
                  className={` opacity-0 group-hover:opacity-80 text-3xl p-0 `}
                >
                  {"]"}
                </span>
              </div>
            </p>
          </Link>
        </div>
      </nav>
      <Link href="https://festnimbus.nith.ac.in">
        <div className="pr-5 z-50">
          <img src="/Assets/nimbusLogo.png" className="h-12"></img>
        </div>
      </Link>
    </div>
  );
}
