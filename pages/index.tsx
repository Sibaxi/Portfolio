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

function Randomize(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const Home: NextPage = () => {
  const [active, setActive] = useState(0);
  const menu = ["Intro", "About", "Work"];
  const containerRef = useRef(null);

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
        watch={
          [
            // screenW,
            // screenH,
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
        onUpdate={() => console.log("updarted")}
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
          <svg
            viewBox="0 0 315 263"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 absolute top-0 left-0 mx-20 my-20"
          >
            <motion.circle
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6 }}
              cx="40"
              cy="202"
              r="38.5"
              stroke="white"
              strokeWidth="3"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6 }}
              d="M144.701 241.108L33.4239 21.1884L90.9169 21.1884L202.194 241.108L144.701 241.108Z"
              stroke="white"
              strokeWidth="3"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6 }}
              d="M246.701 241.108L135.424 21.1884L192.917 21.1884L304.194 241.108L246.701 241.108Z"
              stroke="white"
              strokeWidth="3"
            />
          </svg>

          <div className="relative z-10 flex-grow mx-5 lg:ml-48">
            <Intro />

            <About />

            <Work />
          </div>

          <div className="fixed lg:absolute bottom-0 z-10  h-40 w-full lg:hidden bg-gradient-to-b from-transparent  to-black "></div>

          <Blob />
          <div className="fixed lg:absolute inset-0 flex flex-col items-end justify-between overflow-hidden">
            <motion.div
              initial={{ scale: 2 }}
              animate={{
                scale: 2,
                x: [
                  Randomize(-10, -250),
                  Randomize(-10, -250),
                  Randomize(-10, -250),
                  Randomize(-10, -250),
                  Randomize(-10, -250),
                ],
                y: [
                  Randomize(-10, 250),
                  Randomize(-10, 250),
                  Randomize(-10, 250),
                  Randomize(-10, 250),
                  Randomize(-10, 250),
                ],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className=" h-80 w-80  rounded-full blur-3xl bg-indigo-900 mix-blend-exclusion mr-20"
            ></motion.div>
            <motion.div
              initial={{ scale: 2 }}
              animate={{
                scale: 2,
                x: [
                  Randomize(-10, -250),
                  Randomize(-10, -250),
                  Randomize(-10, -250),
                  Randomize(-10, -250),
                  Randomize(-10, -250),
                ],
                y: [
                  Randomize(-10, -250),
                  Randomize(-10, -250),
                  Randomize(-10, -250),
                  Randomize(-10, -250),
                  Randomize(-10, -250),
                ],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className=" h-80 w-80  rounded-full blur-3xl  opacity-30 bg-teal-600  mr-80"
            ></motion.div>
          </div>
        </main>
      </LocomotiveScrollProvider>
    </>
  );
};

export default Home;
