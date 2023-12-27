"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { FiSun, FiMoon } from "react-icons/fi";
import { CgClose, CgMenuRight } from "react-icons/cg";

export default function Header() {
  const [navCollapse, setNavCollapse] = useState(true);
  const [scroll, setScroll] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const updateScroll = () => {
      window.scrollY >= 90 ? setScroll(true) : setScroll(false);
    };
    window.addEventListener("scroll", updateScroll);
  }, []);

  const navs = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "testimonials",
    "contact",
  ];

  return (
    <header
      className={`backdrop-filter backdrop-blur-lg ${
        scroll ? "border-b bg-white bg-opacity-40" : "border-b-0"
      } dark:bg-grey-900 dark:bg-opacity-40 border-gray-200 dark:border-b-0 z-30 min-w-full flex flex-col fixed`}
    >
      <nav className="lg:w-11/12 2xl:w-4/5 w-full md:px-6 2xl:px-0 mx-auto py-4 hidden lg:flex items-center justify-between">
        <Link
          href={"/"}
          className="flex items-center space-x-2 font-bold"
        >
          <Image
            src="/hero/shohel-icon.png"
            alt="logo"
            width={30}
            height={30}
          ></Image>
          <span>Shohel Rana</span>
        </Link>

        <ul className="flex items-center gap-8">
          {navs.slice(0, 6).map((e, i) => (
            <li key={i}>
              <ScrollLink
                className="hover:text-violet-700 hover:dark:text-violet-500 transition-colors capitalize cursor-pointer"
                to={e}
                offset={-60}
                smooth={true}
                duration={500}
                isDynamic={true}
              >
                {e}
              </ScrollLink>
            </li>
          ))}
          <Link
            href="https://e2ecode.blogspot.com/"
            className="hover:text-violet-700 hover:dark:text-violet-500 transition-colors capitalize cursor-pointer"
          >
            Blog
          </Link>
          <ScrollLink
            to="contact"
            offset={-60}
            smooth={true}
            duration={500}
            onClick={() => setNavCollapse(true)}
            className="hover:text-violet-700 hover:dark:text-violet-500 transition-colors capitalize cursor-pointer"
          >
            Contact
          </ScrollLink>
          <span
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:bg-gray-100 hover:dark:bg-violet-700 p-1.5 rounded-full cursor-pointer transition-colors"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </span>
        </ul>
      </nav>

      <nav className="font-bold p-4 flex lg:hidden items-center justify-between">
        <Link
          href={"/"}
          className="flex items-center space-x-2 font-bold"
        >
          <Image
            src="/hero/shohel-icon.png"
            alt="logo"
            width={30}
            height={30}
          ></Image>
          <span>Shohel Rana</span>
        </Link>
        <div className="flex items-center gap-4">
          <span
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="bg-gray-100 dark:bg-violet-700 p-1.5 rounded-full cursor-pointer transition-colors"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </span>
          <CgMenuRight size={20} onClick={() => setNavCollapse(false)} />
        </div>
      </nav>

      <div
        className={`flex min-h-screen w-screen absolute lg:hidden top-0 ${
          !navCollapse ? "right-0" : "right-[-100%]"
        } bottom-0 z-50 ease-in duration-300`}
      >
        <div
          className="w-1/4 md:w-2/4"
          onClick={() => setNavCollapse(true)}
        ></div>

        <div className="flex flex-col p-4 gap-5 bg-gray-100/95 backdrop-filter backdrop-blur-sm dark:bg-grey-900/95 w-3/4 md:w-2/4">
          <CgClose
            className="self-end my-2"
            size={20}
            onClick={() => setNavCollapse(true)}
          />

          {navs.slice(0, 6).map((e) => (
            <ScrollLink
              key={e}
              className="hover:text-purple-600 py-1.5 px-4 rounded transition-colors capitalize cursor-pointer"
              to={e}
              offset={-60}
              smooth={true}
              duration={500}
              isDynamic={true}
              onClick={() => setNavCollapse(true)}
            >
              {e}
            </ScrollLink>
          ))}
          <Link
            href="https://e2ecode.blogspot.com/"
            className="hover:text-purple-600 py-1.5 px-4 rounded transition-colors capitalize cursor-pointer"
          >
            Blog
          </Link>
          <ScrollLink
            to="contact"
            offset={-60}
            smooth={true}
            duration={500}
            onClick={() => setNavCollapse(true)}
            className="hover:text-purple-600 py-1.5 px-4 rounded transition-colors capitalize cursor-pointer"
          >
            Contact
          </ScrollLink>
        </div>
      </div>
    </header>
  );
}
