import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Intro from "../components/Intro";
import About from "../components/About";
import Work from "../components/Work";
import { useEffect, useRef, useState } from "react";
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from "react-locomotive-scroll";
import Blob from "../components/Interactive";
import cx from "classnames";
import Background from "../components/Background";
import Logo from "../components/Logo";
import useDetectSize from "../hooks/useDetectSize";
import { InView } from "react-intersection-observer";

const Home: NextPage = () => {
  const [active, setActive] = useState(0);
  const menu = ["Intro", "About", "Work"];
  const containerRef = useRef(null);
  const screen = useDetectSize().width;

  useEffect(() => {
    console.log(containerRef);
  }, [containerRef]);

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="A personal portfolio page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          getDirection: true,
          // ... all available Locomotive Scroll instance options
        }}
        watch={[screen]}
        containerRef={containerRef}
        onUpdate={() => console.log("sss")}
      >
        <main data-scroll-container ref={containerRef} className="bg-black ">
          <nav className="fixed lg:absolute bottom-0 lg:bottom-auto lg:left-0 lg:h-full w-full lg:w-auto z-30 flex lg:flex-col justify-between lg:justify-center px-8 lg:px-20 py-4 lg:py-0 lg:space-y-24">
            {menu.map((item, index) => (
              <a href={`#${item}`} data-scroll-to key={index}>
                <motion.button
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.12,
                    opacity: { duration: 1 },
                  }}
                  className="relative text-base lg:text-lg font-bold text-white font-heading group"
                >
                  {item}
                  <div
                    className={cx(
                      "abosolute h-px bg-white group-hover:w-full transition-all duration-200",
                      active === index ? "w-full" : "w-0"
                    )}
                  />
                </motion.button>
              </a>
            ))}
          </nav>
          <Logo />

          <div className="relative z-10 flex-grow mx-5 lg:ml-48">
            <Intro
              onVisible={(visible: boolean) =>
                visible && active !== 2 ? setActive(0) : ""
              }
            />

            <About
              onVisible={(visible: boolean) => (visible ? setActive(1) : "")}
            />

            <Work
              onVisible={(visible: boolean) => (visible ? setActive(2) : "")}
            />
          </div>

          <div className="fixed lg:absolute bottom-0 z-10  h-40 w-full lg:hidden bg-gradient-to-b from-transparent  to-black "></div>

          <Blob />

          <Background />
        </main>
      </LocomotiveScrollProvider>
    </>
  );
};

export default Home;
