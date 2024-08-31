"use client"; // Ensure this is a client-side component

import { useState } from "react"; // Import React hooks
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import useLocomotiveScroll from "./hooks/useLocomotiveScroll"; // Import the custom hook
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function Home() {
  const [navMenu, setNavMenu] = useState(false);

  const toggleNavMenu = () => {
    setNavMenu(!navMenu);
  };

  useLocomotiveScroll(); // Initialize Locomotive Scroll

  return (
    <main
      data-scroll-container
      className="min-h-screen bg-zinc-900 p-[2vw] font-['Satoshi-Medium'] text-zinc-100"
    >
      <div className="flex justify-between w-full pb-[5vw] gap-[2vw]">
        <div className="w-full flex flex-col gap-[29.5vw]">
          <nav className="flex w-full justify-between items-center h-fit">
            <div className={`flex gap-[1vw] items-start h-fit relative z-40`}>
              <button
                className={`hover:text-zinc-300 h-fit ${
                  navMenu ? "text-zinc-900" : ""
                }`}
                onClick={toggleNavMenu}
              >
                {navMenu ? (
                  <XMarkIcon className="w-[2vw] text-zinc-900" />
                ) : (
                  <Bars3Icon className="w-[2vw] text-zinc-100" />
                )}
              </button>
              {navMenu && (
                <div className="flex flex-col gap-[0.5vw] absolute left-[5vw]">
                  <Link href="/">
                    <h1 className="text-zinc-900 hover:text-zinc-600 text-[1.5vw] hover:scale-105 relative left-0 rotate-[18deg]">
                      Home
                    </h1>
                  </Link>
                  <Link href="/about">
                    <h1 className="text-zinc-900 hover:text-zinc-600 text-[1.5vw] hover:scale-105 relative right-[1.4vw] rotate-[35deg]">
                      About
                    </h1>
                  </Link>
                  <Link href="/contact">
                    <h1 className="text-zinc-900 hover:text-zinc-600 text-[1.5vw] hover:scale-105 relative right-[3.5vw] bottom-[0.5vw] rotate-[52deg]">
                      Contact
                    </h1>
                  </Link>
                  <Link href="/more">
                    <h1 className="text-zinc-900 hover:text-zinc-600 text-[1.5vw] hover:scale-105 relative right-[6vw] bottom-[1.8vw] rotate-[69deg]">
                      More
                    </h1>
                  </Link>
                </div>
              )}
            </div>

            <motion.div
              animate={{ scale: navMenu ? 1 : 0}}
              className="absolute top-[-7vw] left-[-7vw] bg-zinc-100 w-[20vw] h-[20vw] rounded-full"
            ></motion.div>

            <div className="flex gap-[1vw]">
              <Link href="/log-in">
                <h1 className="text-zinc-100 hover:text-zinc-300 text-[1vw] px-[0.5vw] py-[0.2vw] rounded-full border w-[4.5vw] text-center hover:border-zinc-300">
                  LogIn
                </h1>
              </Link>

              <Link href="/sign-in">
                <h1 className="text-zinc-900 hover:text-zinc-950 hover:bg-zinc-300 text-[1vw] bg-zinc-100 px-[0.5vw] py-[0.2vw] rounded-full border w-[4.5vw] text-center">
                  SignIn
                </h1>
              </Link>
            </div>
          </nav>

          <div>
            <div className="text-[4vw] leading-[5vw]">
              <h1>Revolutionizing</h1>
              <h1>
                Education <span className="italic">with</span>
              </h1>
              <h1>Innovation</h1>
            </div>

            <p className="text-[1.1vw]">
              Bringing Tomorrow's Learning to Today's Classrooms
            </p>
          </div>
        </div>

        <div
          data-scroll
          data-scroll-speed="-1vw"
          className="w-[45vw] h-[50vw] flex flex-col gap-[1vw] shrink-0"
        >
          <div className="flex gap-[1vw] h-[45%] items-stretch justify-stretch content-stretch">
            <Link
              href="/about"
              className="min-w-[35%] h-full bg-[#7663FF] rounded-[2vw] overflow-hidden relative"
            >
              <img className="w-full h-full object-cover" src="" alt="" />
              <div className=" absolute flex flex-col justify-between top-0 left-0 h-full w-full p-[1vw] hover:p-[1.5vw] transition-all duration-500">
                <div className="flex justify-between items-center w-full">
                  <span>Connect Us</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
                <div></div>
              </div>
            </Link>
            <div className="h-full relative min-w-[40%] w-full bg-[#7663FF] rounded-[2vw] overflow-hidden">
              <img className="w-full h-full object-cover" src="" alt="" />
            </div>
          </div>
          <div className="w-full h-[50%] bg-[#7663FF] rounded-[2vw] overflow-hidden relative">
            <img className="w-full h-full object-cover" src="" alt="" />
            <div className=" absolute flex flex-col justify-between top-0 left-0 h-full w-full p-[1vw] hover:p-[1.5vw] transition-all duration-500">
              <div></div>

              <div className="flex justify-between items-center w-full">
                <h1 className="text-[2vw]">Explore Virtual Classroom</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen w-full px-[2vw] flex flex-col gap-[2.5vw]">
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-[1vw] items-center">
            <Link href="/log-in">
              <h1 className="text-zinc-100 hover:text-zinc-300 text-[1vw] px-[0.5vw] py-[0.2vw] rounded-full border w-[5vw] text-center hover:border-zinc-300">
                Tutors
              </h1>
            </Link>

            <Link href="/log-in">
              <h1 className="text-zinc-100 hover:text-zinc-300 text-[1vw] px-[0.5vw] py-[0.2vw] rounded-full border w-[5vw] text-center hover:border-zinc-300">
                Courses
              </h1>
            </Link>

            <Link href="/sign-in">
              <h1 className="text-zinc-900 hover:text-zinc-950 hover:bg-zinc-300 text-[1vw] bg-zinc-100 px-[0.5vw] py-[0.2vw] rounded-full border w-[5vw] text-center">
                Explore
              </h1>
            </Link>
          </div>
          <h1 className="text-[2.5vw]">What we offer</h1>
        </div>

        <div className="w-full h-[45vw] flex flex-col gap-[1vw]">
          <div className="h-full w-full flex gap-[1vw]">
            <div className="w-[40%] shrink-0 bg-[#7663FF] rounded-[2vw] overflow-hidden">
              <img className="w-full h-full object-cover" src="" alt="" />
            </div>
            <div className="w-full bg-[#7663FF] rounded-[2vw] overflow-hidden">
              <img className="w-full h-full object-cover" src="" alt="" />
            </div>
          </div>
          <div className="h-full w-full flex gap-[1vw]">
            <div className="w-full bg-[#7663FF] rounded-[2vw] overflow-hidden">
              <img className="w-full h-full object-cover" src="" alt="" />
            </div>
            <div className="w-full bg-[#7663FF] rounded-[2vw] overflow-hidden">
              <img className="w-full h-full object-cover" src="" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex xl:justify-between justify-center md:items-center xl:flex-row flex-col xl:w-full w-fit md:py-[121px] xl:gap-0 gap-[40px] md:gap-[80px]">
          <div className="relative left-10 self-start xl:right-auto">
            <motion.div
              initial={{ rotate: 0, x: 10, y: 0 }}
              whileInView={{ rotate: -7, x: 0, y: 10 }}
              transition={{ duration: 0.8 }}
              className="md:w-[24vw] w-[140px] md:h-[30vw] h-[180px] rounded-[15px] top-0 bg-slate-100"
            ></motion.div>
            <motion.div
              initial={{ rotate: 0, x: -50 }}
              whileInView={{ rotate: 2, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-[24vw] w-[140px] md:h-[30vw] h-[180px] rounded-[15px] absolute top-0 md:left-[108px] left-[40px] bg-slate-200"
            ></motion.div>
            <motion.div
              initial={{ rotate: 0, x: -100 }}
              whileInView={{ rotate: 9, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-[24vw] w-[140px] md:h-[30vw] h-[180px] rounded-[15px] absolute top-0 md:left-[205px] left-[80px] bg-slate-400"
            ></motion.div>
            <motion.div
              initial={{ rotate: 0, x: -150 }}
              whileInView={{ rotate: 14, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-[24vw] w-[140px] md:h-[30vw] h-[180px] rounded-[15px] absolute top-0 md:left-[273px] left-[108px] bg-slate-300"
            ></motion.div>
          </div>

          <div className="flex flex-col md:gap-[30px] gap-[10px] items-start relative">
            <h1 className="md:text-[30px] text-[20px]">Rohit Singh, Mumbai</h1>
            <h4 className="md:w-[435px] w-[260px] text-[12px] md:text-[20px] md:leading-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia
              jsxjsiajciajcijaicjiajc
            </h4>
            <Link href="/">
              <div className="flex justify-center items-center gap-[15.5px] md:px-[18px] px-[14px] py-[8px] bg-filledBg md:py-[10px] rounded-full border-primary border-[1px] w-fit text-[12px] md:text-[16px]">
                <h3 className="text-textColor">Shop Now</h3>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                  >
                    <path
                      d="M0.6885 12.2885L0 11.6L10.0807 1.5H0.7885V0.5H11.7885V11.5H10.7885V2.20775L0.6885 12.2885Z"
                      fill="none"
                      className="fill-current"
                      style={{ fill: "var(--text-color)" }}
                    />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
